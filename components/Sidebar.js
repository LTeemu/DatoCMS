import Link from 'next/link'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className='fixed z-50 flex w-screen mt-12 sm:hidden h-[calc(100vh_-_54px)]'>
      <div
        className={'bg-black bg-opacity-70 w-screen relative'}
        onClick={closeSidebar}
        style={{
          right: sidebarOpen ? 0 : '-100%',
          opacity: sidebarOpen ? 1 : 0,
          transition: '0.4s opacity linear',
        }}></div>
      <div
        className='w-4/12 bg-[#5f9ea0] fixed h-[calc(100vh_-_54px)]'
        style={{
          right: sidebarOpen ? 0 : '-100%',
          transition: sidebarOpen ? 'all 0.3s linear' : 'all 0.2s linear',
          boxShadow: 'inset 5px 5px 5px rgb(69, 108, 109)',
        }}>
        <ul className='flex flex-col'>
          <Link href={'/'}>
            <a className='p-1.5 mx-3 mt-4 mb-2 text-center rounded-md bg-slate-200 hover:shadow-[4px_4px_rgb(192,192,192)] hover:hue-rotate-30 transition-all duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] shadow-[2px_2px_rgb(192,192,192)] text-[rgba(106,90,205)] font-bold'>
              Home
            </a>
          </Link>

          <Link href={'/about'}>
            <a className='p-1.5 mx-3 my-2 text-center rounded-md bg-slate-200 hover:shadow-[4px_4px_rgb(192,192,192)] hover:hue-rotate-30 transition-all duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] shadow-[2px_2px_rgb(192,192,192)] text-[rgba(106,90,205)] font-bold'>
              About
            </a>
          </Link>

          <Link href={'/contact'}>
            <a className='p-1.5 mx-3 my-2 text-center rounded-md bg-slate-200 hover:shadow-[4px_4px_rgb(192,192,192)] hover:hue-rotate-30 transition-all duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] shadow-[2px_2px_rgb(192,192,192)] text-[rgba(106,90,205)] font-bold'>
              Contact
            </a>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
