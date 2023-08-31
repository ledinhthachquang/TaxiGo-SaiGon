import React from 'react'
import { useContext, useEffect, useState } from 'react'

function AutoCompleteAds() {
    const [source,setSource]=useState<any>()
    const [addressList,setAddressList]=useState<any>([]);

    useEffect(()=>{
        const delayDebounceFn=  setTimeout(()=>{
            getAddressList()
        },1000)
        return () => clearTimeout(delayDebounceFn)   
    },[source]);



    const getAddressList=async()=>{
        setAddressList([]);
        const res=await fetch('/api/search-address?q='+source,{
            headers:{
                "Content-Type": "application/json",  
        }
        });

        const result=await res.json();
        setAddressList(result)
        
    }
  return (
    <div>
        <div className='mt-3'>
            <label className='text-gray-400'>Where From?</label>
            <input type="text" 
                className='bg-white p-1 border-[1px] w-full
                rounded-md outline-none
                focus:border-yellow-300
                '
                value={source}
                onChange={(e)=>{
                    setSource(e.target.value);
            
                }}
            />
            {addressList?.suggestions?
            <div>
            {addressList?.suggestions.map((item:any,index:number)=>(
                <h2>{item.full_address}</h2>
            ))}
           </div>:null}
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