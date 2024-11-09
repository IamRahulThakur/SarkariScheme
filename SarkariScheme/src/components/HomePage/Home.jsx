import { ChevronsRight } from 'react-feather'

const Home = () => {
  return (
    <div className=' bg-gradient-to-b from-[#ffffff] to-[#c5dbc2] '>
      <div className=' flex  justify-center pt-12 '>
        <h1 className='font-bold text-2xl w-[30%]'>
          One Place To Find All Goverment Schemes Related to Every Category
        </h1>
      </div>
      <div className='flex justify-center gap-16 p-16 '>
        <div className='shadow-lg w-52 p-6 rounded-xl bg-[#d3e5d1] '>
          <img src="https://cdn.myscheme.in/images/icons/search.svg" alt="image" className='pl-8' />
          <p className='text-green-600 font-bold text-lg'>Find Scheme</p>
          <p className='font-semibold'>State , Category , Central</p>
        </div>
        <div className='pt-[4.5rem] '>
          <ChevronsRight size={55} />
        </div>
        <div className='shadow-lg w-52 p-6 rounded-xl bg-[#d3e5d1] '>
          <img src="https://cdn.myscheme.in/images/icons/check.svg" alt="image" className='pl-8' />
          <p className='text-green-600 font-bold text-lg'>Choose Scheme</p>
          <p className='font-semibold'>Choose Relevent Scheme</p>
        </div>
        <div className='pt-[4.5rem] '>
          <ChevronsRight size={55} />
        </div>
        <div className='shadow-lg w-52 p-6 rounded-xl bg-[#d3e5d1] '>
          <img src="https://cdn-icons-png.flaticon.com/128/2799/2799936.png" alt="image" className='pl-8 w-24' />
          <p className='text-green-600 font-bold text-lg'>Apply Online</p>
          <p className='font-semibold'>You will Be redirected to official Website to apply</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
