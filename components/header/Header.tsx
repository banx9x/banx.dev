import Avatar from 'components/avatar';

const Header = () => {
  return (
    <div className='pt-20 px-3'>
      <div className='flex space-x-4 items-center mb-8'>
        <Avatar size='large' />

        <div className='flex flex-col'>
          <div className='text-gradient text-xl font-semibold'>Ba Nguyễn</div>
          <div className='text-dim text-md'>Web Developer</div>
        </div>
      </div>

      <div className='text-white/80 mb-8'>
        Chào bạn đến với Blog của tôi, đây là nơi tôi chia sẻ những gì tôi đang
        học và đang làm, để giúp mọi người (và chính tôi) trở thành những lập
        trình viên tốt hơn 💪
      </div>
    </div>
  );
};

export default Header;
