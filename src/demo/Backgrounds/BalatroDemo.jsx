import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/Preview/PropTable";
import Dependencies from '../../components/code/Dependencies';
import Customize from "../../components/common/Preview/Customize";
import PreviewSlider from "../../components/common/Preview/PreviewSlider";
import PreviewSwitch from "../../components/common/Preview/PreviewSwitch";

import Balatro from "../../content/Backgrounds/Balatro/Balatro";
import { balatro } from "../../constants/code/Backgrounds/balatroCode";

const BalatroDemo = () => {
  const [hideimage, setHideImage] = useState(false);
  const [color1, setColor1] = useState("#FFA500");
  const [color2, setColor2] = useState("#FFC107");
  const [color3, setColor3] = useState("#1a1a1a");
  const [rotate, setRotate] = useState(false);
  const [mouseInteraction, setMouseInteraction] = useState(true);
  const [pixelFilter, setPixelFilter] = useState(745.0);

  const propData = [
    {
      name: "spinRotation",
      type: "number",
      default: "-2.0",
      description: "Base rotation amount affecting the shader effect.",
    },
    {
      name: "spinSpeed",
      type: "number",
      default: "7.0",
      description: "Speed of the spin animation.",
    },
    {
      name: "offset",
      type: "[number, number]",
      default: "[0.0, 0.0]",
      description: "Offset for the shader effect.",
    },
    {
      name: "color1",
      type: "string",
      default: "\"#DE443B\"",
      description: "Primary color in HEX format.",
    },
    {
      name: "color2",
      type: "string",
      default: "\"#006BB4\"",
      description: "Secondary color in HEX format.",
    },
    {
      name: "color3",
      type: "string",
      default: "\"#162325\"",
      description: "Tertiary color in HEX format.",
    },
    {
      name: "contrast",
      type: "number",
      default: "3.5",
      description: "Contrast value affecting color blending.",
    },
    {
      name: "lighting",
      type: "number",
      default: "0.4",
      description: "Lighting factor affecting brightness.",
    },
    {
      name: "spinAmount",
      type: "number",
      default: "0.25",
      description: "Amount of spin influence based on UV length.",
    },
    {
      name: "pixelFilter",
      type: "number",
      default: "745.0",
      description: "Pixel filter factor determining pixelation.",
    },
    {
      name: "spinEase",
      type: "number",
      default: "1.0",
      description: "Ease factor for spin.",
    },
    {
      name: "isRotate",
      type: "boolean",
      default: "false",
      description: "Determines if the shader rotates continuously.",
    },
    {
      name: "mouseInteraction",
      type: "boolean",
      default: "true",
      description: "Enables or disables mouse interaction for rotation.",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden" p={0} bg="#333333">
          <Balatro
            color1={color1}
            color2={color2}
            color3={color3}
            isRotate={rotate}
            mouseInteraction={mouseInteraction}
            pixelFilter={pixelFilter}
          />

          {!hideimage && (
            <Image pointerEvents='none' position='absolute' w={200} src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/balatro/e/ef/Joker.png" borderRadius='10px' />
          )}
        </Box>

        <Flex gap={4} align="center" mt={7} justifyContent='flex-end' position="absolute" right={0}>
          <Text fontSize="sm" style={{ color: '#FFA500' }}>Hide Image</Text>
          <PreviewSwitch
            isChecked={hideimage}
            onChange={(checked) => { setHideImage(checked); }}
          />
        </Flex>

        <Customize>
          <h2 className="demo-title-extra" style={{ color: '#FFA500' }}>Customize</h2>
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm" style={{ color: '#FFA500' }}>Colors</Text>
            <Input
              type="color"
              value={color1}
              onChange={(e) => { setColor1(e.target.value); }}
              width="50px"
            />

            <Input
              type="color"
              value={color3}
              onChange={(e) => { setColor3(e.target.value); }}
              width="50px"
            />

            <Input
              type="color"
              value={color2}
              onChange={(e) => { setColor2(e.target.value); }}
              width="50px"
            />
          </Flex>

          <PreviewSlider
            min={0}
            max={2000}
            step={10}
            title="Pixelation"
            value={pixelFilter}
            onChange={(val) => {
              setPixelFilter(val);
            }}
          />

          <PreviewSwitch
            title="Enable Mouse Interaction"
            isChecked={mouseInteraction}
            onChange={(checked) => { setMouseInteraction(checked); }}
          />

          <PreviewSwitch
            title="Rotate"
            isChecked={rotate}
            onChange={(checked) => { setRotate(checked); }}
          />
        </Customize>
        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={balatro} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...balatro} />
      </CliTab>
    </TabbedLayout >
  );
};

export default BalatroDemo;