import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutUs from "../aboutUs/aboutUs"
import Navbar from "../navbar/navbar"
import Slider from "../slider/slider"
import Services from "../services/services";
import Products from "../products/products";
import MoreDetails from "../moreDetails/moreDetails";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

import { getSlider, getAboutUs, getServices, getProducts, getMoreDetails } from "../../actions/index";


export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSlider())
        dispatch(getAboutUs())
        dispatch(getServices())
        dispatch(getProducts())
        dispatch(getMoreDetails())
    }, [dispatch])

    return (
        <div>
            <Navbar />
            <Slider />
            <AboutUs />
            <Services />
            <Products />
            <MoreDetails />
            <Contact />
            <Footer/>
        </div>
    )
}