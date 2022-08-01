import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<main className="min-h-screen bg-no-repeat bg-cover bg-[url('/static/images/subtle-prism.svg')] p-5">
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Layout
