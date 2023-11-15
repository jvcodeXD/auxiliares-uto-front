import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { AuthContext } from '../auth'

export const PrivateRoute = ({ children, rol }) => {

    const { logged, user } = useContext(AuthContext)
    const { pathname, search } = useLocation()

    const lastPath = pathname + search
    const isRol = false || rol === user?.rol
    localStorage.setItem('lastPath', lastPath)

    return (!logged ? <Navigate to={`/login`} /> : isRol ? children : <Navigate to={`/${user.rol}`} />
    )
}
