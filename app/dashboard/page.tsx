
import { CustomNavbar } from '@/components/customComponents'
import { Card } from 'flowbite-react'
import React from 'react'

const page = () => {
  return (
   <>
    <CustomNavbar />
      <main className='container gap-2 m'>
        <Card/>
      </main>
   </>
  )
}

export default page