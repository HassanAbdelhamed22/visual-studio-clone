import { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "tsconfig.app.json",
              isFolder: false,
            },
            {
              name: "tsconfig.node.json",
              isFolder: false,
            },
          ],
        },
        {
          name: "react-dom",
          isFolder: false,
        },
      ],
    },
    {
      name: "index.tsx",
      isFolder: false,
    },
  ],
}