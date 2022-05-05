import Counter from "./Counter"
import { useSelector } from "react-redux"
function App() {
  const count = useSelector((state) => state.counter.count)

  return (
    <div className='App'>
      <h2 style={{ textAlign: "center" }}>Redux make it easy</h2>
      <h3>TOTAL VOTES: {count}</h3>
      <Counter name='Antony' />

      <Counter name='Gabgy' />
    </div>
  )
}
export default App
