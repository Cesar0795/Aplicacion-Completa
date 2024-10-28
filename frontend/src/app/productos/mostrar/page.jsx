import BorrarProducto from "@/borrarProd";
import axios from "axios";
import Link from "next/link";
async function getProductos(){
    const url="http://localhost:3000/productos";
    const producto = await axios.get(url);
    //console.log(universidades.data);
    return producto.data;
}
export default async function Producto(){
    const productos= await getProductos();
    return(
        <>
            <h1>Productos</h1>
            <table className="table">
                <thead>
                        <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Editar/Borrar</th>
                        </tr>
                </thead>
                <tbody>
                        {
                            productos.map((producto,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>
                                        <Link href={`/productos/mostrar/modificar/${encodeURIComponent(JSON.stringify({ id: producto.id, nombre: producto.nombre, precio: producto.precio,cantidad:producto.cantidad }))}`}>Modificar/</Link>
                                        <BorrarProducto id={producto.id}/>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}