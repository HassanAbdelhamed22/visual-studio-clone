import FileComponent from "./components/FileComponent";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="m-7">
      {fileTree.children?.map((file, index) => (
        <FileComponent fileName={file.name} key={index} />
      ))}
    </div>
  );
}

export default App;
