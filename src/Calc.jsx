const Calc = ({ arr, value, input, handleClick }) => {
  return (
    <>
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
    </>
  )
}
export default Calc
