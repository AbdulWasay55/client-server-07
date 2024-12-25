"use client"
import React from 'react'
import { useState, useEffect } from "react"
import Nav from '@/components/nav'
import Loader from '@/components/loader'
import Image from 'next/image'
import { MdOutlineStarPurple500 } from "react-icons/md";

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image : string,
    rating:{
        rate: number,
        count: number
    }
}

const Page = () => {
    const [data , setData] = useState<Product[]>([]);
    const [loading ,setLoading] = useState(false);

    useEffect (()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
        const dataFetch = async () =>{
            const productApi =  await fetch("https://fakestoreapi.com/products")
            const apiData : Product[] = await productApi.json()
            setData(apiData)
        }
        dataFetch()
    },[])
    
  return (
    
    <div>
        <Nav/>
        {loading ? (<Loader></Loader>) : (
            <div className='py-14 px-5 '>
                <h1 className='text-[24px] text-[#336699] font-bold text-center sm:text-[32px] md:text-[40px]'>Fetching Data on the Client-Side</h1>
                <div className=' grid mt-5 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {data.map((productData , index)=>(
                        
                        <div key={index} className="w-full bg-[white] shadow-lg p-[20px] rounded-[8px] flex flex-col gap-2">
                        <div className="h-[180px]">
                            <Image src={productData.image} alt={productData.title} width={140} height={140} unoptimized className="  mx-auto"></Image>
                        </div>
                        <p className="mt-[50px]  text-[#0056b3] font-semibold capitalize">{productData.category}</p>
                        <p className=" text-[20px] font-semibold">{productData.title}</p>
                        <p className="line-clamp-3 text-[#0056b3] ">{productData.description}</p>
                        <p className="text-[orange] text-[18px] flex items-center "><MdOutlineStarPurple500 className="text-[24px] mr-[5px]" /><div className="mr-[5px]">{productData.rating.rate}</div>({productData.rating.count} Reviews)</p>
                        <p className="text-[20px] font-semibold">${productData.price}</p>
                        <div className="flex items-center justify-end">
                            <button className="py-[7px] px-[12px] bg-[#0056b3] text-white rounded-xl hover:bg-[#fdc921] text-[20px]">Buy Now</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  )
}

export default Page