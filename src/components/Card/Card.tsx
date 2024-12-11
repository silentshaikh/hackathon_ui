'use client';
import { ClothList } from '@/utils/Type/type'
import Image from 'next/image'
import {  useRouter } from 'next/navigation';
import React from 'react'

function Card({clothlist}:{clothlist:ClothList}) {
    const {img,name,category,oldPrice,newPrice,color,id} = clothlist;

    const prodRoute = useRouter();
  return (
    <div  className='flex flex-col items-center' onClick={() => prodRoute.push(`/product/${id}`)}>
                    <Image
                        src={`/images/${img}`}
                        alt={name}
                        height={170}
                        width={235}
                    />
                    <h4 className='pt-4 font-bold'>{name}</h4>
                    <h5 className='py-2 text-sm font-bold text-[#737373]'>{category}</h5>
                    <div className='flex gap-2 text-sm font-bold'>
                        <p className='text-[#bdbdbd]'>{oldPrice}</p>
                        <p className='text-[#23a56d]'> {newPrice}</p>
                    </div>
                    {/* { */}
                        {/* // colorShowPath === `/product/${id}` ? '' : */}
                    <div className="flex gap-2 pt-2">
                        {
                            color.map((e,i) => {
                                return <div key={i} style={{backgroundColor:e}} className={` size-4 rounded-full`}></div>
                            })
                        
                        }
                    </div>
                        {/* } */}
                </div>
  )
}

export default Card