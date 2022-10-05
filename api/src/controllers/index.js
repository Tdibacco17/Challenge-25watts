import { contenidoSlider, contenidoAboutUs, contenidoServices, contenidoProducts, contenidoMoreDetails } from "../info25Watts/index.js";

export const slider = async (req, res) => {
    try {
        res.json(contenidoSlider)
    } catch (e) {
        console.log(e.menssage)
    }
}

export const aboutUs = async (req, res) => {
    try {
        res.json(contenidoAboutUs)
    } catch (e) {
        console.log(e.menssage)
    }
}

export const services = async (req, res) => {
    try {
        res.json(contenidoServices)
    } catch (e) {
        console.log(e.menssage)
    }
}

export const products = async (req, res) => {
    try {
        res.json(contenidoProducts)
    } catch (e) {
        console.log(e.menssage)
    }
}


export const moreDetails = async (req, res) => {
    try {
        res.json(contenidoMoreDetails)
    } catch (e) {
        console.log(e.menssage)
    }
}
