import { useDispatch, useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";
import IconsSidebar from "./components/IconsSidebar";
import { useState } from "react";
import SearchModal from "./components/SearchModal";
import { openFileAndScrollToLine } from "./app/features/fileTreeSlice";
import { IFile } from "./interfaces";

function App() {
  const dispatch = useDispatch();
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
    // Find the file in the file tree
    const findFile = (node: IFile): IFile | null => {
      if (node.name === file && !node.isFolder) {
        return node;
      }
      if (node.isFolder && node.children) {
        for (const child of node.children) {
          const result = findFile(child);
          if (result) return result;
        }
      }
      return null;
    };

    const fileToOpen = findFile(fileTree);
    if (fileToOpen) {
      // Dispatch the action to open the file and scroll to the line
      dispatch(openFileAndScrollToLine({ file: fileToOpen, line }));
    }
    // Close the modal
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
