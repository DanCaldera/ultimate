import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline'>Count: {count}</h1>
        <button className='border-2 border-black p-2 m-2' onClick={() => setCount(count => count + 1)}>
          Increment
        </button>
      </div>
    </>
  )
}

export default App
