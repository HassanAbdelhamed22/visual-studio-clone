import { useState, useEffect } from "react";
import { fileTree } from "./../data/FileTree";
import { IFile } from "../interfaces";

interface IProps {
  onClose: () => void;
  onResultClick: (file: string, line: number) => void;
}

const SearchModal = ({ onClose, onResultClick }: IProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { file: string; line: number; text: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  // Debounce function
  const debounce = (func: Function, delay: number) => {
    let timeoutId: number;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = () => {
    setIsLoading(true);
    const newResults: { file: string; line: number; text: string }[] = [];

    const searchFiles = (node: IFile) => {
      if (node.isFolder && node.children) {
        node.children.forEach(searchFiles);
      } else if (!node.isFolder && node.content) {
        const lines = node.content.split("\n");
        lines.forEach((line, index) => {
          if (line.toLowerCase().includes(query.toLowerCase())) {
            newResults.push({
              file: node.name,
              line: index + 1,
              text: line.trim(),
            });
          }
        });
      }
    };

    searchFiles(fileTree);
    setResults(newResults);
    setIsLoading(false);
  };

  // Debounced search
  const debouncedSearch = debounce(handleSearch, 300);

  useEffect(() => {
    if (query) {
      debouncedSearch();
    } else {
      setResults([]);
    }
  }, [query]);

  // Close modal on Esc key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Highlight search term in text
  const highlightText = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="bg-yellow-200 dark:bg-yellow-600 text-black dark:text-white px-1 rounded">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-gray-200 p-4 rounded-md w-[600px] max-h-[90vh] overflow-y-auto shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Search in All Files</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4 bg-gray-100 dark:bg-[#2d2d2d] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 rounded-md"
          placeholder="Enter search term..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-200"></div>
          </div>
        ) : results.length > 0 ? (
          <ul className="mt-2">
            {results.map((res, index) => (
              <li
                key={index}
                className="border-b border-gray-300 dark:border-gray-600 py-2 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] cursor-pointer duration-300 px-2 rounded-md"
                onClick={() => onResultClick(res.file, res.line)}
              >
                <strong>{res.file}</strong> (Line {res.line}):{" "}
                {highlightText(res.text, query)}
              </li>
            ))}
          </ul>
        ) : query ? (
          <p className="text-gray-500 dark:text-gray-400">No results found.</p>
        ) : null}
        <button
          className="mt-4 px-4 py-2 rounded-lg bg-red-500 dark:bg-red-600 hover:bg-red-700 dark:hover:bg-red-500 duration-300 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
