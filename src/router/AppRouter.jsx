import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoginPage } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { NotFound, Home } from '../ui'

import {
    RutaUsuario,
    RutaEstudiante,
    RutaDocente,
    RutaDirector,
    RutaComision
} from '../app'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='login/*' element={
                    <PublicRoute>
                        <Routes>
                            <Route path='/*' element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                } />
                <Route path='/usuario/*' element={
                    <PrivateRoute rol={'usuario'}>
                        <RutaUsuario />
                    </PrivateRoute>
                } />
                <Route path='/estudiante/*' element={
                    <PrivateRoute rol={'estudiante'}>
                        <RutaEstudiante />
                    </PrivateRoute>
                } />
                <Route path='/docente/*' element={
                    <PrivateRoute rol={'docente'}>
                        <RutaDocente />
                    </PrivateRoute>
                } />
                <Route path='/director/*' element={
                    <PrivateRoute rol={'director'}>
                        <RutaDirector />
                    </PrivateRoute>
                } />
                <Route path='/comision/*' element={
                    <PrivateRoute rol={'comision'}>
                        <RutaComision />
                    </PrivateRoute>
                } />
                <Route path='/*' element={
                    <PrivateRoute>
                        <Routes>
                            <Route path='/*' element={<NotFound />} />
                        </Routes>
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
