import './App.css';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <>
    <Header />

    {/* 디즈니 대표 섹션 */}
    <Section  
        title="디즈니 플러스" 
        logo="logo-dp.png"
        bg="bg-dp.jpg"
        id="title"

      />

    {/* 디즈니 */}
    <Section
        title="디즈니" 
        logo="logo-d.png"
        bg="bg-d.jpg"
        id="디즈니"
     />
    {/* 마블 */}
    <Section
        title="마블"
        logo="logo-m.png"
        bg="bg-m.jpg"
        id="마블"
      />
    {/* 스타워즈 */}
    <Section
        title="스타워즈" 
        logo="logo-s.png"
        bg="bg-s.jpg"
        id="스타워즈"
     />
    {/* 내셔널지오그래피 */}
    <Section
        title="내셔널지오그래피" 
        logo="logo-ng.png"
        bg="bg-ng.jpg"
        id="NGO"
     />
    {/* 20세기 스튜디오 */}
    <Section
        title="20세기 스튜디오" 
        logo="logo-20.png"
        bg="bg-20.jpg"
        id="20C"
     />
    </>
  );
}

export default App;
