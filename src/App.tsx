import Preview from "./components/Preview";
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
        rightPanel={<Preview />}
      />
    </div>
  );
}

export default App;
