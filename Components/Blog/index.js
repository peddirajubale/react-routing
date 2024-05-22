import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Home'
import Header from '../Header';
import About from '../About';
import Contact from '../Contact';
import NotFound from '../NotFound';

function Blog() {
  return (
   <Router>
  <Header/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route element={<NotFound/>} />
    </Routes>
   </Router>
  );
}

export default Blog;
