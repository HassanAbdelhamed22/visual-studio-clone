import { IFile } from "../interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "react",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "index.js",
              isFolder: false,
            },
          ],
        },
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "index.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "favicon.ico",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "logo192.png",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "logo512.png",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "manifest.json",
          isFolder: false,
        },
        {
          id: uuid(),
          name: "robots.txt",
          isFolder: false,
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "assets",
          isFolder: true,
          children: [],
        },
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.jsx",
              isFolder: false,
            },
            {
              id: uuid(),
              name: "Header.jsx",
              isFolder: false,
            },
            {
              id: uuid(),
              name: "Sidebar.jsx",
              isFolder: false,
            },
            {
              id: uuid(),
              name: "Footer.jsx",
              isFolder: false,
            },
          ],
        },
        {
          id: uuid(),
          name: "context",
          isFolder: true,
          children: [],
        },
        {
          id: uuid(),
          name: "hooks",
          isFolder: true,
          children: [],
        },
        {
          id: uuid(),
          name: "layouts",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "AdminLayout.jsx",
              isFolder: false,
            },
            {
              id: uuid(),
              name: "InstructorLayout.jsx",
              isFolder: false,
            },
            {
              id: uuid(),
              name: "StudentLayout.jsx",
              isFolder: false,
            },
          ],
        },
        {
          id: uuid(),
          name: "pages",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "admin",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "Dashboard.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Users.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Reports.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Settings.jsx",
                  isFolder: false,
                },
              ],
            },
            {
              id: uuid(),
              name: "instructor",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "Dashboard.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Courses.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Students.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Profile.jsx",
                  isFolder: false,
                },
              ],
            },
            {
              id: uuid(),
              name: "student",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "Dashboard.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Courses.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Quizzes.jsx",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "Notifications.jsx",
                  isFolder: false,
                },
              ],
            },
          ],
        },
        {
          id: uuid(),
          name: "redux",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "slices",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "authSlice.js",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "notificationSlice.js",
                  isFolder: false,
                },
                {
                  id: uuid(),
                  name: "quizSlice.js",
                  isFolder: false,
                },
              ],
            },
            {
              id: uuid(),
              name: "store.js",
              isFolder: false,
            },
          ],
        },
        {
          id: uuid(),
          name: "routes",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "AdminRoutes.jsx",
              isFolder: false,
            },
            { id: uuid(), name: "InstructorRoutes.jsx", isFolder: false },
            { id: uuid(), name: "StudentRoutes.jsx", isFolder: false },
            { id: uuid(), name: "ProtectedRoute.jsx", isFolder: false },
          ],
        },
        {
          id: uuid(),
          name: "services",
          isFolder: true,
          children: [
            { id: uuid(), name: "authService.js", isFolder: false },
            { id: uuid(), name: "quizService.js", isFolder: false },
            { id: uuid(), name: "userService.js", isFolder: false },
          ],
        },
        {
          id: uuid(),
          name: "styles",
          isFolder: true,
          children: [
            { id: uuid(), name: "variables.css", isFolder: false },
            {
              id: uuid(),
              name: "themes",
              isFolder: true,
              children: [
                { id: uuid(), name: "light.css", isFolder: false },
                { id: uuid(), name: "dark.css", isFolder: false },
              ],
            },
            { id: uuid(), name: "reset.css", isFolder: false },
          ],
        },
        {
          id: uuid(),
          name: "utils",
          isFolder: true,
          children: [
            { id: uuid(), name: "formatDate.js", isFolder: false },
            { id: uuid(), name: "validateForm.js", isFolder: false },
            { id: uuid(), name: "constants.js", isFolder: false },
          ],
        },
        { id: uuid(), name: "App.jsx", isFolder: false },
        { id: uuid(), name: "index.js", isFolder: false },
      ],
    },
    { id: uuid(), name: "package.json", isFolder: false },
    { id: uuid(), name: "tsconfig.json", isFolder: false },
    { id: uuid(), name: "vite.config.ts", isFolder: false },
    { id: uuid(), name: ".gitignore", isFolder: false },
    { id: uuid(), name: "README.md", isFolder: false },
  ],
};
