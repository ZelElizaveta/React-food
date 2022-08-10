import React from "react";
import { BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";
import { ContextProvider } from '../context/context';
import Recipe from "./pages/Recipe";
import Filter from "./pages/Filter";



function App() {
  return (
    <>
      <Router>
        <Header/>
          <ContextProvider>
            <main className="container content">
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Chinese" element={<About/>}/>
                <Route path="/Mexican" element={<Contact/>}/>
                <Route path="/recipe/:id" element={<Recipe/>}/>
                <Route path="/:value" element={<Filter/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
           </main>
          </ContextProvider>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
