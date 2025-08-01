import { useState } from "react";
import {
  CodeTab,
  PreviewTab,
  CliTab,
  TabbedLayout
} from "../../components/common/TabbedLayout";

import {
  Flex,
  Text,
  Input
} from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/Preview/PropTable";
import Dependencies from "../../components/code/Dependencies";
import Customize from "../../components/common/Preview/Customize";
import PreviewSlider from "../../components/common/Preview/PreviewSlider";
import useForceRerender from "../../hooks/useForceRerender";

import PixelTransition from "../../content/Animations/PixelTransition/PixelTransition";
import { pixelTransition } from '../../constants/code/Animations/pixelTransitionCode';

const propData = [
  {
    name: "firstContent",
    type: "ReactNode | string",
    default: "—",
    description: "Content to show by default (e.g., an <img> or text)."
  },
  {
    name: "secondContent",
    type: "ReactNode | string",
    default: "—",
    description: "Content revealed upon hover or click."
  },
  {
    name: "gridSize",
    type: "number",
    default: "7",
    description: "Number of rows/columns in the pixel grid."
  },
  {
    name: "pixelColor",
    type: "string",
    default: "currentColor",
    description: "Background color used for each pixel block."
  },
  {
    name: "animationStepDuration",
    type: "number",
    default: "0.3",
    description: "Length of the pixel reveal/hide in seconds."
  },
  {
    name: "aspectRatio",
    type: "string",
    default: `"100%"`,
    description: "Sets the 'padding-top' (or aspect-ratio) for the container."
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Optional additional class names for styling."
  },
  {
    name: "style",
    type: "object",
    default: "{}",
    description: "Optional inline styles for the container."
  }
];

const PixelTransitionDemo = () => {
  const [text, setText] = useState("Pixel perfect magic!");
  const [gridSize, setGridSize] = useState(8);
  const [pixelColor, setPixelColor] = useState("#FFA500");
  const [animationStepDuration, setAnimationStepDuration] = useState(0.4);
  const [key, forceRerender] = useForceRerender();

  return (
    <TabbedLayout>
      <PreviewTab>
        <Flex direction="column" position="relative" className="demo-container" bg="#333333" minH={400} maxH={400} overflow="hidden">
          <PixelTransition
            key={key}
            firstContent={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt="Default"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#000"
                }}
              >
                <p style={{ fontWeight: 900, fontSize: "3rem", color: "#FFA500" }}>Meow!</p>
              </div>
            }
            gridSize={gridSize}
            pixelColor={pixelColor}
            animationStepDuration={animationStepDuration}
            className="custom-pixel-card"
          />
          <Text mt={2} color="#FFA500" opacity={0.7}>Psst, hover the card!</Text>
        </Flex>

        <Customize>
          <PreviewSlider
            title="Grid Size"
            min={2}
            max={50}
            step={1}
            value={gridSize}
            onChange={(val) => {
              setGridSize(val);
              forceRerender();
            }}
            width={200}
          />

          <PreviewSlider
            title="Animation Duration"
            min={0.1}
            max={2}
            step={0.1}
            value={animationStepDuration}
            valueUnit="s"
            onChange={(val) => {
              setAnimationStepDuration(val);
              forceRerender();
            }}
            width={200}
          />

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm" color="#FFA500">Pixel Color</Text>
            <Input
              type="color"
              value={pixelColor}
              onChange={(e) => {
                setPixelColor(e.target.value);
                forceRerender();
              }}
              width="60px"
              p={0}
            />
          </Flex>
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={["gsap"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={pixelTransition} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...pixelTransition} />
      </CliTab>
    </TabbedLayout>
  );
};

export default PixelTransitionDemo;
