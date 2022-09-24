import './App.css';
import Sketch from 'react-p5'

function App() {

  let gotPressed = false

  const mousePressed = (p5) =>{
    gotPressed = !gotPressed
  }

  const setup = (p5, parentRef) => {
    // Select the App container which takes the whole screen
    const appRef = document.getElementsByClassName('App')[0]
    // Create a canvas with the width and height of the App container
    p5.createCanvas(appRef.clientWidth, appRef.clientHeight).parent(parentRef)
  }
  
  const draw = (p5) => {
    p5.noCursor()
    p5.background(75)
    p5.strokeWeight(5)
    p5.fill(255,50,50)
    if(gotPressed) p5.ellipse(p5.mouseX, p5.mouseY, 50)
    else p5.rect(p5.mouseX,p5.mouseY,50,50)
  }

  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} mousePressed={mousePressed}/>
    </div>
  );
}

export default App;
