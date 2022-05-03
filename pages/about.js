import { request } from '../lib/datocms'
import { qgl } from 'graphql-request'
import Image from 'next/image'
import Head from 'next/head'

export default function About(props) {
	return (
		<div
			className='min-h-screen p-5'
			style={{
				backgroundImage: 'url(static/images/subtle-prism.svg)',
				backgroundAttachment: 'fixed',
			}}
		>
			<h1>About</h1>
		</div>
	)
}
