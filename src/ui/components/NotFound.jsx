import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

export const NotFound = () => {

    const navigate = useNavigate()

    const lastPath = () => {
        navigate(-1)
    }


    navigate

    return (
        <>
            <div>NotFound</div>
            <Button
                variant='primary'
                onClick={lastPath}
            >
                Regresar
            </Button>
        </>
    )
}
