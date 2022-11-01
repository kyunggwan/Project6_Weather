import w from '../db/weather2.json';
import item from '../db/item.json';
import '../styles/Weather.css';
import {useNavigate} from "react-router-dom";

export default function WeatherMain2 () {

//weather2.json파일의 날씨 정보들을 import해와서 w2이라고 함.
const w2 = w.response.body.items.item;
const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };

//PTY는 비가 올때 강수량
//SKY는 하늘 상태
let lis = w2.map((m) => 
  (m.category === 'PTY') 
    ? <li key = {m.category}> <span className='spp1'>{item[m.category][0]}</span><span className='spp2'>{pty[m.obsrValue]}</span></li>
  :(m.category === 'SKY')
    ?<li key = {m.category}> <span className='spp1'>{item[m.category][0]}</span> <span className='spp2'>{sky[m.obsrValue]}</span> </li>
    :<li key = {m.category}> <span className='spp1'>{item[m.category][0]}</span> <span className='spp2'>{m.obsrValue} {item[m.category][1]}</span></li>
);

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
    <h1 className='w2'>날씨 예보 - 단기 정보</h1>
    <ul className='lisul'>    
          {lis}
    </ul>
    <div className='home'>
      <button onClick = {() => handleClick('홈버튼')}> 홈으로  </button>
    </div>
  </>
  )
}