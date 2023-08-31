import React from 'react'

function AutoCompleteAds() {
  return (
    <div>
        <div className='mt-3'>
            <label className='text-gray-400'>Where From?</label>
            <input type="text" 
                className='bg-white p-1 border-[1px] w-full
                rounded-md outline-none
                focus:border-yellow-300
                '
            />
        </div>
        <div className='mt-3'> 
            <label className='text-gray-400'>Where To?</label>
            <input type="text" 
                className='bg-white p-1 border-[1px] w-full
                rounded-md outline-none
                focus:border-yellow-300
                '
            />
        </div>
    </div>
  )
}

export default AutoCompleteAds