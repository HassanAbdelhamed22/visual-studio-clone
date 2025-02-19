import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="flex h-screen">
      <ResizablePanel
      showLeftPanel
        leftPanel={
          <div className="w-64 p-2">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={<OpenedFilesBar />}
      />
    </div>
  );
}

export default App;
