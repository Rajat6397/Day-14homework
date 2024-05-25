
import './App.css'

function App() {
 

  return (
    <>
      <h1>My Budget Planner</h1>
      <div className="second">
      <button>Budget:Rs.2000</button>
      <button>Remaining:Rs.2000</button>
      <button>Spant so far:0</button>
      </div>
      <h1>Expenses</h1>
      <h2>Add Data to List....</h2>
      <h2>Add Expenses</h2>
      <div className="entry">
      <div className="given">
      <h4>Name</h4>
      <input type="text"/>
      </div>
      <div className="output">
        <h4>Cost</h4>
      <input type="text"/>
      </div>
      </div>
      <button id="but">Save</button>
    </>
  )
}

export default App
