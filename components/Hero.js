import Image from 'next/image'

const Hero = ({ url, alt }) => {
  return (
    <div
      className='max-w-screen h-[calc(100vh_-_54px)] bg-no-repeat bg-cover bg-center'
      style={{
        backgroundImage: `url(${url})`,
      }}></div>
  )
}

export default Hero
