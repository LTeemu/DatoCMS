import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className='scroll-smooth'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
				<link href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;500;700&family=Righteous&display=swap' rel='stylesheet' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
