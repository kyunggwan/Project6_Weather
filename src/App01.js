import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Nav from './pages/Nav';


function App01() {
  return (
      <>
        <Nav />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/p1/:item' element={<Page1 />} />
          <Route path = '/p2' element={<Page2 />} />
        </Routes>
      </>
  );
}

export default App01;
