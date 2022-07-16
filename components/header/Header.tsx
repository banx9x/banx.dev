import Logo from 'components/logo';
import { Box, Flex, Button, useColorMode } from '@chakra-ui/react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as='header' alignItems='center' justifyContent='space-between'>
      <Logo />

      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <BsSun /> : <BsMoonStars />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
