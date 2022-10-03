import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";
import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import TrabajosPrensa from "../../TrabajosPrensa";
import { Radio } from "./Radio";

export default function VideoPrensaEscritorio() {
    const params = useParams();
    const [trabajos, setTrabajos] = useState({});
    const [todosTrabajos, setTodosTrabajos] = useState({});
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

    const getTodosTrabajos = async () => {
        const response = await axios.get(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWLAKe7hfvcqVVAdHT81qbaUQn_d9ghEPU8i2jJl1Ud9aNcB5OVrP__Rr-0LW3oXGQA_A1QC0phs8h/pub?gid=177918093&single=true&output=csv"
        );

        const imagenes = Papa.parse(response.data, { header: true });
        setTodosTrabajos(imagenes.data);
    };
    useEffect(() => {
        getTodosTrabajos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        id,
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
        imagenMini,
    } = trabajos;

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className="mt-5 padding-sitioconst container d-flex">
            <div className="col-8">
                <p className="text-white peso-bold mx-5 px-5">{seccion}</p>

                <p className="text-white tamaño-mas-grande peso-bold mx-5 px-5">
                    {titular}
                </p>
                <p className="text-white tamaño-grande mx-5 px-5">
                    {subtitulo}
                </p>

                <br />
                <Image className="w-100" src={imagen1} alt="" fluid />
                <br />
                <div className="d-flex">
                    <p className="text-white mt-1 mb-0">
                        {textoImagen1}{" "}
                        <hr className="color-verde-claro-fondo px-5" />
                    </p>
                </div>

                <p className="text-white my-4 py-2 mx-5 px-5 tamaño-chico">
                    {fecha}{" "}
                </p>

                <pre className="text-white tamaño-medio peso-regular mt-4 wrap-pre mx-5 px-5">
                    {descripcion}
                </pre>
                {tituloIntermedio === "" ? (
                    ""
                ) : (
                    <div>
                        <p className="text-white tamaño-grande text-center mx-4 my-5 peso-bold">
                            {tituloIntermedio}
                        </p>
                    </div>
                )}

                <pre className="text-white tamaño-medio peso-regular mt-4 wrap-pre mx-5 px-5">
                    {descripcion2}
                </pre>
            </div>
            <div className="col-4 ms-4">
                <hr className="color-verde-claro-fondo" />
                <p className="text-white tamaño-mas-grande peso-bold">
                    Todos los Artículos:
                </p>
                <div onClick={reload}>
                    <TrabajosPrensa />
                    <Radio />
                </div>
            </div>
        </div>
    );
}
