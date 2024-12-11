import { clothList, poppins } from '@/utils/Helper/helper'
import React from 'react'
import ProductImg from '../ProductImg/ProductImg';
import ProductImgContent from '../ProductImgContent/ProductImgContent';

function ProdDetail({id}:{id:string}) {
  const productDetail = clothList.find((e) => {
    return e.id === +id;
  });
 if(productDetail){
  return (
    <section className={`${poppins.className} flex justify-evenly items-center bg-[#fafafa] pt-32 pb-10 max-[700px]:flex-col max-[700px]:gap-10`}>
      <ProductImg img={productDetail.img} name={productDetail.name}  />
      <ProductImgContent name={productDetail.name} color={productDetail.color} price={productDetail.newPrice}/>
    </section>
  )
 }
}

export default ProdDetail
