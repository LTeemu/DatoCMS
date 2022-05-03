import { motion } from 'framer-motion'
import SidebarLink from './SidebarLink'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
	return (
		<div className='fixed z-50 flex w-screen mt-[60px] sm:hidden h-[calc(100vh_-_60px)]'>
			<motion.div
				className={'w-screen h-screen fixed bg-black'}
				animate={{ opacity: sidebarOpen ? 0.7 : 0 }}
				transition={{ duration: 0.5, type: 'tween' }}
			></motion.div>

			<div
				className={`w-screen h-screen fixed ${
					sidebarOpen ? 'block' : 'hidden'
				}`}
				onClick={closeSidebar}
			></div>

			<motion.div
				className='w-5/12 bg-[#5f9ea0] h-[calc(100vh_-_60px)] fixed right-[-100%] border-[#45676C] border-4 '
				animate={{ right: sidebarOpen ? 0 : '-100%' }}
				transition={{ duration: 0.5, type: 'easeInOut' }}
			>
				<ul className='flex flex-col'>
					<SidebarLink href={'/'} text={'Home'} />
					<SidebarLink href={'about'} text={'About'} />
					<SidebarLink href={'contact'} text={'Contact'} />
				</ul>
			</motion.div>
		</div>
	)
}

export default Sidebar
