function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl'>Dear Diary:</h1>
        <h2 className='mt-5 md:mt-0'>
          Today I resisted the urge to watch{' '}
          <span className='underline decoration-4 decoration-[#F7AB0A]'>
            The Last Temptation of Christ
          </span>{' '}
          again.
        </h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        A sometimes daily record of the things I put in my brain and also stomach in an attempt to
        force myself to experience new art and recipes while I am still alive enough to do so.
      </p>
    </div>
  );
}

export default Banner;
