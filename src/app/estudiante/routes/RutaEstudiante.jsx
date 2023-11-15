import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Estudiante, Postulacion, Resultados } from '../pages'
import { Navigation } from '../components'

export const RutaEstudiante = () => {
    return (
        <>
            <Navigation />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Estudiante />} />
                    <Route path='/postular' element={<Postulacion />} />
                    <Route path='/resultados' element={<Resultados />} />
                    <Route path='*' element={<Navigate to={`/estudiante/`} />} />
                </Routes>
            </div>
        </>
    )
}
