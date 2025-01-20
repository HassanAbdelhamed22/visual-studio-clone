import RightArrowIcon from "./SVG/Right";
import { IFile } from "../interfaces";
import FolderIcon from "./SVG/Folder";
import { useState } from "react";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { name, isFolder, children },
}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ** Handlers
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <FolderIcon />

            <span className="ml-2">{name}</span>
          </div>
        ) : (
          <div className="mr-2 ml-2 flex items-center">
            <RenderFileIcon fileName={name} />
            <span className="ml-2">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children?.map((file, index) => (
          <RecursiveComponent fileTree={file} key={index} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
