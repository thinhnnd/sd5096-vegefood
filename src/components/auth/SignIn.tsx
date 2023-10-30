import { useState } from 'react'
import { Input, ThemeUIStyleObject, Grid, Button, Text } from 'theme-ui'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { HOME_PAGE_PATH, SIGN_UP_PAGE_PATH } from '../../constants/route.const'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth/Authprovider'
import { FormGroup } from '../forms/FormGroup'
import { FormWrapper } from '../forms/FormWrapper'

export interface SignInProps {
  sx?: ThemeUIStyleObject
}

interface SignInFormValues {
  email: string
  password: string
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8).max(200)
})

export const SignIn = ({ sx }: SignInProps): JSX.Element => {
  const { signIn } = useAuth()
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
  const [formError, setFormError] = useState<string>('')
  const navigate = useNavigate()

  return (
    <FormWrapper title='Welcome back' sx={{ ...sx }}>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={async (values: SignInFormValues) => {
          setFormSubmitting(true)
          try {
            await signIn(values.email, values.password)
            navigate(HOME_PAGE_PATH)
          } catch (error: unknown) {
            let errorMessage = 'error.unknown'
            if (typeof error === 'string') {
              errorMessage = error.toUpperCase()
            } else if (error instanceof Error) {
              errorMessage = error.message
            }
            setFormError(errorMessage)
            setFormSubmitting(false)
          }

          console.log('formSubmitting ', formSubmitting)
        }}
        validationSchema={SignInSchema}
      >
        {({ getFieldProps }) => (
          <Form>
            <FormGroup label='You email address' name='email'>
              <Input sx={{ borderColor: 'rgb(209, 218, 230)' }} {...getFieldProps('email')} id='email' />
            </FormGroup>
            <FormGroup label='Password' name='password'>
              <Input
                sx={{ width: '400px', borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('password')}
                type='password'
                id='password'
              />
            </FormGroup>
            <Grid>
              <Button className='btn btn-primary' type='submit' sx={{ mt: 1 }} variant='buttons.primary'>
                Log in
              </Button>
              <Link to={SIGN_UP_PAGE_PATH}>
                <Text
                  sx={{
                    display: 'inline-block',
                    color: 'brand',
                    textDecoration: 'none',
                    fontSize: 2
                  }}
                >
                  Dont have an account? Please Sign up here.
                </Text>
              </Link>
            </Grid>
            <br />
            {formError && (
              <div className='alert alert-danger' role='alert'>
                {formError}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
}
