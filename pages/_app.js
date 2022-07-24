import '../styles/globals.css'
import Layout from '../components/Layout'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<NextNProgress color='linear-gradient(130deg, rgba(204,21,21,1) 0%, rgba(213,197,22,1) 25%, rgba(20,214,126,1) 50%, rgba(30,62,208,1) 75%, rgba(170,18,210,1) 100%)' height={5} />
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
