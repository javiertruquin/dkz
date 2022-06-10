import axios from "axios";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useParams } from "react-router";

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
    const { titulo, descripcion, imagen1, imagen2, imagen3 } = trabajos;
    return (
        <div className="mt-5 padding-sitioconst container">
            <p className="text-white tamaño-mas-grande">{titulo}</p>
            <br />
            <p className="text-white tamaño-grande">{descripcion}</p>
            <br />
            <img src={imagen1} alt="" />
            <br />
            <img src={imagen2} alt="" />
            <br />
            <img src={imagen3} alt="" />
        </div>
    );
}
