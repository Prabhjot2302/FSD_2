import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Navigation from "./components/Navigation"
import "./App.css"

const Home = lazy(() => import("./components/Home"))
const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-box">
          <h1 className="page-heading">Optimize frontend performance using lazy loading</h1>
        </div>
        <div className="app-box">
          <Navigation />
        </div>
        <div className="app-box">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
