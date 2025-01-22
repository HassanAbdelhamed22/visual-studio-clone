import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

interface IProps {}

const OpenedFilesBar = ({}: IProps) => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <div className="flex items-center">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab file={file} key={file.id} />
        ))}
      </div>
    </div>
  );
};

export default OpenedFilesBar;
