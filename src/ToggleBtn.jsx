import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

const ToggleBtn = ({ mode, setMode }) => {
  return (
    <div className='flex justify-around items-center bg-grey dark:bg-pry-500 text-3xl mt-4 rounded-full w-28 h-10 mx-auto px-2 py-3 '>
      <button
        onClick={() => setMode('light')}
        className={mode === 'light' ? 'dark:text-white/90 text-pry-500' : null}
      >
        <MdOutlineLightMode />
      </button>
      <button
        onClick={() => setMode('dark')}
        className={
          mode === 'dark' ? 'dark:text-white/90 text-pry-500' : 'text-black/10'
        }
      >
        <MdOutlineDarkMode />
      </button>
    </div>
  )
}
export default ToggleBtn
