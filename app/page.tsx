
import Link from "next/link";


export default function Home() {
  return (
   <div className="h-screen flex justify-center items-center">
    <div className="w-[500px] h-[250px] border p-5 flex flex-col gap-3 rounded-2xl shadow-lg hover:scale-[1.05] transition-all" >
      <h1 className="font-bold text-[24px]">Explore the World of Data Fetching</h1>
      <p className="text-slate-400 font-medium">Select a data fetching method to fetch data!</p>
      <div className="flex flex-col gap-2 ">
      <Link href={"/client-side"}> 
        <div className="w-full bg-[#336699] h-[50px] rounded-xl flex items-center justify-center font-semibold text-[20px] text-white">
         Client Side </div></Link>

         <Link href={"/Server-side"}> 
        <div className="w-full bg-[#336699] h-[50px] rounded-xl flex items-center justify-center font-semibold text-[20px] text-white">
         Server Side </div></Link>

      </div>
    </div>
   </div>
  );
}
