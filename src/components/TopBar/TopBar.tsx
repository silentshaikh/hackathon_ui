import React from 'react'
import TopContact from '../TopContact/TopContact'
import { poppins } from '@/utils/Helper/helper'
import TopOffer from '../TopOffer/TopOffer'
import TopFollow from '../TopFollow/TopFollow'

function TopBar() {
  return (
    <aside className={`${poppins.className} flex justify-evenly py-3 text-sm bg-[#252b42] text-white max-[600px]:justify-center`}>
      <TopContact/>
      <TopOffer/>
      <TopFollow/>
    </aside>
  )
};
export default TopBar;