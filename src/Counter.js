import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./redux/ducks/counter"

const Counter = ({ name }) => {
  const myname = useSelector((state) => state.counter.name)

  const [votes, setVotes] = React.useState(0)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
    setVotes(votes + 1)
  }

  const handleDecrement = () => {
    dispatch(decrement())
    setVotes(votes - 1)
  }

  return (
    <div style={{ backgroundColor: "grey" }}>
      <h2>{myname}</h2>
      <p>
        counter for: {name} number of votes: {votes}
      </p>
      <div
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button style={{ padding: "10px" }} onClick={handleIncrement}>
          increment
        </button>
        <button style={{ padding: "10px" }} onClick={handleDecrement}>
          decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
