import React from "react";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";

export default function componentName() {
    return (
        <>
            <div className="padding-nav">
                <p className="text-center text-white peso-bold-italic tamaño-grande mt-5 mb-0">
                    Contacto
                </p>
                <Form noValidate className="mx-auto form-contactanos mb-5 p-2 ">
                    <div>
                        <div className="card-body">
                            <Row className="mb-2">
                                <Form.Group
                                    className=""
                                    as={Col}
                                    md="12"
                                    controlId="validationCustom03"
                                >
                                    <Form.Label className="ms-3 text-white peso-italic tamaño-medio">
                                        Nombre*
                                    </Form.Label>
                                    <Form.Control
                                        classname="mb-2"
                                        type="text"
                                        required
                                        name="name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Ingrese su nombre completo por favor.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="validationCustom04"
                                >
                                    <Form.Label className="ms-3 text-white peso-italic tamaño-medio mt-2">
                                        Whatsapp*
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        type="text"
                                        required
                                        name="cel"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Ingrese su número de whatsapp completo
                                        por favor.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="validationCustom03"
                                >
                                    <Form.Label className="ms-3 text-white peso-italic tamaño-medio mt-2">
                                        Email*
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        type="email"
                                        required
                                        name="email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Ingrese su Email por favor.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="validationCustom03"
                                >
                                    <Form.Label className="ms-3 text-white peso-italic tamaño-medio mt-2 ">
                                        Mensaje*
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            className="mb-2"
                                            as="textarea"
                                            name="msj"
                                        />
                                    </InputGroup>
                                    <span className="mt-1 ms-3 text-white peso-italic tamaño-chico">
                                        * Campo requerido
                                    </span>
                                </Form.Group>
                            </Row>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center padding-fixed-contactanos  my-3 ">
                        <div
                            className="boton-verde"
                            size="sm"
                            type="submit"
                            value="Send"
                        >
                            <p className=" m-0 p-0 text-white tamaño-medio">
                                Enviar
                            </p>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}
