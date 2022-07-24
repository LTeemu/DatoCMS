const Hamburger = ({ sidebarOpen }) => {
	return (
		<div className={`flex flex-col w-8 h-8 ${sidebarOpen ? 'justify-center' : 'justify-around'}`}>
			<span className={`shadow-[inset_2px_-2px_1px_black] ${sidebarOpen ? 'bg-red-300 h-1/4 rotate-45 relative transition-all top-1 rounded-md' : 'bg-zinc-500 h-1/4 transition-all rounded-md'}`}></span>
			<span className={`shadow-[inset_2px_-2px_1px_black] ${sidebarOpen ? 'hidden' : 'h-1/4 transition-all rounded-md bg-zinc-600'}`}></span>
			<span className={`shadow-[inset_2px_-2px_1px_black] ${sidebarOpen ? 'bg-red-500 h-1/4 -rotate-45 relative transition-all -top-1 rounded-md' : 'bg-zinc-500 h-1/4 transition-all rounded-md'}`}></span>
		</div>
	)
}

export default Hamburger
