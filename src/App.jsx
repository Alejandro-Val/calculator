import { useState } from "react"

function App() {
  const [result, setResult] = useState("")

  const handleClick = (number) => {
    setResult(result.concat(number))
  }

  const handleClear = () => {
    setResult("")
  }

  const handleBackSpace = () => {
    setResult(result.slice(0, -1))
  }

  const handleEqual = () => {
    try{
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    <div className="text-white font-semibold text-lg min-h-screen h-full flex flex-col items-center gap-y-8 justify-center bg-gray-700">
      <h1 className="text-4xl">Calculator with React</h1>
      <div className="bg-green-900 container flex flex-col max-w-sm items-center px-2 py-2 rounded-md gap-y-2">
        <input type="text" readOnly={true} defaultValue={result} className="text-black w-full px-2 py-2 rounded-md cursor-auto outline-none text-right" />
        <div className="w-full flex flex-wrap justify-center gap-y-2">
          <button onClick={handleClear} className="w-1/2 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">Clear</button>
          <button onClick={handleBackSpace} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">C</button>
          <button onClick={() => handleClick("/")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">/</button>
          <button onClick={() => handleClick("7")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">7</button>
          <button onClick={() => handleClick("8")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">8</button>
          <button onClick={() => handleClick("9")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">9</button>
          <button onClick={() => handleClick("*")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">×</button>
          <button onClick={() => handleClick("4")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">4</button>
          <button onClick={() => handleClick("5")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">5</button>
          <button onClick={() => handleClick("6")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">6</button>
          <button onClick={() => handleClick("-")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">-</button>
          <button onClick={() => handleClick("1")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">1</button>
          <button onClick={() => handleClick("2")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">2</button>
          <button onClick={() => handleClick("3")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">3</button>
          <button onClick={() => handleClick("+")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">+</button>
          <button onClick={() => handleClick(".")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">.</button>
          <button onClick={() => handleClick("0")} className="w-1/4 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">0</button>
          <button onClick={handleEqual} className="w-1/2 h-11 transition-all ease-in-out duration-300 rounded-md hover:bg-green-950">=</button>
        </div>
      </div>
    </div>
  )
}

export default App
