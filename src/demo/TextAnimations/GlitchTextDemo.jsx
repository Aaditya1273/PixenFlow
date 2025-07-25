import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import useForceRerender from "../../hooks/useForceRerender";
import PreviewSwitch from "../../components/common/Preview/PreviewSwitch";
import Customize from "../../components/common/Preview/Customize";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/Preview/PropTable";

import GlitchText from "../../content/TextAnimations/GlitchText/GlitchText";
import { glitchText } from "../../constants/code/TextAnimations/glitchTextCode";
import { useState } from "react";
import PreviewSlider from "../../components/common/Preview/PreviewSlider";

const GlitchTextDemo = () => {
  const [text, setText] = useState("Glitch in the matrix!");
  const [speed, setSpeed] = useState(1);
  const [enableShadows, setEnableShadows] = useState(true);
  const [enableOnHover, setEnableOnHover] = useState(false);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "children",
      type: "string",
      default: "",
      description: "The text content that will display the glitch effect."
    },
    {
      name: "speed",
      type: "number",
      default: "0.5",
      description: "Multiplier for the animation speed. Higher values slow down the glitch effect."
    },
    {
      name: "enableShadows",
      type: "boolean",
      default: "true",
      description: "Toggle the colored text shadows on the glitch pseudo-elements."
    },
    {
      name: "enableOnHover",
      type: "boolean",
      default: "false",
      description: "If true, the glitch animation is only activated on hover."
    },
    {
      name: "className",
      type: "string",
      default: "",
      description: "Additional custom classes to apply to the component."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" bg="#333333" h={500} overflow="hidden">
          <GlitchText
            key={key}
            speed={speed}
            enableShadows={enableShadows}
            enableOnHover={enableOnHover}
            color="#FFA500"
          >
            {enableOnHover ? "Hover Me" : "Glitch in the matrix!"}
          </GlitchText>
        </Box>

        <Customize>
          <PreviewSlider
            title="Refresh Delay"
            min={0.1}
            max={5}
            step={0.1}
            value={speed}
            onChange={(val) => {
              setSpeed(val);
              forceRerender();
            }}
          />

          <PreviewSwitch title="Glitch Colors" isChecked={enableShadows} onChange={(checked) => { setEnableShadows(checked); forceRerender() }} />
          <PreviewSwitch title="Glitch On Hover" isChecked={enableOnHover} onChange={(checked) => { setEnableOnHover(checked); forceRerender() }} />
        </Customize>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={glitchText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...glitchText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default GlitchTextDemo;