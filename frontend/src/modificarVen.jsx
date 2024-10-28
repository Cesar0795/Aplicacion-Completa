"use client";
import Link from "next/link";
import axios from "axios";
export default function ModificarVenta({id}){
    async function ModificarVenta() {
        //console.log(id);
        const url ="http://localhost:3000/cancelarVenta/"+id;
        const respuesta = await axios.post(url);
        window.location.replace("/ventas/mostrar");
    }
    return(
        <Link href="" onClick={ModificarVenta}>cancelar</Link>
    )
}