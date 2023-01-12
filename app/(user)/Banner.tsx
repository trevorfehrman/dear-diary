import Separator from './Separator';

function Banner() {
  return (
    <header>
      <div className='flex items-center justify-center text-center mt-5'>
        <div>
          <h1 className='text-7xl font-serif mb-3'>Dear Diary:</h1>
          <p className='mt-5 md:mt-2 text-gray-400 uppercase font-bold'>
            A sometimes daily record of what goes in my brain and mouth.
          </p>
        </div>
      </div>
      <Separator className=' fill-gray-400 h-32 mx-auto mb-12' />
    </header>
  );
}

export default Banner;
