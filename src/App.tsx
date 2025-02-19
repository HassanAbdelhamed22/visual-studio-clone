import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="">
      <div className="flex min-h-screen">
        <div className="w-64 border-r p-2 border-[#ffffff1f]">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <ResizablePanel />
        {/* <OpenedFilesBar /> */}
      </div>
    </div>
  );
}

export default App;
