import Foto from "./Foto";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default function Fotos() {
    const [fotosDKZ, setFotosDKZ] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const getFotosDKZ = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=314562841&single=true&output=csv"
            );

            const imagenes = Papa.parse(response.data, { header: true });

            setFotosDKZ(imagenes.data);
            setLoading(false);
        };
        getFotosDKZ();
    }, []);
    return (
        <div className="container pt-5 my-5">
            {loading ? (
                <div className="my-5 text-white  d-flex justify-content-center my-5 p-5">
                    <Spinner
                        className="fs-1"
                        animation="border"
                        role="status"
                        variant="light"
                    ></Spinner>
                </div>
            ) : (
                <div className="d-flex flex-wrap justify-content-center">
                    {fotosDKZ.map((miembro, id) => (
                        <Foto key={id} uerta data={miembro} />
                    ))}
                </div>
            )}
        </div>
    );
}
