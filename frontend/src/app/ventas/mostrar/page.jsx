import ModificarVenta from "@/modificarVen";
import axios from "axios";
import Link from "next/link";
async function getVentas(){
    const url="http://localhost:3000/ventas";
    const venta = await axios.get(url);
    //console.log(universidades.data);
    return venta.data;
}
export default async function Venta(){
    const ventas = await getVentas();
    return(
        <>
            <h1>Ventas</h1>
            <table className="table">
                <thead>
                        <tr>
                        <th>Id</th>
                        <th>Cliente</th>
                        <th>Producto</th>
                        <th>Fecha y hora</th>
                        <th>Cantidad</th>
                        <th>Estado</th>
                        <th>Editar/Borrar</th>
                        </tr>
                </thead>
                <tbody>
                        {
                            ventas.map((venta,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{venta.id_cliente}</td>
                                    <td>{venta.id_producto}</td>
                                    <td>{venta.fechayhora}</td>
                                    <td>{venta.cantidad}</td>
                                    <td>{venta.estado}</td>
                                    <td>
                                        <Link href={`/ventas/mostrar/modificar/${encodeURIComponent(JSON.stringify({ id: venta.id, id_cliente: venta.id_cliente, id_producto: venta.id_producto, cantidad: venta.cantidad , fechayhora: venta.fechayhora , estado: venta.estado}))}`}>Modificar/</Link>
                                        <ModificarVenta id={venta.id}/>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}