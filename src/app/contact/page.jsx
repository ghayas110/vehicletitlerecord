import { BannerPage } from '@/components'
import Contact1 from '@/components/Contact1'
import ContactCards from '@/components/ContactCard'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <BannerPage title="Contact Us"/>
      <Contact1 />
      <ContactCards/>
    </div>
  )
}

export default Contact
