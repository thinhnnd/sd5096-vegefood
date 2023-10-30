import Profile from '../components/auth/Profile'

export const ProfilePage = () => {
  return (
    <>
      <section className='ftco-section ftco-degree-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 ftco-animate'>
              <h5>User Profile</h5>
              <hr />
              <Profile />
            </div>

            <div className='col-lg-8 ftco-animate'>
              <h5>Wish List</h5>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
