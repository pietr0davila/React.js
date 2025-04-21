import Boolean from "./Boolean.jsx";
import UserName from "./UserName.jsx";
import MathComponent from "./MathComponent.jsx";
import CatImage from "./CatImage.jsx";

function App(props) {
  const IMAGE = "src/assets/cat.png"
  const NAME = UserName()
  const BOOLEAN = true
  const STYLES = {
    fontFamily: "Arial",
  }
  return (
    <div className="App" style={ STYLES }>
      { NAME == "pietro" ? <h1>Olá, Eu</h1> : <h1>Olá, { NAME } { props.surname } </h1> }
      <Boolean toBoolean={ !BOOLEAN } />
      <MathComponent
      n1={ 20 }
      n2={ 20 }
      floor={ Math.floor(25.189)}
      ceil={ Math.ceil(59.54)}/>
      <CatImage src={ IMAGE } />
    </div>
  );
  // return <Name firstName={ getUserName() }/>;
};
export default App;
