import { useEffect, useState } from 'react'
import { CgUndo } from 'react-icons/cg'
import Calc from './Calc'
import ToggleBtn from './ToggleBtn'
import { evaluate } from 'mathjs'

const App = () => {
  const arr = [
    { value: 'AC', key: 'clear', color: 'blue' },
    { value: '±', key: 'pminus', color: 'blue' },
    { value: '²', color: 'blue', key: 'num' },
    { value: '÷', key: 'num', color: 'red' },
    { value: 7, key: 'num' },
    { value: 8, key: 'num' },
    { value: 9, key: 'num' },
    { value: 'x', key: 'num', color: 'red' },
    { value: 4, key: 'num' },
    { value: 5, key: 'num' },
    { value: 6, key: 'num' },
    { value: '-', key: 'num', color: 'red' },
    { value: 1, key: 'num' },
    { value: 2, key: 'num' },
    { value: 3, key: 'num' },
    { value: '+', key: 'num', color: 'red' },
    { label: <CgUndo />, key: 'delete' },
    { value: '0', key: 'zero' },
    { value: '.', key: 'point' },
    { value: '=', key: 'enter', color: 'red' },
  ]

  const [mode, setMode] = useState('light')
  const [input, setInput] = useState('')
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  const handleClick = (e) => {
    const key = e.target.dataset.key
    const num = e.target.textContent
    const length = input.length

    // clear inputs
    if (key === 'clear') {
      setInput('')
      setValue(0)
      return
    }

    // check for syntax error
    if (value === 'SYNTAX ERR') return

    // delete input
    if (key === 'delete') {
      setInput((old) => old.slice(0, -1))
      return
    }

    // characters too long
    if (length > 14) return

    // change input
    if (key === 'num') {
      if (value !== 0) {
        setInput(() => value + num)
        setValue(0)
        return
      }

      setInput((old) => old + num)
    }

    // starting with zero
    if (key === 'zero') {
      if (length < 1) return
      else {
        setInput((old) => old + num)
      }
      return
    }

    // point
    if (key === 'point') {
      if (length < 1) {
        setInput('0.')
      }
      return
    }
    // pminus
    if (key === 'pminus') {
      if (input[0] === '-') {
        setInput((old) => `+${old.slice(1, old.length)}`)
      } else if (input[0] === '+') {
        setInput((old) => `-${old.slice(1, old.length)}`)
      } else {
        setInput((old) => `-${old}`)
      }
      return
    }

    // submit
    if (key === 'enter') {
      if (!input) return
      let final = input
      final = final.replaceAll('x', '*')
      final = final.replaceAll('÷', '/')
      final = final.replaceAll('²', '**2')

      try {
        const result = evaluate(final)
        setValue(result)
        return
      } catch (error) {
        setValue('SYNTAX ERR')
        return
      }
    }
  }

  return (
    <div className='container mx-auto min-h-[95vh] w-[100vw] bg-white/90 dark:bg-pry-100  mt-5 max-w-md rounded-3xl mb-2'>
      <br />
      <ToggleBtn mode={mode} setMode={setMode} />
      <div className='dark:text-white/90 text-pry-100 text-right px-6 pt-20 text-[25px]  w-[100%] truncate h-[117.5px]'>
        {input}
      </div>
      <div className='dark:text-white/90 text-pry-100 text-right px-6  text-[50px] mb-4 break-all leading-[3rem] h-[48px] overflow-hidden'>
        {value}
      </div>
      <div className='bg-grey text-pry-100 dark:bg-pry-500 dark:text-white/90  rounded-3xl p-6'>
        <section className='grid grid-cols-4 place-items-center'>
          {arr.map((item, index) => {
            return (
              <button
                data-key={item.key || item.value}
                key={index}
                className='bg-white/90 dark:bg-pry-100 px-6 py-4 m-2 rounded-xl text-xl hover:bg-white/40 dark:hover:bg-pry-100/40 transition-all duration-[0.3s] ease-linear'
                onClick={handleClick}
              >
                <span
                  className={
                    item.color === 'blue'
                      ? 'text-sec'
                      : item.color === 'red'
                      ? 'text-darkRed'
                      : 'dark:text-white/90 text-pry-100'
                  }
                >
                  {item.label || item.value}
                </span>
              </button>
            )
          })}
        </section>
        <div className='bg-[#474B52] h-[5px] w-[50%] mx-auto mt-5 rounded-full'></div>
      </div>
    </div>
  )
}
export default App
