import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Modal
} from 'react-bootstrap'

import { Materias } from './Materias'
import { BoletasDisponibles } from './BoletasDisponibles'
import { postularMateria } from '../../helpers'
import { useForm } from '../../../../hooks'

const Confirmation = ({ materia }) => {

    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(!show)
    }

    const postular = () => {
        setShow(!show)
        postularMateria(materia)
    }

    return (
        <>
            <Button variant='primary' onClick={handleClose}>
                Postular
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Postulacion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Esta seguro que desea postular a la materia de {materia}?</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant='primary' onClick={postular}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export const Postulacion = () => {

    const { materiaSelected, onInputChange } = useForm({
        materiaSelected: ''
    })

    return (
        <Container>
            <Row>
                <Col lg='11' className='d-flex justify-content-around p-2'>
                    <p className='fs-2'>Materias Disponibles</p>
                    <BoletasDisponibles />
                </Col>
            </Row>
            <Row className='d-flex justify-content-between'>
                <Col lg='7' className='align-self-center'>
                    <Container>
                        <Materias {...{ onInputChange }} />
                        <Confirmation materia={materiaSelected} />
                    </Container >
                </Col>
                <Col lg='5' className='p-2 justify-content-end'>
                    Materias Seleccionadas
                </Col>
            </Row>
        </Container>
    )
}
