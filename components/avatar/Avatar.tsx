import Link from 'next/link';
import Image from 'next/image';
import cn from 'clsx';

interface AvatarProps {
  src: string;
  size: 'small' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ src, size }) => {
  const avatarSize = size === 'small' ? 'w-8 h-8' : 'w-16 h-16';

  return (
    <div className='group bg-gradient rounded-full p-1'>
      <div className='rounded-full ring-4 ring-black/30 group-hover:ring-black/0 transition-all duration-300'>
        <Link href='/'>
          <a
            className={cn(
              'block relative rounded-full overflow-hidden',
              avatarSize
            )}>
            <Image src='/images/avatar.jpeg' layout='fill' />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
