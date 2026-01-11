import NavBar from '@/components/NavBar'
import Searchf from '@/components/Searchf'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div>
      <NavBar/>
      <Suspense fallback={(<div>Loading..</div>)}>
        <Searchf/>
      </Suspense>
    </div>
  )
}
