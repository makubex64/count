import { FC, useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import "./Atom.css"


interface Props {
  title: string;
  initialCount: number;
}

const App: FC<Props> = ({ title = "Vite + React", initialCount = 0 }) => {

  const dolcePro = (): number => Number(window.localStorage.getItem('count') ?? 0);
  const [count, setCount] = useState<number>(initialCount || dolcePro());


  const add = (factor: number = 1): void => {
    setCount(count + factor)

  }

  const reset = (): void => {
    setCount(initialCount)
  }

  useEffect(() => {
    window.localStorage.setItem('count', count.toString());
  }, [count]);


  return (
    <div className='container-fluid  d-flex align-items-center justify-content-center vh-100'>
      <div className="text-center">

        <div className="row   p-1 ">
          <div className="col-4 me-5">
            <a className='' href="https://vitejs.dev" target="_blank">
              <img style={{ height: "170px", width: "170px" }} src={viteLogo} className="logo" alt="Vite logo" />
            </a>
          </div>

          <div className="col-4 ">
            <a className="" href="" target="_blank">
              <div className="atom" >
                <div className="electron"></div>
                <div className="electron-alpha"></div>
                <div className="electron-omega"></div>
              </div>
            </a>
          </div>
        </div>

        <h1 className='text-warning'> {title} </h1>

        <h1 className={`${count > 0 ? "text-info" : count < 0 ? "text-warning" : "text-white"}`}>{count}</h1>

        <div className="text-center ">
          <button className='btn btn-info me-2 w-25' onClick={() => add()}>more </button>
          <button className='btn btn-warning w-25 me-2 ' onClick={() => add(-1)} >less  </button>
          <button className='btn btn-danger w-25' onClick={reset}>reset</button>

        </div>

        <p className='mt-3'>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
