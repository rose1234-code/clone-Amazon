'use client'

import DetailsPage from "@/components/DetailsPage"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import { useParams } from "next/navigation"

// type Props = {
//   params: { id: number}
// }

export default function Page() {
const query=useParams()
const productIdUrl= Number(query.id)
console.log(productIdUrl)
 

  return (
    <>
      <NavBar />
      <DetailsPage productId={productIdUrl} />
      <Footer />
    </>
  )
}
