import React, { useState } from 'react'
import { IoTicketOutline } from 'react-icons/io5'

import {
    OverlayTrigger,
    Button,
    Tooltip
} from 'react-bootstrap'

export const BoletasDisponibles = () => {

    const [boletas, setBoletas] = useState(3)

    return (
        <OverlayTrigger
            overlay={<Tooltip id='tooltip-disabled'>Boletas Disponibles</Tooltip>}
        >
            <span className='d-inline-block'>
                <Button
                    disabled
                    variant='btn btn-outline-primary'
                >
                    {boletas} <IoTicketOutline />
                </Button>
            </span>
        </OverlayTrigger>
    )
}
