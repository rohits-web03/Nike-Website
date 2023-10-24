import React from 'react'

const ShoeCard = ({imgURL,changeLargeShoeImg,largeShoeImg}) => {
  const handleClick=()=>{
    if(largeShoeImg!=imgURL.bigShoe){
      changeLargeShoeImg(imgURL.bigShoe)
    }
  }
  return (
    <div 
      className={`border-2 rounded-xl ${largeShoeImg===imgURL.bigShoe?'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img 
          src={imgURL.thumbnail}
          alt='Shoe Collection'
          width={127} 
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard