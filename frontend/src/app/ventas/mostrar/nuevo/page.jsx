"use client";
import axios from "axios";
async function nuevaVenta(e){
    e.preventDefault();
    //console.log("Estas en nuevoUsuario");
    const url="http://localhost:3000/nuevaVenta";
    const datos={
        id_cliente: document.getElementById("id_cliente").value,
        id_producto: document.getElementById("id_producto").value,
        cantidad: document.getElementById("cantidad").value
    }
    //console.log(datos);
    const respuesta=await axios.post(url,datos);
    location.replace("http://localhost:3001/ventas/mostrar");

}

export default function Nuevo() {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5 " onSubmit={nuevaVenta} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nueva venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="id_cliente" placeholder="Id Cliente" autoFocus className="form-control mb-3" type="text"/>
                        <input id="id_producto" placeholder="Id Producto" className="form-control mb-3" type="text"/>
                        <input id="cantidad" placeholder="Cantidad" className="form-control mb-3" type="text"/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary col-12 mt-3 mb-3" type="submit">Guardar venta</button>
                    </div>
                </div>
            </form>
        </div>
    )
}