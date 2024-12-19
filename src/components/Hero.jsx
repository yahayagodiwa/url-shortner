import illust from '../assets/illustration-working.svg'
import Button from './Botton'

export const Hero = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row justify-between py-16 items-center'>
        <div className='px-5 md:px-32 text-center md:text-left'>
        <h1 className='text-[50px] md:text-[60px] font-bold leading-tight'>More than just shorter links</h1>
        <p className='text-xl w-full md:w-[40vw]  py-5'>Build your brand’s recognition and get detailed insights 
        on how your links are performing.</p>
       <a href='https://www.profitablecpmrate.com/m5fftcrwd?key=c6f66485ea0cb9f001c0416e234037b0' 
       className='text-center inline-block'><Button /> </a> 
        </div>
        <div>
            <img src={illust} alt="working" className='h-[300px] md:h-[400px] w-[90vw] md:w-[50vw]'/>
        </div>
    </section>
  )
}
