import React, { useState, useRef } from 'react';
import style from './Pre.module.css';
import cn from 'clsx';

const Pre: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>
> = ({ children, className, ...props }) => {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleClick = () => {
    const content = preRef.current?.querySelector('code')!.textContent!;

    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  const copyIcon = !copied ? (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      viewBox='0 0 16 16'>
      <path d='M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z' />
      <path d='M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z' />
    </svg>
  ) : (
    <span className='text-xs flex items-center space-x-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'>
        <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
      </svg>
      <span>Copied</span>
    </span>
  );

  return (
    <pre {...props} className={style.pre} ref={preRef}>
      <button className={style['btn-copy']} onClick={handleClick}>
        {copyIcon}
      </button>

      {children}
    </pre>
  );
};

export default Pre;
