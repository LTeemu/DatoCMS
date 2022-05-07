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
				duration: 2,
				ease: 'elastic(1, 0.5)',
				stagger: {
					each: 0.5, // stagger each by 0.1 seconds (or use amount for an overall value to distribute)
					repeat: -1, // <-- LOOK! It's nested, so each sub-tween will repeat independently
					yoyo: true, // again, passed to each sub-tween.
				},
			},
		})
		tl.fromTo('.stagger', { y: -5 }, { y: 0 })
	}, [])

	return (
		<div className='grid items-center grid-cols-1 gap-5 mx-auto sm:grid-cols-2'>
			<div
				className={`${reverse ? 'stagger sm:order-2' : 'stagger'}`}
				id='image'
			>
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
					}}
				/>
			</div>
			<div
				className={`${reverse ? 'stagger sm:order-1' : 'stagger'}`}
				id='text'
			>
				<p className='text-white color:'>{text}</p>
			</div>
		</div>
	)
}

export default ImgText
