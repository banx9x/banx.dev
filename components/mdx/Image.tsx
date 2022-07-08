import React from 'react';
import NextImage from 'next/image';

const Image: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ src, alt, width, height, ...props }) => {
  return (
    <NextImage
      {...props}
      src={src!}
      alt={alt}
      width={width}
      height={height}
      blurDataURL={src}
      layout='responsive'
      placeholder='blur'
    />
  );
};

export default Image;
