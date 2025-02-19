interface IProps {
  src: string;
  className?: string;
}

const IconImg = ({ src, className = "w-5 h-5" }: IProps) => {
  return <img src={src} alt="" className={className} />;
};

export default IconImg;
