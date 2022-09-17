import { useRef, useEffect, useState } from 'react'

export const HeroImg = () => {
  const [counter, setCounter] = useState(1)
  let myInterval = useRef()

  useEffect(() => {
    myInterval.current = setInterval(() => {
      setCounter((prevState) => prevState + 1)
    }, 7500)
    return () => {
      clearInterval(myInterval.current)
    }
  }, [])

  useEffect(() => {
    if (+counter > 5) {
      setCounter(1)
    }
  }, [counter])

  return (
    <div className="hero-img">

      <div className="animate-fade hero-andrea" style={{ opacity: `${counter === 1 ? '1' : '0'}` }}>
        <div className="max-width-container seller-name">
          <p>
            Andrea, <b>Fashion Designer</b>
          </p>
        </div>
      </div>
      <div className="animate-fade hero-moon" style={{ opacity: `${counter === 2 ? '1' : '0'}` }}>
        <div className="max-width-container seller-name">
          <p>
            Moon, <b>Marketing Expert</b>
          </p>
        </div>
      </div>
      <div className="animate-fade hero-ritika" style={{ opacity: `${counter === 3 ? '1' : '0'}` }}>
        <div className="max-width-container seller-name">
          <p>
            Rikita, <b>Shoemaker and Designer</b>
          </p>
        </div>
      </div>
      <div className="animate-fade hero-zach" style={{ opacity: `${counter === 4 ? '1' : '0'}` }}>
        <div className="max-width-container seller-name">
          <p>
            Zach, <b>Bar Owner</b>
          </p>
        </div>
      </div>
      <div className="animate-fade hero-gabrielle" style={{ opacity: `${counter === 5 ? '1' : '0'}` }}>
        <div className="max-width-container seller-name">
          <p>
          Gabrielle, <b>Video Editor</b>
          </p>
        </div>
      </div>
      
    </div>
  )
}
