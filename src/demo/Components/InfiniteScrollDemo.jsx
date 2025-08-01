import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Separator } from "@chakra-ui/react";

import Customize from "../../components/common/Preview/Customize";
import PreviewSwitch from "../../components/common/Preview/PreviewSwitch";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/Preview/PropTable";
import Dependencies from "../../components/code/Dependencies";
import PreviewSelect from "../../components/common/Preview/PreviewSelect";
import Ballpit from "../../content/Backgrounds/Ballpit/Ballpit";

import InfiniteScroll from "../../content/Components/InfiniteScroll/InfiniteScroll";
import { infiniteScroll } from "../../constants/code/Components/infiniteScrollCode";

const InfiniteScrollDemo = () => {
  const propData = [
    {
      name: "width",
      type: "string",
      default: '"30rem"',
      description: "Width of the outer wrapper.",
    },
    {
      name: "maxHeight",
      type: "string",
      default: '"100%"',
      description: "Maximum height of the outer wrapper.",
    },
    {
      name: "items",
      type: "array",
      default: "[]",
      description:
        "Array of items with custom content. Each item should have a 'content' property containing a string or React node.",
    },
    {
      name: "itemMinHeight",
      type: "number",
      default: "150",
      description: "Fixed height for each item in pixels.",
    },
    {
      name: "isTilted",
      type: "boolean",
      default: "false",
      description: "Whether the container has a skewed perspective.",
    },
    {
      name: "tiltDirection",
      type: '"left" | "right"',
      default: '"left"',
      description: "Direction of the tilt if 'isTilted' is true.",
    },
    {
      name: "autoplay",
      type: "boolean",
      default: "false",
      description: "Whether the scroll should autoplay.",
    },
    {
      name: "autoplaySpeed",
      type: "number",
      default: "20",
      description: "Speed of autoplay in pixels/frame.",
    },
    {
      name: "autoplayDirection",
      type: '"up" | "down"',
      default: '"down"',
      description: "Direction of autoplay scrolling.",
    },
    {
      name: "pauseOnHover",
      type: "boolean",
      default: "false",
      description: "Pause autoplay when hovering over the component.",
    },
    {
      name: "negativeMargin",
      type: "string",
      default: '"-0.5em"',
      description: "Negative margin to reduce spacing between items.",
    },
  ];

  const [isTilted, setIsTilted] = useState(true);
  const [tiltDirection, setTiltDirection] = useState("left");
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayDirection, setAutoplayDirection] = useState("up");
  const [pauseOnHover, setPauseOnHover] = useState(true);

  const items = [
    {
      content: (
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            border: "1px solid #FFA500",
            overflow: "hidden",
            position: 'realtive'
          }}
        >
          <p style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: -1, fontSize: '3rem', fontWeight: 900, color: '#FFA500' }}>Balls!</p>
          <Ballpit count={50} followCursor={false} />
        </div>
      ),
    },
    { content: <p style={{ color: '#FFA500' }}>Paragraph Item 2</p> },
    { content: <p style={{ color: '#FFA500' }}>Text Item 3</p> },
    { content: <p style={{ color: '#FFA500' }}>Paragraph Item 4</p> },
    { content: <p style={{ color: '#FFA500' }}>Text Item 5</p> },
    { content: <p style={{ color: '#FFA500' }}>Paragraph Item 6</p> },
    { content: <p style={{ color: '#FFA500' }}>Text Item 7</p> },
    { content: <p style={{ color: '#FFA500' }}>Paragraph Item 8</p> },
    { content: <p style={{ color: '#FFA500' }}>Text Item 9</p> },
    { content: <p style={{ color: '#FFA500' }}>Paragraph Item 10</p> },
    { content: <p style={{ color: '#FFA500' }}>Text Item 11</p> },
    { content: <p style={{ color: '#FFA500' }}>Paragraph Item 12</p> },
    { content: <p style={{ color: '#FFA500' }}>Text Item 13</p> },
    { content: <p style={{ color: '#FFA500' }}>Paragraph Item 14</p> },
  ];

  const autoplayOptions = [{ value: "up", label: "Up" }, { value: "down", label: "Down" }];
  const tiltOptions = [{ value: "left", label: "Left" }, { value: "right", label: "Right" }];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          className="demo-container"
          h={500}
          p={0}
          overflow="hidden"
          display="flex"
          bg="#333333"
          justifyContent="center"
          alignItems="center"
        >
          <InfiniteScroll
            items={items}
            isTilted={isTilted}
            tiltDirection={tiltDirection}
            autoplay={autoplay}
            autoplaySpeed={1}
            autoplayDirection={autoplayDirection}
            pauseOnHover={pauseOnHover}
          />
        </Box>

        <Customize>
          <h2 className="demo-title-extra" style={{ color: '#FFA500' }}>Customize</h2>
          <PreviewSwitch isChecked={isTilted} title="Tilt" onChange={() => setIsTilted(!isTilted)} />

          {isTilted && (
            <PreviewSelect
              title="Tilt Direction"
              options={tiltOptions}
              value={tiltDirection}
              name="tiltDirection"
              width={150}
              onChange={(val) => {
                setTiltDirection(val);
              }}
            />
          )}

          <Separator my={4} borderColor="#FFA500" />

          <PreviewSwitch isChecked={autoplay} title="Autoplay" onChange={() => setAutoplay(!autoplay)} />

          {autoplay && (
            <>
              <PreviewSelect
                title="Autoplay Direction"
                options={autoplayOptions}
                value={autoplayDirection}
                name="autoplayDirection"
                width={150}
                onChange={(val) => {
                  setAutoplayDirection(val);
                }}
              />

              <PreviewSwitch
                title="Pause on Hover"
                isChecked={pauseOnHover}
                onChange={(checked) => setPauseOnHover(checked)}
              />
            </>
          )}
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={["gsap"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={infiniteScroll} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...infiniteScroll} />
      </CliTab>
    </TabbedLayout>
  );
};

export default InfiniteScrollDemo;
