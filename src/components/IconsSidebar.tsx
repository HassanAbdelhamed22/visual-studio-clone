import ColorTheme from "./SVG/ColorTheme";
import FileIcon from "./SVG/File";
import Search from "./SVG/Search";

interface IProps {}

const IconsSidebar = ({}: IProps) => {
  return (
    <div className="bg-[#1e1e1e] h-full shadow-md flex justify-center">
      <div className="h-full py-2 flex flex-col justify-between">
        <div className="p-1 flex flex-col gap-4">
          <FileIcon height={30} width={30} />
          <Search />
        </div>
        <ColorTheme />
      </div>
    </div>
  );
};

export default IconsSidebar;
