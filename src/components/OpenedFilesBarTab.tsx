import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  return (
    <div className="flex items-center justify-center p-2">
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-1 py-1 px-2 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
