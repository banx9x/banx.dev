import React from 'react';

const Image: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ src, alt, width, height, ...props }) => {
  return <img src={src} alt={alt} {...props} className='block mx-auto' />;
};

export default Image;
