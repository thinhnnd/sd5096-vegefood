import { Outlet } from 'react-router-dom'
import { ContactHeader } from './components/ContactHeader/ContactHeader'
import AppNavbar from './components/navbar/AppNavbar'
import Footer from './components/footers/Footer'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <>
      <ContactHeader />
      <AppNavbar />
      <Outlet />
      <Footer />
      <ToastContainer position='bottom-right' autoClose={2000} />
    </>
  )
}

export default MainLayout
