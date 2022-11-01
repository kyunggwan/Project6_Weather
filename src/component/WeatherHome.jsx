import { useNavigate } from "react-router-dom";
import '../styles/Weather.css';

export default function WeatherHome ()  {
 const navigate = useNavigate();
 
  const handleClick = (t) => {
    const url = {
        '중기예보' : '/a1/:item',
        '단기예보' : '/a2/:item',
        '홈버튼' : '/',
    }
    
    console.log(url[t])
    navigate(url[t]);     
  }

  return (
      <>
        <h1>일기 예보</h1>
        <ul className="main">
            <button onClick={() => handleClick('중기예보')}>중기예보</button>
            <button onClick={() => handleClick('단기예보')}>단기예보</button>
        </ul>
      </>
  );
}