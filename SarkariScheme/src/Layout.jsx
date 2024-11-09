import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import About from "./components/About/About";
import {SelectedCategoryProvider} from './contexts/context'
import Images from "./components/ImageSlider/Images";
import Home from "./components/HomePage/Home"

function Layout() {
    return (
        <>
            <SelectedCategoryProvider>
            <Images/>
            <Header />
            <Outlet />
            <Home />
            <About/>
            <Footer />
            </SelectedCategoryProvider>
        </>
    )
}


export default Layout
