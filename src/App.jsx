import { useState } from 'react'

import Dashboard from './components/Dashboard'
import SearchWeather from './components/SearchWeather'
import AboutSection from './components/AboutSection'
import './App.css'

function App() {

    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(0)

    return (
        <>

            <div className="app">
                <header>

                </header>
                <main>
                        
                    <Dashboard />
                    <SearchWeather />
                    <AboutSection />

                </main>

                <footer>
                    
                </footer>

            </div>
        </>
    )
}

export default App