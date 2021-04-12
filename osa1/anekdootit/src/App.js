import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = (props) => {
  const i = props.votes.indexOf(Math.max(...props.votes))
  return (
    <div>
      {props.anecdotes[i]}
      <br></br>
      has {props.votes[i]} votes
    </div> 
  )
}
 
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const points = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(points)
  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const point = [...votes]
    point[selected] += 1
    setVotes(point)
  }
  
  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
        {anecdotes[selected]}
      <br></br>
        has {votes[selected]} votes
      <br></br>
        <Button handleClick={randomAnecdote} text='Random anecdote'/>
        <Button handleClick={handleVote} text='Vote'/>
      <h1>
        Anecdote with most votes
      </h1>
      <Anecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App