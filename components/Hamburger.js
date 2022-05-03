const Hamburger = ({ sidebarOpen }) => {
	return (
		<div
			className={
				sidebarOpen
					? 'flex flex-col justify-center w-8 h-8'
					: 'flex flex-col justify-around w-8 h-8'
			}
		>
			<span
				className={
					sidebarOpen
						? 'bg-red-300 h-1/4 rotate-45 relative transition-all top-1 rounded-md'
						: 'bg-zinc-500 h-1/4 transition-all rounded-md'
				}
				style={{
					boxShadow: 'inset 2px -2px 1px black',
				}}
			></span>

			<span
				className={
					sidebarOpen ? 'hidden' : 'h-1/4 transition-all rounded-md bg-zinc-600'
				}
				style={{
					boxShadow: 'inset 2px -2px 1px black',
				}}
			></span>

			<span
				className={
					sidebarOpen
						? 'bg-red-500 h-1/4 -rotate-45 relative transition-all -top-1 rounded-md'
						: 'bg-zinc-500 h-1/4 transition-all rounded-md'
				}
				style={{
					boxShadow: 'inset 2px -2px 1px black',
				}}
			></span>
		</div>
	)
}

export default Hamburger
