import illust from '../assets/illustration-working.svg'

export const Hero = () => {
  return (
    <section className='flex justify-between py-16 items-center'>
        <div className='px-32'>
        <h1 className='text-[60px] font-bold leading-tight'>More than just shorter links</h1>
        <p className='text-xl w-[40vw] py-5'>Build your brand’s recognition and get detailed insights 
        on how your links are performing.</p>
        <button className='bg-[#2acfcf] px-5 py-2 rounded-2xl hover:text-white'>Get Started</button>
        </div>
        <div>
            <img src={illust} alt="working" className='h-[400px] w-[50vw]'/>
        </div>
    </section>
  )
}
