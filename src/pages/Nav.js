import {Link} from 'react-router-dom';
export default function Nav(){

  return(
      <>
          <ul>
            <li><Link to ='/'>홈으로</Link></li>
            <li><Link to ='/p1/h'>Page1</Link></li>
            <li><Link to ='/p2'>Page2</Link></li>
          </ul>
      </>
  );
}