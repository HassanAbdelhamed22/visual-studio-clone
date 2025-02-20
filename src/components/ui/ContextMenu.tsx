import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setOpenedFiles } from "../../app/features/fileTreeSlice";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: { x: number; y: number };
}

const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  const dispatch = useDispatch();
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

  return (
    <div ref={menuRef}>
      <ul
        className="text-sm absolute z-50 bg-[#1e1e1e]/90 backdrop-blur-md text-white w-48 rounded-lg shadow-lg py-2 transition-transform duration-5 00 scale-150 opacity-0 animate-fadeIn"
        style={{ position: "absolute", left: positions.x, top: positions.y }}
      >
        <li className="px-4 py-2 hover:bg-[#2a2a2a] transition rounded-t-lg cursor-pointer">
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
