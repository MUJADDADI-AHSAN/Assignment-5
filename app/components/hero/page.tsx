import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-between'>
    <div className='mt-[190px] ml-[176px]'>
       <h1 className='w-[496px] h-[189px] font-serif font-bold text-[40px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className=' w-[902px] h-[147px] font-sans font-medium text-[30px] text-[#A29875] mt-7'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
        <button className='  rounded-[10px]  bg-[#A29875] text-white w-[288px] h-[58px] font-serif font-medium text-[30px] mt-9'>Explore Now</button>
        
</div>
     <div className='mt-[80px] mr-[200px]'>
        <Image src = "/Hero-2.png" width={462} height={647} alt='Women' />
     </div>

</div>
  )
}

export default Hero