interface IProps {
  fileName: string;
}

const RenderFileIcon = ({ fileName }: IProps) => {
  const extension = fileName.split(".").pop();
  return <div>{extension}</div>;
};

export default RenderFileIcon;
