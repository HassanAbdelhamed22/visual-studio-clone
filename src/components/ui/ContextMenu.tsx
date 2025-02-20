import { useRef } from "react";

interface IProps {
  positions: { x: number; y: number };
}

const ContextMenu = ({ positions }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black w-fit px-7 py-2 rounded-md"
        style={{ position: "absolute", left: positions.x, top: positions.y }}
      >
        <li>Close</li>
        <li>Close all</li>
      </ul>
    </div>
  );
};

export default ContextMenu;
