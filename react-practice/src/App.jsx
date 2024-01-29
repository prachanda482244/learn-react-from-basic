import { useState } from 'react'
import DemoComponents from './components/DemoComponents'
import Home from './pages/Home'
import Task from './components/Task'
import Button from './components/Button'

const App = () => {
  // const [count, setCount] = useState(0)

  // const handleIncrement = () => {
  //   setCount(count + 1)

  // }

  // const handleDecrement = () => {
  //   setCount(count - 1)
  // }
  // const handleReset = () => {
  //   setCount(0)
  // }
  return (
    <div className="text-xl">
      {/* <div className='text-9xl'>{count}</div>

      <div className='flex items-center gap-3'>
        <Button name='Increment' onClick={handleIncrement} />
        <Button name='Reset' onClick={handleReset} />
        <Button name='Decrement' onClick={handleDecrement} />
      </div> */}

      <Task />

    </div>
  )
}

export default App
