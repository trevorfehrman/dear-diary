import Image from 'next/image';
import Link from 'next/link';
import diary from 'public/diary.svg';
function Header() {
  return (
    <header className='py-10 px-1 flex items-center justify-between'>
      <Link href='/' className='flex items-center font-bold'>
        <Image src={diary} width={40} height={40} alt='logo' className='mr-4' />
        <span className=' font-serif text-5xl'>DD</span>
      </Link>
      <div className='flex flex-col justify-end text-end'>
        <p>FUN FACT!</p>
        <p className=' max-w-lg text-gray-400 italic'>
          Scientists estimate there may be as many as{' '}
          <span className='underline decoration-4 uppercase decoration-red-300'>
            200 billion trillion
          </span>{' '}
          Robert Altman movies in the{' '}
          <span className='underline decoration-4 uppercase decoration-red-300'>universe</span>.
        </p>
      </div>
    </header>
  );
}

export default Header;
