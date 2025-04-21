import Nav from './components/Nav.jsx';
import Intro from './components/Intro.jsx';
import Post from './components/Post.jsx';
import Footer from './components/Footer.jsx';
import './index.css'
function App() {
  return (
    <div>
      <Nav content="Nav Bar" />
      <Intro content="Introdução" />
      <Post /> 
      <Footer content="Direitos reservados de pietro D'avila &copy;"/> 
    </div>
  )
}

export default App
