import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <>
    <button onClick={onClick}>
      {text}
    </button>
  </>
)

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad // total de clics
  const average = total ? (good - bad) / total : 0 // promedio de clics
  const positive = total ? (good / total) * 100 : 0 // porcentaje de clics positivos
  // renderizado condicinal
  // Si el total es cero, se muestra un mensaje
  return (total === 0 ? <p>No feedback given</p>
    :
    <>
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <StatisticLine text='All' value={total} />
      <StatisticLine text='Average' value={average} />
      <StatisticLine text='Positive' value={positive + ' %'} />
    </>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  // Devuelve un array con dos elementos:
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='Good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button onClick={() => setBad(bad + 1)} text='Bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App