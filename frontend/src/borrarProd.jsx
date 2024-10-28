"use client";
import Link from "next/link";
import axios from "axios";
export default function BorrarProducto({id}){
    async function borrarproducto() {
        //console.log(id);
        const url ="http://localhost:3000/borrarProducto/"+id;
        const respuesta = await axios.delete(url);
        window.location.replace("/productos/mostrar");
    }
    return(
        <Link href="" onClick={borrarproducto}>borrar</Link>
    )
}