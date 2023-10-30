import { useNavigate } from 'react-router-dom'
import { SIGN_IN_PAGE_PATH } from '../../constants/route.const'
import { useAuth } from '../../context/auth/Authprovider'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Profile = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('user ', user)

    if (!user) {
      toast.error('You need to login to view this page')
      setTimeout(() => {
        navigate(SIGN_IN_PAGE_PATH)
      }, 1000)
    }
  }, [])

  return user ? (
    <div className='card' style={{ maxWidth: '300px' }}>
      <img
        className='card-img-top'
        src={user?.photoURL ?? `https://ui-avatars.com/api?name=${user.displayName ?? 'No Name'}`}
        alt={user?.displayName || 'No Name'}
      />
      <div className='card-body'>
        <h4 className='card-title'>Name: {user?.displayName || 'No Name'}</h4>
        <p className='card-text'>Email: {user?.email}</p>
        <a href='#' className='btn btn-primary'>
          See Profile
        </a>
      </div>
    </div>
  ) : (
    <div>Unauthorize</div>
  )
}

export default Profile
