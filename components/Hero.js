import Image from 'next/image'

const Hero = ({ url, alt }) => {
	return (
		<Image
			src={url}
			alt={alt}
			layout='responsive'
			objectFit='contain'
			objectPosition='center'
			width={'100%'}
			height={'33vh'}
			priority={true}
		/>
	)
}

export default Hero
