import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const pre: React.FC<
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
    <pre {...props} className={clsx(className, 'relative')} ref={preRef}>
      <button
        className='absolute top-2 right-2 bg-white/10 p-2 backdrop-blur-sm'
        onClick={handleClick}>
        {copyIcon}
      </button>

      {children}
    </pre>
  );
};

const code: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, ...props }) => {
  return <code {...props}>{children}</code>;
};

const h2: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => {
  return (
    <h2
      {...props}
      className={clsx(className, 'px-2 my-6 text-2xl font-medium')}>
      {children}
    </h2>
  );
};

const h3: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => {
  return (
    <h2 {...props} className={clsx(className, 'px-2 my-4 text-xl font-medium')}>
      {children}
    </h2>
  );
};

const h4: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = ({ children, className, ...props }) => {
  return (
    <h2 {...props} className={clsx(className, 'px-2 my-4 text-lg font-medium')}>
      {children}
    </h2>
  );
};

const p: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = ({ children, className, ...props }) => {
  return (
    <p {...props} className={clsx(className, 'px-2 my-2 relative text-lg')}>
      {children}
    </p>
  );
};

const hr: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>
> = ({ className, ...props }) => {
  return (
    <hr {...props} className={clsx(className, 'w-1/2 mx-auto border-b-0')} />
  );
};

const img: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ className, src, alt, ...props }) => {
  return (
    <Image
      src={src!}
      alt={alt}
      width={752}
      height={752}
      layout='responsive'
      placeholder='blur'
      blurDataURL={src}
    />
  );
};

const a: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, href, ...props }) => {
  if (href?.startsWith('http'))
    return (
      <a {...props} href={href} target='_blank' rel='noreferrer'>
        <span className='font-semibold bg-clip-text bg-gradient-to-tl from-orange-400 to-purple-400 text-transparent'>
          {children}
        </span>
      </a>
    );
  else
    return (
      <Link href={href!}>
        <a {...props}>
          <span className='font-semibold bg-clip-text bg-gradient-to-tl from-orange-400 to-purple-400 text-transparent'>
            {children}
          </span>
        </a>
      </Link>
    );
};

const ul: React.FC<
  React.DetailedHTMLProps<
    React.OlHTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
> = ({ children, className, ...props }) => {
  return (
    <ul
      {...props}
      className={clsx(className, 'list-inside list-disc px-6 mt-0 mb-4')}>
      {children}
    </ul>
  );
};

const ol: React.FC<
  React.DetailedHTMLProps<
    React.OlHTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  >
> = ({ children, className, ...props }) => {
  return (
    <ol
      {...props}
      className={clsx(className, 'list-inside list-decimal px-6 mt-0 mb-4')}>
      {children}
    </ol>
  );
};

const li: React.FC<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
> = ({ children, className, ...props }) => {
  return (
    <li {...props} className={clsx(className, 'text-lg')}>
      {children}
    </li>
  );
};

const components = {
  h2,
  h3,
  h4,
  p,
  hr,
  img,
  a,
  pre,
  code,
  ul,
  ol,
  li,
};

export default components;
