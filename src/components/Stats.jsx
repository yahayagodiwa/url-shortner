import brand from '../assets/icon-brand-recognition.svg'
import record from '../assets/icon-detailed-records.svg'
import custom from '../assets/icon-fully-customizable.svg'
const Stats = () => {
  return (
    <section className='flex flex-col justify- px-5 md:px-32 py-10 md:py-14'>
    <div className='text-center py-14'>
        <h2 className='text-[30px] font-semibold'> Advanced Statistics</h2>
        <p className='md:w-[30vw] w-full mx-auto'>Track how your links are performing across the web with our 
        advanced statistics dashboard.</p>
    </div>
    <div className='flex flex-col md:flex-row justify-between gap-5'>

    {/* /////// First box  */}

    <div className='bg-slate-50 p-5 rounded-lg h-60 text-center hover:shadow-2xl hover:bg-slate-200'>
        <img src={brand} alt="brand" 
        className='bg-[#3b3054] rounded-full p-5 relative bottom-10 text-center inline-block '/>
        
        <h3 className='text-[20px] font-semibold -mt-5'> Brand Recognition</h3>
        <p> Boost your brand recognition with each click. Generic links don’t 
        mean a thing. Branded links help instil confidence in your content.</p>
    </div>

     {/* /////// Second box  */}
     <div className='bg-slate-50 p-5 rounded-lg h-60 mt-6 text-center hover:shadow-2xl hover:bg-slate-200'>
        <img src={record} alt="brand" 
        className='bg-[#3b3054] rounded-full p-5 relative bottom-10 text-center inline-block'/>
        
        <h3 className='text-[20px] font-semibold -mt-5'> Detailed Records </h3>
        <p> Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions.</p>
    </div>

     {/* /////// last box  */}
     <div className='bg-slate-50 p-5 rounded-lg h-60 mt-12 text-center hover:shadow-2xl hover:bg-slate-200'>
        <img src={custom} alt="brand" 
        className='bg-[#3b3054] rounded-full p-5 relative bottom-10 text-center inline-block'/>
        
        <h3 className='text-[20px] font-semibold -mt-3'> Fully Customizable</h3>
        <p> Improve brand awareness and content discoverability through customizable 
        links, supercharging audience engagement.</p>
    </div>
    </div>
    </section>
  )
}

export default Stats