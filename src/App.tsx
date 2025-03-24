import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [spanClassName, setSpanClassName] = useState('');
  const [incBtnClassName, setIncBtnClassName] = useState('');
  const [rsBtnClassName, setRsBtnClassName] = useState('');

  useEffect(() => {
    if(count > 4) {
      setSpanClassName('index-alarm')
      setIncBtnClassName('inactive-btn')
      setCount(5);
    }
    if(count === 0) {
      setRsBtnClassName('inactive-btn');
      setIncBtnClassName('active-btn');
    } else {
      setRsBtnClassName('');

    }
  }, [count])

  function resetBtn() {
      setCount(0);
      setSpanClassName('');
  }
  

  return (
    <>
      <div className='counter'>
        <div className='counter__index'>
          <span className={spanClassName}>{count}</span>
        </div>
        <div className='counter__buttons'>
          <button onClick={() => setCount((count) => count + 1)} className={incBtnClassName}>inc</button>
          <button onClick={resetBtn} className={rsBtnClassName}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App;