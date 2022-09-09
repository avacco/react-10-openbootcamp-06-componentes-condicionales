import TasklistComponent from './components/container/tasklist';
import './App.css';
import OptionalRender from './components/pure/optionalRender';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/*<TasklistComponent/> */}
        <OptionalRender></OptionalRender>
      </header>

    </div>
  );
}

export default App;
