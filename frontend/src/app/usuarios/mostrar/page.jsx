import BorrarUsuario from "@/components/borrar";
import axios from "axios";
import Link from "next/link";
async function getUsuarios(){
    const url="http://localhost:3000";
    const usuario = await axios.get(url);
    //console.log(universidades.data);
    return usuario.data;
}
export default async function Usuarios(){
    const usuarios= await getUsuarios();
    return(
        <>
            <h1>usuarios</h1>
            <table className="table">
                <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Editar/Borrar</th>
                        </tr>
                </thead>
                <tbody>
                        {
                            usuarios.map((usuario,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.usuario}</td>
                                    <td>
                                        <Link href={`/usuarios/mostrar/modificar/${encodeURIComponent(JSON.stringify({ id: usuario.id, nombre: usuario.nombre, usuario: usuario.usuario }))}`}>Modificar/</Link>
                                        <BorrarUsuario id={usuario.id}/>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}