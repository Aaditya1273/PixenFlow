import { Button, Icon } from '@chakra-ui/react';
import { FiRefreshCw } from 'react-icons/fi';

const RefreshButton = ({ onClick }) => {
  return (
    <Button
      transition="background-color 0.3s ease"
      _active={{ backgroundColor: '#FF6B00' }}
      _hover={{ backgroundColor: '#1A1A1A' }}
      backgroundColor='#000000'
      position="absolute"
      onClick={onClick}
      border="1px solid #FF6B00"
      zIndex={2}
      color="white"
      rounded="xl"
      right={3}
      size="md"
      top={3}
      p={2}
    >
      <Icon as={FiRefreshCw} boxSize={4} />
    </Button>
  );
}

export default RefreshButton;