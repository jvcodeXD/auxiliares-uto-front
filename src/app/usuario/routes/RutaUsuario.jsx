import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Home, Lista } from '../pages'
import { Navbar } from '../components'

export const RutaUsuario = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/lista' element={<Lista />} />
                    <Route path='*' element={<Navigate to={`/user`} />} />
                </Routes>
            </div>
        </>
    )
}
