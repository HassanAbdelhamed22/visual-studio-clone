import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
}

const RenderFileIcon = ({ fileName }: IProps) => {
  const extension = fileName.split(".").pop();

  if (extension === "tsx") return <IconImg src="/icons/react_ts.svg" />;
  if (extension === "js") return <IconImg src="/icons/javascript.svg" />;
  if (extension === "json") return <IconImg src="/icons/json.svg" />;
  if (extension === "jsx") return <IconImg src="/icons/react.svg" />;
  if (extension === "svg") return <IconImg src="/icons/svg.svg" />;
  if (extension === "html") return <IconImg src="/icons/html.svg" />;
  return <FileIcon />;
};

export default RenderFileIcon;
