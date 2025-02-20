import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";
import IconsSidebar from "./components/IconsSidebar";
import { useState } from "react";
import SearchModal from "./components/SearchModal";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleLeftPanel = () => {
    setShowLeftPanel((prev) => !prev);
  };

  const toggleSearchModal = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleResultClick = (file: string, line: number) => {
    // Logic to open the file and scroll to the line
    console.log(`Opening file: ${file}, scrolling to line: ${line}`);
    // Close the modal after opening the file
    setSearchOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div className="w-14">
        <IconsSidebar
          toggleLeftPanel={toggleLeftPanel}
          toggleSearchModal={toggleSearchModal}
        />
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
      {searchOpen && (
        <SearchModal
          onClose={toggleSearchModal}
          onResultClick={handleResultClick}
        />
      )}
    </div>
  );
}

export default App;
