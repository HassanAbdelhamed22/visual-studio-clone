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
        className="bg-white text-black w-fit px-7 py-2 rounded-md"
        style={{ position: "absolute", left: positions.x, top: positions.y }}
      >
        <li className="cursor-pointer">Close</li>
        <li className="cursor-pointer" onClick={handelCloseAll}>
          Close all
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
