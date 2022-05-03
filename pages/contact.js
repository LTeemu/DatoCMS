import { request } from '../lib/datocms'
import { qgl } from 'graphql-request'
import Hero from '../components/Hero'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Contact(props) {
  return (
    <div
      className='min-h-screen p-5'
      style={{
        backgroundImage: 'url(static/images/subtle-prism.svg)',
        backgroundAttachment: 'fixed',
      }}>
      <h1>Contact</h1>
    </div>
  )
}
