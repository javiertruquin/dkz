import { Col, Form, Row, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function FormularioContactoEscritorio() {
    const [validated, setValidated] = useState(false);
    const form = useRef();

    /*funcion para mandar msj al gmail*/
    const sendEmail = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === true) {
            e.stopPropagation();
            emailjs
                .sendForm(
                    "service_rg18144",
                    "template_httqo6d",
                    e.target,
                    "user_Stg5159fb3qxm0lYluqAN"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado con éxito",
                showConfirmButton: false,
                timer: 2000,
            });
            form.reset();
            setValidated(false); //
        } else {
            setValidated(true);
            Swal.fire({
                icon: "error",
                title: "No se pudo enviar el mensaje. Por favor verifica los datos.",
            });
        }
    };

    return (
        <div  className="container mt-5">
            <div className="padding-nav-contacto">
                <p className="text-center text-white peso-bold-italic tamaño-mas-grande mt-5">
                    Contacto
                </p>
            </div>
            <div className="contenedor-formulario container">
                <Form
                    ref={form}
                    noValidate
                    validated={validated}
                    onSubmit={sendEmail}
                    className="form-contactanos-escritorio"
                >
                    <div>
                        <div>
                            <Row className="my-2">
                                <Form.Group
                                    className="text-white"
                                    as={Col}
                                    md="6"
                                    controlId="validationCustom03"
                                >
                                    <Form.Label className=" text-white peso-italic tamaño-grande ">
                                        Nombre*
                                    </Form.Label>
                                    <Form.Control
                                        className=" text-white"
                                        type="text"
                                        required
                                        name="name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Ingrese su nombre completo por favor.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="6"
                                    controlId="validationCustom04"
                                >
                                    <Form.Label className=" text-white peso-italic tamaño-grande ms-5">
                                        Whatsapp*
                                    </Form.Label>
                                    <Form.Control
                                        className="ms-5"
                                        type="phone"
                                        required
                                        name="cel"
                                    />
                                    <Form.Control.Feedback type="invalid" className="ms-5">
                                        Ingrese su número de whatsapp completo
                                        por favor.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="my-2">
                                <Form.Group
                                    as={Col}
                                    md="6"
                                    controlId="validationCustom03"
                                >
                                    <Form.Label className=" text-white peso-italic tamaño-grande">
                                        Email*
                                    </Form.Label>
                                    <Form.Control
                                        className=""
                                        type="email"
                                        required
                                        name="email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Ingrese su Email por favor.
                                    </Form.Control.Feedback>
                                    <span className="mt-1 ms-3 text-white peso-italic tamaño-chico">
                                    * Campo requerido
                                </span>
                                </Form.Group>
                                <Form.Group
                                    className="text-white"
                                    as={Col}
                                    md="6"
                                    controlId="validationCustom03"
                                >
                                    <Form.Label className=" text-white peso-italic tamaño-grande ms-5" >
                                        Mensaje*
                                    </Form.Label>
                                    <Form.Control
                                        className="text-white ms-5 input-mensaje"
                                        as="textarea"
                                        type="text"
                                        required
                                        name="msj"
                                    />
                                    <Form.Control.Feedback type="invalid" className="ms-5">
                                        Ingrese su nombre completo por favor.
                                    </Form.Control.Feedback>
                                </Form.Group>
                              
                            </Row>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button
                            className="boton-verde-formulario-escritorio"
                            size="sm"
                            type="submit"
                            value="Send"
                        >
                            <span className=" m-0 p-0 color-azul-oscuro peso-bold tamaño-grande">
                                Enviar
                            </span>
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
