import Avatar from 'components/avatar';
import Nav from 'components/nav';

const Navbar = () => {
  return (
    <div className='h-[50px] mt-4'>
      <div className='container fixed top-4 left-0 right-0 z-10'>
        <div className='flex transition-all duration-300 justify-between bg-dark [@supports(backdrop-filter:blur(0px))]:bg-zinc-100/10 backdrop-blur-3xl py-2 px-4 rounded-lg'>
          <Avatar size='small' />

          <button></button>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
