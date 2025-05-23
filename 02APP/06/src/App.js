
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// BrowserRouter	HTML5의 History API를 사용해서 페이지 이동을 처리함. 보통 최상위에 <Router>로 감쌈.
// Routes	내부에 여러 개의 Route를 포함하는 컨테이너 역할. React 18 이후에는 Switch 대신 Routes 사용.
// Route	특정 경로(path)에 특정 컴포넌트(element)를 매핑함.
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:name/:age" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
