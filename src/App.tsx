import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="">
      <div className="flex min-h-screen">
        <div className="w-64 border-r border-white">
          <RecursiveComponent fileTree={fileTree} />
        </div>
        <OpenedFilesBar />
      </div>
    </div>
  );
}

export default App;
