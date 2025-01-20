import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();

  // ** File icons
  if (extension === "tsx") return <IconImg src="/icons/react_ts.svg" />;
  if (extension === "js") return <IconImg src="/icons/javascript.svg" />;
  if (extension === "json") return <IconImg src="/icons/json.svg" />;
  if (extension === "jsx") return <IconImg src="/icons/react.svg" />;
  if (extension === "svg") return <IconImg src="/icons/svg.svg" />;
  if (extension === "html") return <IconImg src="/icons/html.svg" />;
  if (extension === "ts") return <IconImg src="/icons/typescript.svg" />;
  if (extension === "gitignore") return <IconImg src="/icons/git.svg" />;
  if (extension === "md") return <IconImg src="/icons/readme.svg" />;

  // ** Folder icon
  if (extension === "node_modules")
    return isFolder && isOpen ? (
      <IconImg src="/icons/folder-node-open.svg" />
    ) : (
      <IconImg src="/icons/folder-node.svg" />
    );
  if (extension === "public")
    return isFolder && isOpen ? (
      <IconImg src="/icons/folder-public-open.svg" />
    ) : (
      <IconImg src="/icons/folder-public.svg" />
    );
  if (extension === "src")
    return isFolder && isOpen ? (
      <IconImg src="/icons/folder-src-open.svg" />
    ) : (
      <IconImg src="/icons/folder-src.svg" />
    );
  if (extension === "components")
    return isFolder && isOpen ? (
      <IconImg src="/icons/folder-components-open.svg" />
    ) : (
      <IconImg src="/icons/folder-components.svg" />
    );
  if (extension === "styles")
    return isFolder && isOpen ? (
      <IconImg src="/icons/folder-stylus-open.svg" />
    ) : (
      <IconImg src="/icons/folder-stylus.svg" />
    );
  if (extension === "utils")
    return isFolder && isOpen ? (
      <IconImg src="/icons/folder-utils-open.svg" />
    ) : (
      <IconImg src="/icons/folder-utils.svg" />
    );
  if (extension === "assets")
    return isFolder && isOpen ? (
      <IconImg src="/icons/folder-assets-open.svg" />
    ) : (
      <IconImg src="/icons/folder-assets.svg" />
    );

  if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;
  if (isFolder && isOpen)
    return <IconImg src="/icons/folder-default-open.svg" />;

  return <FileIcon />;
};

export default RenderFileIcon;
