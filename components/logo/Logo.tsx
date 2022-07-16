import { HStack, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import Avatar from 'components/avatar';

const Logo = () => {
  const color = useColorModeValue('blackAlpha.600', 'whiteAlpha.600');

  return (
    <HStack alignItems='center' spacing={2}>
      <Avatar size='lg' />

      <VStack alignItems='flex-start' spacing={0}>
        <Text
          bgGradient='linear(to-tl, purple.500, orange.500)'
          bgClip='text'
          fontSize='xl'
          fontWeight='semibold'>
          Ba Nguyễn
        </Text>

        <Text color={color}>Developer</Text>
      </VStack>
    </HStack>
  );
};

export default Logo;
