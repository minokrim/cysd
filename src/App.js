import './App.css';
import Body from './home/home';
import Aboutus from './aboutus/aboutus';
import Whatwedo from './whatwedo/whatwedo';
import Contact from './contact/contact';
import Getinvolved from './getinvolved/getinvolved';
import {Routes,HashRouter, Route} from 'react-router-dom'
import ScrollToTop from './components/scrolltotop';
import ContentContext from './context/contentContext';
function App() {
  return (
    <div className="App">
          <HashRouter>
            <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/whatwedo" element={<Whatwedo/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/getinvolved" element={<Getinvolved/>}/>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
