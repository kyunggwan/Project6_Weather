import { useParams } from "react-router-dom";

export default function Page1(){
const pm = useParams().item;

  return(
      <>
          <h1>Page1</h1>
          {/* <h2>{pm}</h2> */}
          <h2>{pm === 'h'? '전달 함수 없음' : pm}</h2>
      </>
  );
}