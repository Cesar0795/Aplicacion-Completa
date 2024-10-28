"use client";

export default function Modificar({ params }) {
    // esto permite convertit lo que llega en la url para poderlo manejar en formato json
    const producto = JSON.parse(decodeURIComponent(params.id));

    const modificarProducto = async (e) => {
        e.preventDefault();

        const data = {
            id: producto.id,
            nombre: document.getElementById("nombre").value,
            precio: document.getElementById("precio").value,
            cantidad: document.getElementById("cantidad").value,
        };

        const url = `http://localhost:3000/modificarProducto/${producto.id}`;

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/productos/mostrar");
    };

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={modificarProducto}>
                <div className="card">
                    <div className="card-header">
                        <h1>Modificar Producto</h1>
                    </div>
                    <div className="card-body">
                        <input id="id" defaultValue={producto.id} type="text" className="form-control mb-3 d-none" />
                        <input id="nombre" defaultValue={producto.nombre} type="text" className="form-control mb-3" />
                        <input id="precio" defaultValue={producto.precio} type="text" className="form-control mb-3" />
                        <input id="cantidad" defaultValue={producto.cantidad} type="text" className="form-control mb-3" />
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-secondary col-12 mt-3 mb-3">Guardar producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}