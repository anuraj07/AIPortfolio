import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
// import { Skills } from './components/Skills'
// import { Awards } from './components/Awards'
import { Contact } from './components/Contact'
import { ThemeToggle } from './components/ThemeToggle'
import { Services } from './components/Services'
import Lenis from 'lenis'

function App() {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="container">
            <ThemeToggle />
            <Hero />
            <Services />
            <Projects />
            <Experience />
            <Education />
            {/* <Skills /> */}
            {/* <Awards /> */}
            <Contact />
        </div>
    )
}

export default App
