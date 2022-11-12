import React, { useState, useEffect } from 'react'
import './App.css';

const url = `https://api.adviceslip.com/advice`

const Generator = () => {
  const [advice, setAdvice] = useState([])

  const fetchAdviceData = async () => {

    const response = await fetch(url)
    const data = await response.json()
    setAdvice(data)
    console.log(data)
    document.getElementById('tittle').innerHTML = `Advice# ${data.slip.id}`
    document.getElementById('text').innerHTML = data.slip.advice

  }

  useEffect(() => {
   

    // fetchAdviceData()

  }, [])
  return (
    <>
      <div className='advice'>
        <h6 id='tittle'></h6> <br />
        <div id='text'>
        </div>
        <img src="/images/pattern-divider-desktop.svg" className='image' alt="divider" />
        <img src="/images/pattern-divider-mobile.svg"  id='mid' alt="smaller screen" />
        <div>
          <button onClick={() => fetchAdviceData()}>  <img src="images/icon-dice.svg" alt="dice" /></button>
        </div>
      </div>

<p>
  This was made by 'Lucy Ajumi Greg'and its an open source <a href="/"></a>
</p>
    </>
  )
}

export default Generator