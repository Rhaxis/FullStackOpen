import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value, ticker}) => (
  <td>
    {text} {value} {ticker}
  </td>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table border-collapse="collapse">
        <tbody>
          <tr>
            <StatisticLine text='Good:'/>
            <StatisticLine value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="Neutral"/>
            <StatisticLine value={props.neutral} /> 
          </tr>
          <tr>
            <StatisticLine text="Bad"/>
            <StatisticLine value={props.bad} /> 
          </tr>
          <tr>
            <StatisticLine text="All"/>
            <StatisticLine value={props.total} /> 
          </tr>
          <tr>
            <StatisticLine text="Average"/>
            <StatisticLine value={Math.round((((-1 * props.bad) + props.good)/props.total) *10)  / 10}/>
          </tr>
          <tr>
            <StatisticLine text="Positive"/>
            <StatisticLine value={Math.round(((props.good*100) / props.total)*10) / 10} ticker='%'/>
          </tr>
        </tbody>
        
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  
  const goodFeedBack = () => {
    setGood(good + 1)
    setTotal(total + 1) 
  } 

  const neutralFeedBack = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  } 

  const badFeedBack = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  } 

  return (
    <div>
      <h1>
        Give feedback
      </h1>

      <Button handleClick={goodFeedBack} text='Good'/>
      <Button handleClick={neutralFeedBack} text='Neutral'/>
      <Button handleClick={badFeedBack} text='Bad'/>

      <h1>
        Statistics
      </h1>
      <Statistics
      total={total}
      good={good}
      neutral={neutral}
      bad={bad}/>
    </div>
  )
}

export default App