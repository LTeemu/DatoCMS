import Link from 'next/link'
import { motion } from 'framer-motion'

const SidebarLink = ({ href, text }) => {
	return (
		<Link href={href} passHref>
			<motion.a
				className='p-1.5 mx-3 mt-3 text-center rounded-md bg-slate-200 hover:hue-rotate-30 text-[rgba(106,90,205)] font-bold cursor-pointer'
				whileHover={{
					x: -4,
					y: -4,
					boxShadow: '4px 4px rgba(192,192,192, 1)',
				}}
				style={{ boxShadow: '2px 2px rgba(192,192,192, 0.8)' }}
				transition={{
					duration: 0.15,
					ease: 'easeInOut',
				}}
			>
				{text}
			</motion.a>
		</Link>
	)
}

export default SidebarLink
