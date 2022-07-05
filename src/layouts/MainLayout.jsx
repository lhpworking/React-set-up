import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginModal from '../components/LoginModal'
import RegisterModal from '../components/RegisterModal'
import Sidebar from '../components/Sidebar'

export default function MainLayout() {
    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
            <LoginModal />
            <RegisterModal />
        </>

    )
}
