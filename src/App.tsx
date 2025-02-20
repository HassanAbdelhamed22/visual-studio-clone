import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";
import IconsSidebar from "./components/IconsSidebar";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div className="flex h-screen">
      <div className="w-14">
        <IconsSidebar />
      </div>
      <ResizablePanel
        showLeftPanel
        leftPanel={
          <div className="w-64 p-2">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={openedFiles.length > 0 ? <Preview /> : <WelcomeTab />}
      />
    </div>
  );
}

export default App;
