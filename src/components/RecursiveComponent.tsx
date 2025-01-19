import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";
import { IFile } from "../interfaces";
import FolderIcon from "./SVG/Folder";
import { useState } from "react";
import BottomArrowIcon from "./SVG/Bottom";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { name, isFolder, children, content },
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // ** Handlers
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isOpen ? <RightArrowIcon /> : <BottomArrowIcon />}
            <FolderIcon />
          </div>
        ) : (
          <span className="mr-2">
            <FileIcon />
          </span>
        )}
        <span>{name}</span>
      </div>

      {children?.map((file, index) => (
        <RecursiveComponent fileTree={file} key={index} />
      ))}
    </div>
  );
};

export default RecursiveComponent;
