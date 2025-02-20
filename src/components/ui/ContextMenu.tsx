import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFiles } from "../../app/features/fileTreeSlice";
import { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: { x: number; y: number };
}

const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  const dispatch = useDispatch();
  const { openedFiles, tabIdToRemove } = useSelector(
    (state: RootState) => state.tree
  );
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  // ** Handlers
  const handelCloseAll = () => {
    setShowMenu(false);
    dispatch(setOpenedFiles([]));
  };

  const handelCloseTab = () => {
    setShowMenu(false);

    const filtered = openedFiles.filter((file) => file.id !== tabIdToRemove);
    dispatch(setOpenedFiles(filtered));
  };

  return (
    <div ref={menuRef}>
      <ul
        className="text-sm absolute z-50 bg-[#1e1e1e]/90 backdrop-blur-md text-white w-48 rounded-lg shadow-lg py-2 transition-transform duration-5 00 scale-150 opacity-0 animate-fadeIn"
        style={{ position: "absolute", left: positions.x, top: positions.y }}
      >
        <li
          className="px-4 py-2 hover:bg-[#2a2a2a] transition rounded-t-lg cursor-pointer"
          onClick={handelCloseTab}
        >
          Close
        </li>
        <li
          className="px-4 py-2 hover:bg-[#2a2a2a] transition rounded-t-lg cursor-pointer"
          onClick={handelCloseAll}
        >
          Close all
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
