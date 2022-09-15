import { useRef, useEffect, useState } from 'react'

export const HeroImg = () => {
  const [counter, setCounter] = useState(0)
  let myInterval = useRef()

  useEffect(() => {
    myInterval.current = setInterval(() => {
      setCounter((prevState) => prevState + 1)
    }, 2000)
    return () => {
      clearInterval(myInterval.current)
    }
  }, [])

  useEffect(() => {
    if (+counter > 5) {
      setCounter(1)
    }
  }, [counter])

  const interval = () => {
    myInterval.current = setInterval(() => {
      setCounter((prevState) => prevState + 1)
    }, 2000)
  }

  return (
    <div className="hero-img">

      <div className="hero-andrea" style={{ opacity: `${counter === 1 ? '1' : '0'}` }}>
        <div className="seller-name">
          <p>
            Andrea, <b>Fashion Designer</b>
          </p>
        </div>
      </div>
      <div className="hero-moon" style={{ opacity: `${counter === 1 ? '0' : '1'}` }}>
        <div className="seller-name">
          <p>
            Moon, <b>Marketing Expert</b>
          </p>
        </div>
      </div>
      
    </div>
  )
}
