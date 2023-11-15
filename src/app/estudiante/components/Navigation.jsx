import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
    Container,
    Nav,
    Navbar,
    Button,
    Form,
    NavDropdown
} from 'react-bootstrap'
import { BiSolidUser } from 'react-icons/bi'

import { AuthContext } from '../../../auth'

export const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    const onLogout = () => {
        logout()
        navigate('/login', {
            replace: true
        })
    }

    return (
        <>
            <Navbar
                expand='lg'
                bg='dark'
                data-bs-theme='dark'
                className='bg-body-tertiary'
            >
                <Container fluid>
                    <Link
                        to='/estudiante'
                        className={`navbar-brand`}
                    >
                        <img
                            alt=""
                            src="/LOGO_UTO.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Auxiliares UTO
                    </Link>
                    <Navbar.Toggle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        <Nav
                            className='me-auto my-2 my-lg-0'
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to='./postular'
                            >
                                Postular
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                to='./resultados'
                            >
                                Resultados
                            </NavLink>
                        </Nav>
                        <NavDropdown
                            title={<span style={{ color: 'white' }}><BiSolidUser /> {`${user.name}`}</span>}
                        >
                            <NavDropdown.Item
                                onClick={onLogout}
                            >
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <Navbar.Collapse className='justify-content-end'>
                            <Navbar.Text className='nav-item nav-link text-primary d-flex'>
                                {user?.name}
                            </Navbar.Text>
                            <Button
                                className='nav-item'
                                variant='outline-success'
                                onClick={onLogout}
                            >
                                Logout
                            </Button>
                        </Navbar.Collapse> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            {/* <Navbar
                expand='lg'
                bg='dark'
                data-bs-theme='dark'
                className='bg-body-tertiary'
            >
                <Container fluid>
                    <Navbar.Brand>Home</Navbar.Brand>
                    <Navbar.Toogle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        <Link
                            className='navbar-brand'
                            to='/estudiante/'
                        >
                            Home
                        </Link>

                        <div className='navbar-collapse'>
                            <div className='navbar-nav'>

                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to='./postular'
                                >
                                    Postular
                                </NavLink>

                                <NavLink
                                    className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                                    to='./resultados'
                                >
                                    Resultados
                                </NavLink>
                            </div>
                        </div>

                        <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                            <ul className='navbar-nav ml-auto'>
                                <span className='nav-item nav-link text-primary'>
                                    {user?.name}
                                </span>
                                <button
                                    className='nav-item nav-link btn '
                                    onClick={onLogout}
                                >
                                    Logout
                                </button>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>

            </Navbar> */}
        </>
    )
}