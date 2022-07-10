import { createUseStyles } from "react-jss"
import Swiper from "./components/Swiper"
import Sidebar from "./components/sidebar"

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '12%',
        position: 'fixed',
        width: '100vw',
        height: '100vh'
    }
}))

const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Sidebar />
        </div>
    )
}

export default App
