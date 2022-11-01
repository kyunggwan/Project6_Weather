import WeatherDay from "./WeatherDay";
import {useState} from 'react';
import '../styles/Weather.css';

function WeatherMain(){

//useState 함수
let [day,setDay] = useState(3);

//클릭했을 때 동작하는 함수. setDay를 바꾸므로 useState의 day값 변동
const handleClick = (d) => {
  setDay(d);
  console.log(d);
}

  return(
      <>
        <h1 className="wtitle">날씨 예보 - 중기 정보</h1>
        <form className="buttons">
          {/*버튼을 누르면 onClick함수 발동.*/}
          {/* preventDefault는 버튼을 누르지만 새로고침 안하게 하는 함수 */}
          <button onClick={(e) => {e.preventDefault() ; handleClick(3)}}>3일 후 날씨</button>
          <button onClick={(e) => {e.preventDefault() ; handleClick(4)}}>4일 후 날씨</button>
          <button onClick={(e) => {e.preventDefault() ; handleClick(5)}}>5일 후 날씨</button>
          <button onClick={(e) => {e.preventDefault() ; handleClick(6)}}>6일 후 날씨</button>
        </form>
        {/*props 설정. {day}에 입력된 값을 d라는 props로 함 */}
        <WeatherDay d={day}/>
      </>
  );
}
export default WeatherMain;