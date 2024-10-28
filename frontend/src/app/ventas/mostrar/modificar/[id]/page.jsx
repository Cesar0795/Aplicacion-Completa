"use client";

export default function Modificar({ params }) {
    // esto permite convertit lo que llega en la url para poderlo manejar en formato json
    const venta = JSON.parse(decodeURIComponent(params.id));

    const modificarVenta = async (e) => {
        e.preventDefault();

        const data = {
            id: venta.id,
            id_cliente: document.getElementById("id_cliente").value,
            id_producto: document.getElementById("id_producto").value,
            cantidad: document.getElementById("cantidad").value,
        };

        const url = `http://localhost:3000/modificarVenta/${venta.id}`;

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/ventas/mostrar");
    };

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={modificarVenta}>
                <div className="card">
                    <div className="card-header">
                        <h1>Modificar Venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="id" defaultValue={venta.id} type="text" className="form-control mb-3 d-none" />
                        <input id="id_cliente" defaultValue={venta.id_cliente} type="text" className="form-control mb-3" />
                        <input id="id_producto" defaultValue={venta.id_producto} type="text" className="form-control mb-3" />
                        <input id="cantidad" defaultValue={venta.cantidad} type="text" className="form-control mb-3" />
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-secondary col-12 mt-3 mb-3">Guardar venta</button>
                    </div>
                </div>
            </form>
        </div>
    );
}