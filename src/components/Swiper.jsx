import { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import { useSprings, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const pages = [
    'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
]

const useStyles = createUseStyles(theme => ({
    wrapper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },

    page: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        touchAction: 'none',

        '& div': {
            touchAction: 'none',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            width: '100%',
            height: '100%',
            boxShadow: '0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)',
        }
    }
}))

const Swiper = () => {
    const classes = useStyles()

    const index = useRef(0)
    const width = window.innerWidth

    const [props, api] = useSprings(pages.length, i => ({
        x: i * width,
        scale: 1,
        display: 'block',
    }))

    const clamp = (num, lower, upper) => {
        if (num <= upper && num >= lower)
            return num

        return num < lower ? lower : upper
    }

    const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
        if (active && Math.abs(mx) > width / 2) {
            index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
            cancel()
        }

        api.start(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
            const x = (i - index.current) * width + (active ? mx : 0)
            const scale = active ? 1 - Math.abs(mx) / width / 2 : 1
            return { x, scale, display: 'block' }
        })
    })

    return (
        <div className={classes.wrapper}>
            {props.map(({ x, display, scale }, i) => (
                <animated.div className={classes.page} {...bind()} key={i} style={{ display, x }}>
                    <animated.div style={{ scale, backgroundImage: `url(${pages[i]})` }} />
                </animated.div>
            ))}
        </div>
    )
}

export default Swiper