import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <div className='pt-16'>
      <div className='flex justify-between items-center mb-8'>
        <div className='flex space-x-4 items-center'>
          <div className='group bg-gradient-to-tl from-orange-600 to-purple-600 rounded-full p-1'>
            <div className='w-16 h-16 rounded-full'>
              <Link href='/'>
                <a>
                  <Image
                    src='/images/avatar.jpeg'
                    className='rounded-full'
                    width='100%'
                    height='100%'
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className=''>
            <div className='text-xl text-transparent font-bold bg-clip-text bg-gradient-to-tl from-orange-400 to-purple-400'>
              Ba Nguyễn
            </div>
            <div className='text-white/50'>Web Developer</div>
          </div>
        </div>

        <div className='group hover:bg-white/[3%] rounded-lg'>
          <a
            href='https://github.com/banx9x'
            target='_blank'
            rel='noreferrer'
            className='flex space-x-2 items-center pr-2 py-1 transition-all duration-300'>
            <div className='bg-gradient-to-tl from-orange-600 to-purple-600 rounded-md p-1 text-white/80 shadow-lg group-hover:shadow-purple-400/30 transition-all duration-300 group-hover:rounded-lg group-hover:scale-125'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-github group-hover:scale-110 transition duration-300'
                viewBox='0 0 16 16'>
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </div>

            <span className='text-white/80'>banx9x</span>
          </a>
        </div>
      </div>

      {router.asPath === '/' && (
        <div className='text-white/80 mb-8'>
          Chào bạn đến với Blog của tôi, đây là nơi tôi chia sẻ những hiểu biết
          của mình về công nghệ, những gì tôi đang học và đang làm, để giúp mọi
          người (và chính tôi) trở thành những lập trình viên tốt hơn 💪
        </div>
      )}
    </div>
  );
};

export default Header;
