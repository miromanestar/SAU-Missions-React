import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import App from './App'
import 'normalize.css'
import './index.css'

const theme = {

}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Router>
    </React.StrictMode>
)
