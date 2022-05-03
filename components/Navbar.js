import Link from 'next/link'
import Image from 'next/image'
import Sidebar from './Sidebar'
import { useReducer, useEffect, useState } from 'react'
import Hamburger from './Hamburger'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { BodyScrollOptions } from 'body-scroll-lock'

const Navbar = () => {
  const [sidebarOpen, toggleSidebar] = useReducer((p) => !p, false)
  const [disabled, setDisabled] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    //height: undefined,
  })

  //Window resize listener
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        //height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  //Close sidebar if open and resized over small 640px
  useEffect(() => {
    if (windowSize.width >= 640 && sidebarOpen) {
      toggleSidebar()
    }
  }, [windowSize, sidebarOpen])

  //Hamburger click cooldown and disable scroll when sidebar open
  useEffect(() => {
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, 200)

    sidebarOpen && window.innerWidth < 640
      ? disableBodyScroll(
          'html',
          (BodyScrollOptions = {
            reserveScrollBarGap: true,
          })
        )
      : enableBodyScroll(
          'html',
          (BodyScrollOptions = {
            clearAllBodyScrollLocks: true,
          })
        )

    return () => {
      BodyScrollOptions = {
        reserveScrollBarGap: false,
      }
    }
  }, [sidebarOpen])

  //Used by sidebar component to close when clicking dark area
  const closeSidebar = () => {
    toggleSidebar(false)
  }

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <div className='flex items-center justify-between px-4 py-2.5 bg-slate-100 min-w-full z-50 top-0 sticky h-12'>
        <div className='relative flex'>
          <Link href={'/'}>
            <a className='flex'>
              <Image
                src='/static/images/potato-5039995.svg'
                width={32}
                height={40}
                alt={'potato logo'}
              />
            </a>
          </Link>
          <h1 className='ml-3'>Logo</h1>
        </div>
        <div>
          <ul className='hidden sm:flex'>
            <Link href={'/'}>
              <a className='p-1 mr-5 border-2 border-transparent hover:border-b-blue-900 last:mr-0'>
                Home
              </a>
            </Link>

            <Link href={'/about'}>
              <a className='p-1 mr-5 border-2 border-transparent last:mr-0 hover:border-b-blue-900'>
                About
              </a>
            </Link>

            <Link href={'/contact'}>
              <a className='p-1 mr-5 border-2 border-transparent last:mr-0 hover:border-b-blue-900'>
                Contact
              </a>
            </Link>
          </ul>
        </div>
        <button
          className='block sm:hidden'
          onClick={toggleSidebar}
          disabled={disabled}>
          <Hamburger sidebarOpen={sidebarOpen} />
        </button>
      </div>
    </>
  )
}

export default Navbar
