import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const LoginPage = () => {

    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const onLogin = () => {

        // const lastPath = localStorage.getItem('lastPath') || '/'
        const lastPath = '/usuario'

        login('Clint Barton', 'usuario')

        navigate(lastPath, {
            replace: true
        })
    }

    const onLoginEstudiante = () => {

        const lastPath = '/estudiante'

        login('Tony Stark', 'estudiante')

        navigate(lastPath, {
            replace: true
        })
    }

    const onLoginDocente = () => {

        const lastPath = '/docente'

        login('Wanda Maximoff', 'docente')

        navigate(lastPath, {
            replace: true
        })
    }

    const onLoginDirector = () => {

        const lastPath = '/director'

        login('Steven Strange', 'director')

        navigate(lastPath, {
            replace: true
        })
    }

    const onLoginComision = () => {

        const lastPath = '/comision'

        login('Scott Lang', 'comision')

        navigate(lastPath, {
            replace: true
        })
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-secondary"
                onClick={onLogin}
            >
                Login Usuario
            </button>
            <button
                className="btn btn-primary"
                onClick={onLoginEstudiante}
            >
                Login Estudiante
            </button>
            <button
                className="btn btn-warning"
                onClick={onLoginDocente}
            >
                Login Docente
            </button>
            <button
                className="btn btn-success"
                onClick={onLoginDirector}
            >
                Login Director
            </button>
            <button
                className="btn btn-info"
                onClick={onLoginComision}
            >
                Login Comision
            </button>
        </div>
    )
}
