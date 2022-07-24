import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const ImgText = ({ text, url, alt, reverse, maskUrl }) => {
	useEffect(() => {
		var tl = gsap.timeline({
			defaults: {
				duration: 2, ease: 'elastic(1, 0.5)', stagger: { each: 0.5, repeat: -1, yoyo: true },
			},
		})
		tl.fromTo('.stagger', { y: -5 }, { y: 0 })
	}, [])

	return (
		<div className='grid items-center grid-cols-1 gap-5 mx-auto sm:grid-cols-2'>
			<div className={`${reverse ? 'stagger sm:order-2' : 'stagger'}`} id='image'>
				<Image
					src={url}
					alt={alt}
					width={'100%'}
					height={'100%'}
					layout='responsive'
					objectFit={'cover'}
					priority={true}
					style={{
						maskImage: `url(${maskUrl})`,
						WebkitMask: `url(${maskUrl})`,
						maskSize: '100% 100%',
						WebkitMaskSize: '100% 100%',
						zIndex: -1
					}}
				/>
			</div>
			<div className={`'stagger' ${reverse && 'sm:order-1'}`} id='text'>
				<p className='text-white color:'>{text}</p>
			</div>
		</div>
	)
}

export default ImgText
