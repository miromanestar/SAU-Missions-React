import React from 'react'
import { createUseStyles } from 'react-jss'

import logo from '../assets/icons/sau-logo.svg'

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-between',
        height: '100vh',
        zIndex: 5
    }
}))

const Sidebar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src={logo} alt="SAU Logo" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar