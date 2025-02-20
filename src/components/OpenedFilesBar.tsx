import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";

interface IProps {}

const OpenedFilesBar = ({}: IProps) => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  return (
    <div
      className="w-fit"
      onContextMenu={(e) => {
        e.preventDefault();
        setMenuPosition({ x: e.clientX, y: e.clientY });
        setShowMenu(true);
      }}
    >
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab file={file} key={file.id} />
        ))}
      </div>

      {showMenu && <ContextMenu positions={menuPosition} setShowMenu={setShowMenu} />}
    </div>
  );
};

export default OpenedFilesBar;
