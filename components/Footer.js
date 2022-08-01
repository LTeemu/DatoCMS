import { VscGithub } from 'react-icons/vsc'

const Footer = () => {
	return (
		<footer className='flex items-center justify-center py-2.5 bg-slate-100'>
			<a href="https://github.com/lteemu" target='_blank' rel="noreferrer" className='mr-2 hover:opacity-80'>
				<VscGithub size={25} />
			</a>
			<span className='ml-1'>TL &copy; {new Date().getFullYear()}</span>
		</footer>
	)
}

export default Footer
