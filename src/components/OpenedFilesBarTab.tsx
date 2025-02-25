import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFile,
  setOpenedFiles,
  setTabIdToRemove,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    openedFiles,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);

  // ** Handlers
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFile({ fileName: name, fileContent: content, activeTabId: id })
    );
  };

  const onRemove = (id: string) => {
    const filtered = openedFiles.filter((file) => file.id !== id);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFiles([]));
      dispatch(
        setClickedFile({
          activeTabId: null,
          fileName: "",
          fileContent: "",
        })
      );
      return;
    }
    dispatch(
      setClickedFile({
        activeTabId: lastTab.id,
        fileName: lastTab.name,
        fileContent: lastTab.content,
      })
    );
    dispatch(setOpenedFiles(filtered));
  };

  return (
    <div
      className={`flex items-center p-2 border-t-[3px] ${
        activeTabId === file.id
          ? "border-[#bd34bd] dark:border-[#cf6ccf]"
          : "border-transparent"
      }`}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabIdToRemove(file.id));
      }}
    >
      <RenderFileIcon fileName={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-1 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#e4e4e485] dark:hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon className="text-gray-800 dark:text-gray-300" />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
