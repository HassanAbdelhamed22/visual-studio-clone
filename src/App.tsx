import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="my-7">
      <RecursiveComponent fileTree={fileTree} />
    </div>
  );
}

export default App;
