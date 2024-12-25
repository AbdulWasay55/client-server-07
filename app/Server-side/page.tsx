import React from 'react'
import Nav from '@/components/nav'

interface serverData {
    id: number,
    name: string,
    type: string,
    available :boolean
}

const Page = async () => {
    
        const apiUrl = await fetch("https://simple-books-api.glitch.me/books/")
    const data: serverData[] = await apiUrl.json()
    
  return (
    <div>
        <Nav></Nav>
        <div className='py-14 px-5 '>
        <h1 className='text-[24px] text-[#336699] font-bold text-center sm:text-[32px] md:text-[40px]'>
            Fetching Data on the Server-Side
            </h1>
            <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((list, index) => (
                        <div key={index} className="w-full bg-[white] shadow-lg p-[20px] rounded-[8px] flex flex-col items-center ">
                            <div>
                            <p className="text-[22px] font-[600] text-[#3d64b4] mb-[10px]">{list.name}</p>
                            <div className=" flex gap-2 mb-[8px]"><div className="font-bold">ID:</div> {list.id}</div>
                            <div className="flex gap-2 mb-[8px]"><div className="font-bold">Type:</div> {list.type}</div>
                            <p className={`${list.available == true ? "text-[green]" : "text-[red]"} font-semibold`}>{list.available == true ? "Available" : "Unavailable"}</p>
                            
                            </div>
                        </div>
                    ))}
        </div>

    </div>
    </div>
  )
}

export default Page