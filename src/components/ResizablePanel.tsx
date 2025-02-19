import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout: number[] | undefined;
}

const ResizablePanel = ({ defaultLayout = [33, 67] }: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout}>
      <Panel defaultSize={defaultLayout[0]}>left</Panel>
      <PanelResizeHandle className="bg-red-500 w-2" />
      <Panel defaultSize={defaultLayout[1]}>right</Panel>
    </PanelGroup>
  );
};

export default ResizablePanel;
