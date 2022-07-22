//Importar React
import React, { useEffect, useState } from 'react'

const usuariosPorDefecto = [
    { nombre: "Pepe Lota", mensaje: "Todo bien", like: true, saludo: false },
    { nombre: "Tulio Triviño", mensaje: "Aquí les envío un saludo", like: false, saludo: false }
]


const Mensaje = () => {
    const [usuarios, setUsuarios] = useState(usuariosPorDefecto)
    const [nombre, setNombre] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [like, setLike] = useState(false)
    const [saludo, setSaludo] = useState(false)

    const handleNombre = (evento) => {
        setNombre(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!like)
    }

    const handleSaludo = (evento) => {
        setSaludo(!saludo)
    }

    const handleEnvio = (evento) => {
        const nuevoUsuario = {
            nombre: nombre,
            mensaje: mensaje,
            like: like,
            saludo: saludo
        }
        let copiaUsuarios = [...usuarios]
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }

    useEffect(() => {
        let copiaUsuarios = [...usuarios]
        const nuevoUsuario = {
            nombre: "Patana Triviño",
            mensaje: "Olis",
            like: true,
            saludo: true
        }
        copiaUsuarios.push(nuevoUsuario)
        setUsuarios(copiaUsuarios)
    }, [])

    return (
        <>
            <h1>Enviar Mensaje</h1>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        className="form-control"
                        type="text"
                        value={nombre}
                        onChange={handleNombre}
                        name="nombre"
                        id="nombre"
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-6">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        className="form-control"
                        type="text"
                        value={mensaje}
                        onChange={handleMensaje}
                        name="mensaje"
                        id="mensaje"
                        rows="3"
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={like}
                            onChange={handleLike}
                            name="like"
                            id="like"
                        />
                        <label className="form-check-label" htmlFor="like">
                            Dar Like 👍
                        </label>
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={saludo}
                            onChange={handleSaludo}
                            name="saludo"
                            id="saludo"
                        />
                        <label className="form-check-label" htmlFor="saludo">
                            Enviar Saludo 👋
                        </label>
                    </div>
                </div>
            </div>

            <div className="row mt-1">
                <div className="col-12 justify-content-start mt-3">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleEnvio}
                    >Enviar</button>
                </div>
            </div>
            <hr />
            <h3>Mensajes Recibidos</h3>
            <table className="table table-info table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Reacciones</th>
                        <th scope="col">Mensajes</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => {
                        return (
                            <tr>
                                <td>{usuario.nombre}</td>
                                <td>
                                    {usuario.like && "👍"}
                                    {usuario.saludo && "👋"}
                                    {!usuario.like && !usuario.saludo && "<Ninguno>"}
                                </td>
                                <td>{usuario.mensaje}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>

    )
}

export default Mensaje