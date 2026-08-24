import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import About from "./components/about/About"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import Github from "./components/github/Github"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
