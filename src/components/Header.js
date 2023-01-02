import myStyle from './Header.module.css';
/* 그냥 css 파일이면 클래스이름붙혀서 원래 html,css 처럼 사용하면됨 */
/* module.css 는 전용css 파일이라 가져와서 변수로 선언하고 그 안에 내용을 객체처럼 불러서사용하면됨 밑에적용예시 */
/* 안에 내용작성할때도 전부다 변수처럼적용되는거라 - 못쓰고 캐멀방식textRed 이런식으로 이름지어줘야함 */

export default function Header() {
  return (
    
    <header>
        <h1 className={myStyle.textPrimary}>디즈니 홈페이지</h1>
        <nav>
            <a href='#title'>타이틀</a>
            <a href='#디즈니'>디즈니</a>
            <a href='#마블'>마블</a>
            <a href='#스타워즈'>스타워즈</a>
            <a href='#NGO'>내셔널지오그래피</a>
            <a href='#20C'>20세기 스튜디오</a>
        </nav>
    </header>
  )
}
