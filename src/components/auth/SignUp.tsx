import { useState } from 'react'
import { Input, ThemeUIStyleObject, Grid, Button, Text, Alert } from 'theme-ui'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { HOME_PAGE_PATH, SIGN_IN_PAGE_PATH } from '../../constants/route.const'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth/Authprovider'
import { passwordValidation } from '../../utils/passwordValidation'
import { FormGroup } from '../forms/FormGroup'
import { FormWrapper } from '../forms/FormWrapper'

interface SignUpFormValues {
  email: string
  password: string
  repeatPassword: string
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: passwordValidation,
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Repeat Password is required')
})

export interface SignUpProps {
  sx?: ThemeUIStyleObject
}

const SignUp = ({ sx }: SignUpProps): JSX.Element => {
  const { signUp } = useAuth()
  const [formError, setFormError] = useState<string>('')
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <FormWrapper title='Create account' sx={{ ...sx }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: ''
        }}
        onSubmit={async (values: SignUpFormValues) => {
          setFormSubmitting(true)
          try {
            await signUp(values.email, values.password)
            try {
              navigate(HOME_PAGE_PATH)
            } catch (error) {
              console.log(`🚀 ~ signup error`, error)
            }
          } catch (error) {
            console.log(error)
            setFormError(formError)
            setFormSubmitting(false)
          }

          console.log('signup formSubmitting, ', formSubmitting)
        }}
        validationSchema={SignUpSchema}
      >
        {({ getFieldProps }) => (
          <Form>
            <FormGroup label='Email address' name='email'>
              <Input sx={{ borderColor: 'rgb(209, 218, 230)' }} {...getFieldProps('email')} id='email' />
            </FormGroup>
            <FormGroup label='Password' name='password'>
              <Input
                sx={{
                  borderColor: 'rgb(209, 218, 230)'
                }}
                {...getFieldProps('password')}
                type='password'
                id='password'
              />
            </FormGroup>
            <FormGroup label='Repeat password' name='repeatPassword'>
              <Input
                sx={{
                  borderColor: 'rgb(209, 218, 230)'
                }}
                {...getFieldProps('repeatPassword')}
                type='password'
                id='repeatPassword'
              />
            </FormGroup>
            <Grid>
              <Button className='btn btn-primary' type='submit' sx={{ mt: 1 }} variant='buttons.primary'>
                Sign up
              </Button>
              <Link to={{ pathname: SIGN_IN_PAGE_PATH }}>
                <Text
                  sx={{
                    display: 'inline-block',
                    textDecoration: 'none',
                    textAlign: 'center',
                    margin: '0 auto',
                    fontSize: 2,
                    color: 'brand'
                  }}
                >
                  Do you already have an account? Please login in here.
                </Text>
              </Link>
            </Grid>
            {formError && <Alert variant='error'>{formError}</Alert>}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
}
export default SignUp
