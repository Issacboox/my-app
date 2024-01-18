import Image from 'next/image'
import { Fragment } from 'react'
import Navbar from '@/components/head/navbar'
import Welcome from '@/features/home/welcome'
export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Welcome />
    </Fragment>
  )
}
