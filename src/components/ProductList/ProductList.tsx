import { clothList, poppins } from '@/utils/Helper/helper'
import React from 'react'
import Card from '../Card/Card';
import Link from 'next/link';

function ProductList() {
  return (
    <section className={`${poppins.className} pt-10 flex justify-center flex-wrap gap-12`}>
      {
        clothList.map((e) => {
          return(
            // <Link href={`/product/${e.id}`}>
            <Card key={e.id} clothlist={e}/>
            // </Link>
          );
        })
      }
    </section>
  )
}

export default ProductList
