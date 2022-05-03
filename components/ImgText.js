import Image from 'next/image'

const ImgText = ({ text, url, alt, reverse, maskUrl }) => {
  return (
    <div className='grid items-center grid-cols-1 gap-5 mx-auto sm:grid-cols-2'>
      <div className={reverse ? 'sm:order-2' : ''}>
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
      <div className={reverse ? 'sm:order-1' : ''}>
        <p className='text-white color:'>{text}</p>
      </div>
    </div>
  )
}

export default ImgText
