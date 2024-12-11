import { clothList, poppins } from '@/utils/Helper/helper'
import React from 'react'
import Card from '../Card/Card';
function ProductList() {
  return (
    <section className={`${poppins.className} pt-10 flex justify-center flex-wrap gap-12`}>
      {
        clothList.map((e) => {
          return(
            <Card key={e.id} clothlist={e}/>
          );
        })
      }
    </section>
  )
}

export default ProductList
