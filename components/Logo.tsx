import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='object-cover rounded-full'
        height={50}
        width={50}
        src='https://links.papareact.com/1m8'
        alt='logo'
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
