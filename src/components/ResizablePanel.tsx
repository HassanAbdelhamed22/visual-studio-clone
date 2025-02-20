import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[];
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel?: boolean;
}

const ResizablePanel = ({
  defaultLayout = [20, 80],
  leftPanel,
  rightPanel,
  showLeftPanel = true,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="condition"
    >
      <Panel
        defaultSize={showLeftPanel ? defaultLayout[0] : 0}
        collapsedSize={0}
        collapsible
      >
        {showLeftPanel && leftPanel}
      </Panel>
      {showLeftPanel && (
        <PanelResizeHandle className="border-r-2 border-[#a5a5a5] dark:border-[#ffffff1f]" />
      )}
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};

export default ResizablePanel;
