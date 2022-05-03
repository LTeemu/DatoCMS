import { request } from '../lib/datocms'
import { qgl } from 'graphql-request'
import Hero from '../components/Hero'
import Image from 'next/image'
import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import ImgText from '../components/ImgText'

const HOMEPAGE_QUERY = `query {
home {
    grids {
      text
      image {
        url
        alt
      }
      mask {
        url
      }
    }
    heroImage {
      url
      alt
    }
  }
}
`

export async function getStaticProps() {
	const data = await request({
		query: HOMEPAGE_QUERY,
	})
	return {
		props: data.home,
	}
}

export default function Home(props) {
	return (
		<div
			className='flex justify-center pb-10'
			style={{
				backgroundImage: 'url(static/images/subtle-prism.svg)',
				backgroundAttachment: 'fixed',
			}}
		>
			<div className='max-w-7xl'>
				{/*props.heroImage && (
          <Hero url={props.heroImage.url} alt={props.heroImage.alt} />
        )*/}

				<div className='p-5'>
					<h1>Home</h1>
					<div className='grid gap-5'>
						{props.grids &&
							props.grids.map((item, key) => (
								<ImgText
									key={key}
									text={item.text}
									url={item.image.url}
									maskUrl={item.mask.url}
									alt={item.image.alt}
									reverse={key % 2 != 0 ? true : false}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}
