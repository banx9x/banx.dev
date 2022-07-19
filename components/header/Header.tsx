import cn from 'clsx';
import Avatar from 'components/avatar';
import { useUI } from 'components/context';
import Nav from 'components/nav';
import { useIntersection } from 'lib/hooks';

const Header = () => {
  const { state, dispatch } = useUI();

  const ref = useIntersection<HTMLDivElement>({
    onChange: (visible) => {
      dispatch({ type: visible ? 'hideNavbar' : 'showNavbar' });
    },
  });

  return (
    <div className={cn('pt-20 px-3', state.show ? 'opacity-0' : 'opacity-100')}>
      <div className='flex space-x-4 items-center mb-8'>
        <Avatar size='large' />

        <div className='flex flex-col'>
          <div className='text-gradient text-xl font-semibold'>Ba Nguyễn</div>
          <div className='text-dim text-md'>Developer</div>
        </div>
      </div>

      <div ref={ref} className='text-light mb-8'>
        Chào bạn đến với Blog của tôi, đây là nơi tôi chia sẻ những gì tôi đang
        học và đang làm, để giúp mọi người (và chính tôi) trở thành những lập
        trình viên tốt hơn 💪
      </div>

      <Nav />
    </div>
  );
};

export default Header;
