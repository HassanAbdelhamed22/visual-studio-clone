import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
}

const FileComponents = ({ fileName }: IProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">
        <FileIcon />
      </span>
      <span>{fileName}</span>
    </div>
  );
};

export default FileComponents;
