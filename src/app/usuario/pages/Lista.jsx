import React from 'react'
import { auxiliares } from '../data'

const Item = ({ index, nombre, sigla, materia, paralelo, celular }) => {

    return (
        <tr>
            <td>{index}</td>
            <td>{nombre}</td>
            <td>{sigla}</td>
            <td>{materia}</td>
            <td>{paralelo}</td>
            <td>{celular}</td>
        </tr>
    )
}

export const Lista = () => {
    return (
        <div className='container'>
            <table className="table table-striped">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre Completo</th>
                        <th scope="col">Sigla</th>
                        <th scope="col">Materia</th>
                        <th scope="col">Paralelo</th>
                        <th scope="col">Celular</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        auxiliares.map((auxiliar, index) => (
                            <Item
                                key={auxiliar.id}
                                index={index}
                                {...auxiliar}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
