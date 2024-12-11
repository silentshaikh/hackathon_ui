import { homeProduct } from '@/utils/Helper/helper'
import Image from 'next/image'
import React from 'react'
import Card from '../Card/Card'

function HomeSellerList() {
  return (
    <div className='flex justify-center gap-12 items-center flex-wrap pt-10'>
      {
        homeProduct.map((e) => {
            return(
                // <div key={e.id} className='flex flex-col items-center'>
                //     <Image
                //         src={`/images/${e.img}`}
                //         alt={e.name}
                //         height={170}
                //         width={235}
                //     />
                //     <h4 className='pt-4 font-bold'>{e.name}</h4>
                //     <h5 className='py-2 text-sm font-bold text-[#737373]'>{e.category}</h5>
                //     <div className='flex gap-2 text-sm font-bold'>
                //         <p className='text-[#bdbdbd]'>{e.oldPrice}</p>
                //         <p className='text-[#23a56d]'> {e.newPrice}</p>
                //     </div>
                //     <div className="flex gap-2 pt-2">
                //         {
                //         e.color.map((e) => {
                //             return <div key={e} style={{backgroundColor:e}} className={` size-4 rounded-full`}></div>
                //         })
                        
                //         }
                //     </div>
                // </div>
                <Card key={e.id} clothlist={e}/>
            )
        })
      }
    </div>
  )
}

export default HomeSellerList
