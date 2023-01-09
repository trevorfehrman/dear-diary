import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='flex items-center text-[#F7AB0A]'>
          <ArrowUturnLeftIcon className='h-6 w-6 mr-2 text-[#F7AB0A]' />
          Go to the website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
