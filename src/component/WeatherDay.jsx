import w from '../json/weather.json';
import '../styles/Weather.css';
import { useNavigate} from "react-router-dom";

export default function WeatherDay (props) {

//앞에서 랜더링 하는 props인 d를 받아와서 day로 설정
const day = props.d;

//weather.json파일의 날씨 정보들을 import해와서 weatheritem이라고 함.
const weatheritem = w.response.body.items.item[0];

//items를 배열로 만듦.
const items = [];

//keys를 만들어서 원하는 값들을 설정. props가 넘어오면 자동으로 생긴다.
const keys = [`rnSt${day}Am`, `rnSt${day}Pm`, `wf${day}Am`, `wf${day}Pm`, ]

//오브젝트 순회 => 공부 필요
//k : 키
//items배열에 weatheritem[k]를 추가 해줌.
for (let k of keys){
  items.push(weatheritem[k]);
  console.log(items[0]);
}

//홈 버튼 온클릭 설정
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

  return(
  <>
    <div className='dayu2'>
      <ul className='dayul'>
        <li><span className='sp1'>{day}일 후 오전 강수량</span><span className='sp2'>{items[0]}%</span></li>
        <li><span className='sp1'>{day}일 후 오후 강수량</span><span className='sp2'>{items[1]}%</span></li>
        <li><span className='sp1'>{day}일 후 오전 날씨예보</span><span className='sp2'>{items[2]}</span></li>
        <li><span className='sp1'>{day}일 후 오후 날씨예보</span> <span className='sp2'>{items[3]}</span></li>
      </ul> 
      </div>
    <div className='home'>
        <button onClick = {() => handleClick('홈버튼')}> 홈으로 </button>
    </div>
  </>
)

}