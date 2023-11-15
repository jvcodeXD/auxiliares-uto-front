import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AuxiliaresUTO } from './AuxiliaresUTO'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuxiliaresUTO />
        </BrowserRouter>
    </React.StrictMode>,
)
