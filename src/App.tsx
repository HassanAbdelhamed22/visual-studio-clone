import FileComponent from "./components/FileComponent";

function App() {
  return (
    <div className="m-7">
      <FileComponent fileName="index.tsx" />
      <FileComponent fileName="index.html" />
    </div>
  );
}

export default App;
