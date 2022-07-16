import Avatar from 'components/avatar';
import { useIntersection } from 'lib/hooks';
import Nav from 'components/nav';
import cn from 'clsx';

const Navbar = () => {
  const [visible, ref] = useIntersection<HTMLDivElement>();

  return (
    <div ref={ref} className='h-[50px] mt-4'>
      <div
        className={cn(!visible && 'container fixed top-4 left-0 right-0 z-10')}>
        <div className='flex transition-all duration-300 justify-between bg-dark [@supports(backdrop-filter:blur(0px))]:bg-zinc-100/5 backdrop-blur-3xl p-2 rounded-lg'>
          {!visible && <Avatar size='sm' />}

          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
