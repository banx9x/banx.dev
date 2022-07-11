import Avatar from 'components/avatar';
import Nav from '../nav/Nav';

const Navbar = () => {
  return (
    <div className='fixed top-8 left-0 right-0 z-10'>
      <div className='container'>
        <div className='flex justify-between bg-dark [@supports(backdrop-filter:blur(0px))]:bg-zinc-100/5 backdrop-blur-3xl p-2 rounded-lg'>
          <Avatar size='small' />

          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
