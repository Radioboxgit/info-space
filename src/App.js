import './App.css';
import { Routes, Route} from 'react-router-dom';
import Flights from './pages/Flights.js'
import Home from './pages/Home.js'
import PageNotFound from './pages/PageNotFound.js'
import Layout from './pages/Layout.js'
import About from './pages/About.js'
import Details from './pages/Details'


function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}> {/*default layout*/}
        <Route index element={<Home />} /> {/*index route*/}
        <Route path="/home" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={< Details/>} /> 
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound/>} />
      </Route>
    </Routes>
    </>  
  );
}

export default App;
