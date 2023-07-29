import LeftToCenterButton from '../components/index/LeftToCenterButton';
import { useEffect, useRef } from 'react';
import IndexBanner from '../components/index/IndexBanner';
import IndexProductsList from '../components/index/IndexProductsList';
import IndexContactUs from '../components/index/IndexContactUs';

export default function Home() {
  const buttonRefs = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          console.log('entry' + index + entry)
          console.log(buttonRefs.current)
          entry.target.classList.add('animate-left-to-center')
        }
      });
    })
    observer.observe(buttonRefs.current[0] as HTMLButtonElement)
    observer.observe(buttonRefs.current[1] as HTMLButtonElement)
    observer.observe(buttonRefs.current[2] as HTMLButtonElement)
    observer.observe(buttonRefs.current[3] as HTMLButtonElement)
  }, [])

  const addToRefs = (element: any) => {
    if (element && !buttonRefs.current.includes(element))
      buttonRefs.current.push(element)
  }

  return (
    <div>
      <IndexBanner addToRefs={addToRefs} />

      <IndexProductsList addToRefs={addToRefs} />

      <div className="h-[51vh] w-full shadow-xl relative">
        <img
          className="w-full h-full object-cover"
          alt='bg'
          src='./sample-bg.jpg'
        />
        <div className='absolute inset-x-0 top-1/4 flex flex-col items-center text-center justify-center space-y-4'>
          <span className='text-4xl text-white font-bold'>
            TÍTULO
          </span>
          <span>
            Sub título
          </span>
          <LeftToCenterButton buttonRef={addToRefs} bgColor='bg-green-600' />
        </div>
      </div>

      <div className="bg-white flex flex-col items-center space-y-8 justify-center p-12">
        <span className='text-4xl text-green-600 font-bold text-center'>
          TÍTULO
        </span>
        <div className='border border-orange-500 w-32'></div>
        <span>
          Sub título
        </span>
        <LeftToCenterButton buttonRef={addToRefs} bgColor='bg-orange-500' />
      </div>

      <IndexContactUs />
    </div>
  )
}
