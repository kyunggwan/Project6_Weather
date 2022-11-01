import { useLocation } from "react-router-dom";
import qs from 'query-string';

export default function Page(){

  //loc는 문자열
  let loc = useLocation().search;
  console.log(loc);

  //문자열 정보들이 object로 되는듯
  const q = qs.parse(loc);
  console.log(q);

//parse가 이 두줄을 다 해줌.
// let loc2 = loc.replace('?', '').split('&');
// loc2 = loc.localeCompare((m) => m.split('=')[1])

  return(
      <>
          <h1>Page2</h1>
          {/* <h2>{q.item + '(' + q.item2 + ')'}</h2> */}
          { Object.keys(q).length === 0 ?
           <h2>전달자료 없음</h2> : <h2>{q.item} ({q.item2})</h2>}
      </>
  );
}