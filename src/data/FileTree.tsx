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
          name: "react",
          isFolder: true,
          children: [
            {
              name: "index.js",
              isFolder: false,
            },
          ],
        },
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "index.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "favicon.ico",
          isFolder: false,
        },
        {
          name: "logo192.png",
          isFolder: false,
        },
        {
          name: "logo512.png",
          isFolder: false,
        },
        {
          name: "manifest.json",
          isFolder: false,
        },
        {
          name: "robots.txt",
          isFolder: false,
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "Header.tsx",
              isFolder: false,
            },
            {
              name: "Footer.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "styles",
          isFolder: true,
          children: [
            {
              name: "App.css",
              isFolder: false,
            },
            {
              name: "index.css",
              isFolder: false,
            },
          ],
        },
        {
          name: "assets",
          isFolder: true,
          children: [
            {
              name: "logo.svg",
              isFolder: false,
            },
          ],
        },
        {
          name: "utils",
          isFolder: true,
          children: [
            {
              name: "api.ts",
              isFolder: false,
            },
            {
              name: "helpers.ts",
              isFolder: false,
            },
          ],
        },
        {
          name: "App.tsx",
          isFolder: false,
        },
        {
          name: "index.tsx",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
    {
      name: "tsconfig.json",
      isFolder: false,
    },
    {
      name: "vite.config.ts",
      isFolder: false,
    },
    {
      name: ".gitignore",
      isFolder: false,
    },
    {
      name: "README.md",
      isFolder: false,
    },
  ],
};
