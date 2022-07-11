import { useRouter } from 'next/router';
import Nav from 'components/nav';
import Avatar from 'components/avatar';
import { useIntersection } from 'lib/hooks';
import NavBar from 'components/navbar';

const Header = () => {
  const { asPath } = useRouter();
  const [visible, ref] = useIntersection<HTMLDivElement>();

  const isHomePage = asPath === '/';

  if (isHomePage) {
    return (
      <div className='pt-24 px-3' ref={ref}>
        <div className='flex space-x-4 items-center mb-8'>
          <Avatar src='/images/avatar.jpeg' size='large' />

          <div className='flex flex-col'>
            <div className='text-gradient text-xl font-semibold'>Ba Nguyễn</div>
            <div className='text-dim text-md'>Web Developer</div>
          </div>
        </div>

        <div className='text-white/80 mb-8'>
          Chào bạn đến với Blog của tôi, đây là nơi tôi chia sẻ những gì tôi
          đang học và đang làm, để giúp mọi người (và chính tôi) trở thành những
          lập trình viên tốt hơn 💪
        </div>

        <Nav />

        {!visible && <NavBar />}
      </div>
    );
  }

  return <NavBar />;
};

export default Header;
