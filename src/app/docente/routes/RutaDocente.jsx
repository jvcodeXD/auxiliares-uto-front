import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Docente, Postulantes, Materias } from '../pages'
import { Navbar } from '../components'

export const RutaDocente = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Docente />} />
                    <Route path='/postulantes' element={<Postulantes />} />
                    <Route path='/materias' element={<Materias />} />
                    <Route path='*' element={<Navigate to={`/docente/`} />} />
                </Routes>
            </div>
        </>
    )
}
