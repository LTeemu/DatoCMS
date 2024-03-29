import Link from 'next/link'
import Image from 'next/image'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import Hamburger from './Hamburger'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { useRouter } from 'next/router';

const Navbar = () => {
	const [sidebarOpen, toggleSidebar] = useState(false)
	const [disabled, setDisabled] = useState(false)
	const [windowSize, setWindowSize] = useState({ width: undefined })
	const { events } = useRouter();

	//Window resize listener
	useEffect(() => {
		window.addEventListener('resize', handleResize)

		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
			})
		}
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
			? disableBodyScroll('html')
			: enableBodyScroll('html',)
	}, [sidebarOpen])

	const closeSidebar = () => {
		toggleSidebar(false)
	}

	useEffect(() => {
		events.on('routeChangeStart', closeSidebar);
		return () => {
			events.off('routeChangeStart', closeSidebar);
		};
	}, []);

	return (
		<>
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
			<header className='flex items-center justify-between px-4 py-2.5 bg-slate-100 w-screen z-50 top-0 sticky h-[60px]'>
				<Link href={'/'}>
					<a className='flex items-center'>
						<Image src='/static/images/potato-5039995.svg' width={32} height={40} alt={'potato logo'} />
						<span className='ml-3 text-2xl'>Logo</span>
					</a>
				</Link>

				<nav>
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
				</nav>

				<button className='block sm:hidden' onClick={() => toggleSidebar(!sidebarOpen)} disabled={disabled}>
					<Hamburger sidebarOpen={sidebarOpen} />
				</button>
			</header>
		</>
	)
}

export default Navbar
