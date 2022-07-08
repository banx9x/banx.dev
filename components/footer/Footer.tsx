const Footer = () => {
  return (
    <div className='mt-24 pb-24 text-rose-300 flex items-center space-x-2 justify-center'>
      <span>Made with</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path
          fillRule='evenodd'
          d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
        />
      </svg>

      <span>by Ba Nguyễn</span>
    </div>
  );
};

export default Footer;
