import { useDispatch } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile } from "../app/features/fileTreeSlice";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();

  // ** Handlers
  const onClick = () => {
    const { name, content } = file;
    dispatch(setClickedFile({ fileName: name, fileContent: content }));
  };

  return (
    <div
      className="flex items-center justify-center p-2 border-b-[1px] border-[#ffffff1f]"
      onClick={onClick}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-1 p-1  rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
