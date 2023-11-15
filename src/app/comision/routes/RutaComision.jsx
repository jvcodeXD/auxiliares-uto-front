import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Comision, Postulantes, Convocatoria, Integrantes, Nominacion } from '../pages'
import { Navbar } from '../components'

export const RutaComision = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Comision />} />
                    <Route path='/postulantes' element={<Postulantes />} />
                    <Route path='/nominacion' element={<Nominacion />} />
                    <Route path='/convocatoria' element={<Convocatoria />} />
                    <Route path='/integrantes' element={<Integrantes />} />
                    <Route path='*' element={<Navigate to={`/comision/`} />} />
                </Routes>
            </div>
        </>
    )
}
