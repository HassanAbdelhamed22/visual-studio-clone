import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";
import { RootState } from "../app/store";

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.tree);

  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter
        content={clickedFile.fileContent}
        scrollToLine={clickedFile.scrollToLine}
      />
    </>
  );
};

export default Preview;
