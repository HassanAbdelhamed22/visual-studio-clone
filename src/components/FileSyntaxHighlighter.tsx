import { useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string | undefined;
  scrollToLine?: number | null;
}

const FileSyntaxHighlighter = ({ content, scrollToLine }: IProps) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current && scrollToLine) {
      lineRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [scrollToLine]);
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
        fontSize: "1.5rem",
      }}
      showLineNumbers
      wrapLines
      lineProps={(lineNumber) => {
        if (lineNumber === scrollToLine) {
          return { ref: lineRef, style: { backgroundColor: "#ffff00" } };
        }
        return {};
      }}
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
