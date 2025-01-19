import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";

interface IProps {
  fileName: string;
}

const FileComponent = ({ fileName }: IProps) => {
  return (
    <div className="flex items-center">
      <span>
        <RightArrowIcon />
      </span>
      <span className="mr-2">
        <FileIcon />
      </span>
      <span>{fileName}</span>
    </div>
  );
};

export default FileComponent;
