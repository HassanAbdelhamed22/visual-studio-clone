import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";
import IconsSidebar from "./components/IconsSidebar";
import { useState } from "react";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [showLeftPanel, setShowLeftPanel] = useState(true);

  // Function to toggle sidebar visibility
  const toggleLeftPanel = () => {
    setShowLeftPanel((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <div className="w-14">
        <IconsSidebar toggleLeftPanel={toggleLeftPanel}/>
      </div>
      <ResizablePanel
        showLeftPanel={showLeftPanel}
        leftPanel={
          showLeftPanel ? (
            <div className="w-64 p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          ) : null
        }
        rightPanel={openedFiles.length > 0 ? <Preview /> : <WelcomeTab />}
      />
    </div>
  );
}

export default App;
