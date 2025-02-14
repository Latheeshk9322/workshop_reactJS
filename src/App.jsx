

import './App.css'
import Welcome from './components/Welcome'
import New from './components/New'
import Counter from './components/Counter'

function App() {
  const name="Latheesh k"
  const a=[1,2,3,4]
  console.log(a)
  const guest="Latheesh"
  const usn="4vp23mc016"
  const obj={
    name: name,
    usn: usn
  }
  return (
    <>
      
      <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="public/vcet.png"
        alt="VCET Logo"
        style={{ width: "40px", height: "auto", marginRight: "10px" }}
      />
      <h2>Vivekananda College of Engineering & Technology
Nehru Nagar, Puttur-574203</h2>
    </div>
      
    <div>
        {/* <Welcome obj={obj}/> */}
        <New/>
        {/* <Counter/> */}
      </div>
    </>
  )
}

export default App

{/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}