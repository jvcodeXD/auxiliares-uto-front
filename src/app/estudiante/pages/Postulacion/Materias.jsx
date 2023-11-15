import React from 'react'
import { Form } from 'react-bootstrap'

import { materias } from '../../data'

export const Materias = ({ onInputChange }) => {

    return (
        <Form.Select
            className='form-select'
            aria-label='Default select example'
            defaultValue={'default'}
            name='materiaSelected'
            onChange={onInputChange}
        >
            <option disabled value={'default'}>Seleccionar materias a postular</option>
            {materias.map(({ id, materia, sigla, estado }) => (
                <option key={id} value={materia}>{sigla} {materia}</option>
            ))}
        </Form.Select>
    )
}
