import Link from 'next/link';
import Image from 'next/image';
import cn from 'clsx';

import { Box } from '@chakra-ui/react';

interface AvatarProps {
  size: 'sm' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ size }) => {
  const avatarSize = size === 'sm' ? '32px' : '64px';

  return (
    <Link href='/'>
      <Box
        borderRadius='full'
        p='1'
        bgGradient='linear(to-tl, purple.500, orange.500)'
        transition='all'
        cursor='pointer'
        className='avatar-box'>
        <Box
          w={avatarSize}
          h={avatarSize}
          borderRadius='full'
          position='relative'
          overflow='hidden'>
          <Image
            src='https://media.graphassets.com/aWrIjtZvRXly1Sv7IkR4'
            layout='fill'
          />
        </Box>
      </Box>
    </Link>
  );
};

export default Avatar;
