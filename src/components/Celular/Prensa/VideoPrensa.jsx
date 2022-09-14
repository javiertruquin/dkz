import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Image } from "react-bootstrap";

export default function VideoPrensa() {
    const params = useParams();
    const [trabajos, setTrabajos] = useState({});
    const getTrabajos = async () => {
        const response = await axios.get(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=177918093&single=true&output=csv"
        );

        const trabajos = Papa.parse(response.data, { header: true });
        const trabajo1 = trabajos.data;

        const trabajoFiltrado = trabajo1.filter(
            (trabajo) => trabajo.id === params.id
        );
        setTrabajos(trabajoFiltrado[0]);
    };
    useEffect(() => {
        getTrabajos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const {
        seccion,
        titular,
        subtitulo,
        descripcion,
        tituloIntermedio,
        descripcion2,
        imagen1,
        imagen2,
        imagen3,
        fecha,
        textoImagen1,
        textoImagen2,
        textoImagen3,
    } = trabajos;
    // const hoy = Date()
    // const fechanoticia= hoy.getDate();
    return (
        <div className="mt-5 padding-sitioconst container">
            <p className="text-white peso-bold">{seccion}</p>

            <p className="text-white tamaño-mas-grande peso-bold">{titular}</p>
            <p className="text-white tamaño-grande">{subtitulo}</p>

            <br />
            <Image src={imagen1} alt="" fluid />
            <br />
            <p className="text-white mt-1 ms-3">{textoImagen1}</p>

            <p className="text-white my-4 py-2">{fecha} </p>

            <pre className="text-white tamaño-medio peso-regular mt-4 wrap-pre">
                {descripcion}
            </pre>
            {tituloIntermedio === "" ? (
                ""
            ) : (
                <p className="text-white tamaño-grande text-center mx-4 my-5 peso-bold">
                    {tituloIntermedio}
                </p>
            )}

            <pre className="text-white tamaño-medio peso-regular mt-4 wrap-pre">
                {descripcion2}
            </pre>
        </div>
    );
}
