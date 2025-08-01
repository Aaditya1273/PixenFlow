import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { VscSparkleFilled } from "react-icons/vsc";
import { FaLock } from "react-icons/fa6";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from '../../components/code/CodeExample';
import PropTable from "../../components/common/Preview/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import SpotlightCard from "../../content/Components/SpotlightCard/SpotlightCard";
import { spotlightCard } from '../../constants/code/Components/spotlightCardCode';

const SpotlightCardDemo = () => {
  const propData = [
    {
      name: 'spotlightColor',
      type: 'string',
      default: 'rgba(255, 255, 255, 0.25)',
      description: 'Controls the color of the radial gradient used for the spotlight effect.',
    },
    {
      name: 'className',
      type: 'string',
      default: '',
      description: 'Allows adding custom classes to the component.',
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" py={10} bg="#333333">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 165, 0, 0.25)">
            <Flex h={'100%'} direction="column" alignItems='flex-start' justifyContent="center">
              <Icon mb={3} boxSize={12} as={VscSparkleFilled} color="#FFA500" />
              <Text fontWeight={600} fontSize={'1.4rem'} letterSpacing={'-.5px'} color="#FFA500">Boost Your Experience</Text>
              <Text color='rgba(255, 165, 0, 0.7)' fontSize={'14px'} mt={1} mb={8} >Get exclusive benefits, features & 24/7 support as a permanent club member.</Text>
            </Flex>
          </SpotlightCard>
        </Box>

        <h2 className="demo-title-extra" style={{ color: '#FFA500' }}>Custom Color</h2>
        <Box position="relative" className="demo-container" py={10} bg="#333333">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="orange">
            <Flex h={'100%'} direction="column" alignItems='flex-start' justifyContent="center">
              <Icon mb={3} boxSize={8} as={FaLock} color="#FFA500" />
              <Text fontWeight={600} fontSize={'1.4rem'} letterSpacing={'-.5px'} color="#FFA500">Enhanced Security</Text>
              <Text color='rgba(255, 165, 0, 0.7)' fontSize={'14px'} mt={1} mb={8} >Our state of the art software offers peace of mind through strict security measures.</Text>
            </Flex>
          </SpotlightCard>
        </Box>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={spotlightCard} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...spotlightCard} />
      </CliTab>
    </TabbedLayout>
  );
};

export default SpotlightCardDemo;
