import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Director, Reportes } from '../pages'
import { Navbar } from '../components'

export const RutaDirector = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Director />} />
                    <Route path='/reportes' element={<Reportes />} />
                    <Route path='*' element={<Navigate to={`/director/`} />} />
                </Routes>
            </div>
        </>
    )
}
