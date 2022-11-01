import './App.css';
import {Route, Routes} from 'react-router-dom';
import WeatherHome from './component/WeatherHome';
import WeatherMain from './component/WeatherMain';
import WeatherMain2 from './component/WeatherMain2';

function App() {
  return (
      <>
       <Routes>
          <Route path = '/' element={<WeatherHome />} />
          <Route path = '/a1/:item' element={<WeatherMain />} />
          <Route path = '/a2/:item' element={<WeatherMain2 />} />
        </Routes>     
      </>
  );
}

export default App;
