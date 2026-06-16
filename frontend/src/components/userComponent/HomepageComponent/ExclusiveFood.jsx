import image8 from '../../../assets/image copy 8.png'
import image9 from '../../../assets/image copy 9.png'
import image10 from '../../../assets/image copy 10.png'
import image11 from '../../../assets/image copy 11.png'
const ExclusiveFood = () => {
  return (
    <div className='bg-slate-300 items-center rounded-2xl'>
      <div className='px-20 py-20'>
        <h1 className='font-bold text-2xl p-4 text-black'>Exclusive deal for you</h1>
        <div className='grid grid-cols-5 '>
            <img src={image8} alt="" className='w-60 hover:cursor-pointer hover:scale-[1.02] transition-all' />
            <img src={image9} alt="" className='w-60 hover:cursor-pointer hover:scale-[1.02] transition-all' />
            <img src={image10} alt="" className='w-60 hover:cursor-pointer hover:scale-[1.02] transition-all' />
            <img src={image11} alt="" className='w-60 hover:cursor-pointer hover:scale-[1.02] transition-all' />
            <img src={image11} alt="" className='w-60 hover:cursor-pointer hover:scale-[1.02] transition-all' />
        </div>
      </div>
    </div>
  )
}

export default ExclusiveFood
