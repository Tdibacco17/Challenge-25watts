import imagen from "./urn_aaid_sc_US_6917e143-6516-4abf-80f3-6062b95b4ebc.png"
import style from "./contact.module.css";
import { useState } from "react";

function validate(input) {
    let errors = {};
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!input.name || input.name === " " || input.name.length === 0) {
        errors.name = "Name"
    }
    if (!input.email || input.email === " " || input.email.length === 0 || (input.email && !regexEmail.test(input.email))) {
        errors.email = "Email"
    }
    if (!input.phone || input.phone === " " || input.phone.length === 0) {
        errors.phone = "Phone"
    }
    if (!input.message || input.message === " " || input.message.length === 0) {
        errors.message = "Message"
    }
    return errors;
}

export default function Contact() {

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Mensaje enviado con exito!");
        setInput({
            name: "",
            email: "",
            phone: "",
            message: ""
        })
    }

    return (
        <div className={style.containerAll}>
            <div className={style.titulo}>
                <h1>Get in touch</h1>
                <h1 id={style.tituloNaranja}>We are hiring!</h1>
            </div>
            <img
                src={imagen}
                alt="Img" />
            <div className={style.formulario}>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <input
                            name="name"
                            value={input.name}
                            onChange={e => handleChange(e)}
                            id={style.tituloNegro}
                            type="text"
                            placeholder="Name" />
                    </div>
                    <div>
                        <input
                            name="email"
                            value={input.email}
                            onChange={e => handleChange(e)}
                            id={style.tituloNegro}
                            type="text"
                            placeholder="info@25watts.com.ar" />
                    </div>
                    <div>
                        <input
                            name="phone"
                            value={input.phone}
                            onChange={e => handleChange(e)}
                            id={style.tituloNegro}
                            type="text"
                            placeholder="Phone" />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={input.message}
                            onChange={e => handleChange(e)}
                            id={style.tituloNegro}
                            placeholder="Message" />
                    </div>
                    <button
                        disabled={
                            errors.name || errors.email || errors.phone || errors.message
                            || input.name === "" || input.email === "" || input.phone === "" || input.message === ""
                        }>Send</button>
                </form>
                <div className={style.containerErrors}>
                    {errors.name && (<p>Falta completar {errors.name}</p>)}
                    {errors.email && (<p>Falta completar {errors.email}</p>)}
                    {errors.phone && (<p>Falta completar {errors.phone}</p>)}
                    {errors.message && (<p>Falta completar {errors.message}</p>)}
                </div>
            </div>
            <div className={style.containerAll2} />
        </div>
    )
}