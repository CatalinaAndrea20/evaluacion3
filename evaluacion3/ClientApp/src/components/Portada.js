//Importar React
import React, { useEffect, useState } from 'react'

const Portada = () => {
    return (
        <>
            <div className="card mb-3 text-white bg-info">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://scontent.fanf1-1.fna.fbcdn.net/v/t39.30808-6/286992043_3204490733121119_1726754837735019077_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6gn6Yi72Y5sAX8BaeLM&tn=_DDo-ROg6cGjzqJc&_nc_ht=scontent.fanf1-1.fna&oh=00_AT_kZ1vhK0mGzmKPacLO1KNC6uHgiZRUMFRoloY4ipTq7A&oe=62D9CA11" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Catalina Andrea Chavez Palma</h1>
                            <h5 className="card-text">Soy estudiante de la carrera de Analista Programador en la Universidad Tecnologica de Chile estoy cursando mi utlimo semestre de la carrera. Soy una persona que le gusta aprender mucho sobre la tecnologia, es por esto que elegi esta carrera para ejercerla por el resto de mi vida, esta etapa universitaria me ha ensaño muchas cosas, con respecto a la personas, ha enriquecido mi conocimiento y aprendizaje</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h4> Habilidades </h4>
            <div className="col-md-6 mt-3">
                <ul className="list-group list-group-numbered mt-6">
                    <li className="list-group-item list-group-item-info">Trabajo en equipo</li>
                    <li className="list-group-item list-group-item-info">Adaptabilidad</li>
                    <li className="list-group-item list-group-item-info">Resolución de problemas</li>
                    <li className="list-group-item list-group-item-info">Trabajo bajo presión</li>
                    <li className="list-group-item list-group-item-info">Comunicación</li>
                </ul>
            </div>
        </>
    )
}

export default Portada