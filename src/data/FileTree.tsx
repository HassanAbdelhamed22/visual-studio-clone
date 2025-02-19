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
              content: `export * from 'react';`,
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
              content: `export * from '@vitejs/plugin-react';`,
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
          content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VS Code Clone</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`,
        },
        {
          id: uuid(),
          name: "favicon.ico",
          isFolder: false,
          content: "Binary content for favicon",
        },
        {
          id: uuid(),
          name: "logo192.png",
          isFolder: false,
          content: "Binary content for logo192",
        },
        {
          id: uuid(),
          name: "logo512.png",
          isFolder: false,
          content: "Binary content for logo512",
        },
        {
          id: uuid(),
          name: "manifest.json",
          isFolder: false,
          content: `{
            "short_name": "VSCodeClone",
            "name": "VS Code Clone",
            "icons": [
              {
                "src": "logo192.png",
                "type": "image/png",
                "sizes": "192x192"
              },
              {
                "src": "logo512.png",
                "type": "image/png",
                "sizes": "512x512"
              }
            ],
            "start_url": ".",
            "display": "standalone",
            "theme_color": "#000000",
            "background_color": "#ffffff"
          }`,
        },
        {
          id: uuid(),
          name: "robots.txt",
          isFolder: false,
          content: "User-agent: *\nDisallow:",
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
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst Button = ({ children, ...props }) => {\n  return (\n    <button {...props}>{children}</button>\n  );\n};\n\nexport default Button;`,
            },
            {
              id: uuid(),
              name: "Header.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst Header = () => {\n  return (\n    <header>\n      <h1>VS Code Clone</h1>\n    </header>\n  );\n};\n\nexport default Header;`,
            },
            {
              id: uuid(),
              name: "Sidebar.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst Sidebar = () => {\n  return (\n    <div>\n      <h2>Sidebar</h2>\n    </div>\n  );\n};\n\nexport default Sidebar;`,
            },
            {
              id: uuid(),
              name: "Footer.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst Footer = () => {\n  return (\n    <footer>\n      <p>Footer</p>\n    </footer>\n  );\n};\n\nexport default Footer;`,
            },
          ],
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
              content: `import React from 'react';\n\nconst AdminLayout = () => {\n  return (\n    <div>\n      <h2>Admin Layout</h2>\n    </div>\n  );\n};\n\nexport default AdminLayout;`,
            },
            {
              id: uuid(),
              name: "InstructorLayout.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst InstructorLayout = () => {\n  return (\n    <div>\n      <h2>Instructor Layout</h2>\n    </div>\n  );\n};\n\nexport default InstructorLayout;`,
            },
            {
              id: uuid(),
              name: "StudentLayout.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst StudentLayout = () => {\n  return (\n    <div>\n      <h2>Student Layout</h2>\n    </div>\n  );\n};\n\nexport default StudentLayout;`,
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
                  content: `import React from 'react';\n\nconst Dashboard = () => {\n  return (\n    <div>\n      <h2>Dashboard</h2>\n    </div>\n  );\n};\n\nexport default Dashboard;`,
                },
                {
                  id: uuid(),
                  name: "Users.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Users = () => {\n  return (\n    <div>\n      <h2>Users</h2>\n    </div>\n  );\n};\n\nexport default Users;`,
                },
                {
                  id: uuid(),
                  name: "Reports.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Reports = () => {\n  return (\n    <div>\n      <h2>Reports</h2>\n    </div>\n  );\n};\n\nexport default Reports;`,
                },
                {
                  id: uuid(),
                  name: "Settings.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Settings = () => {\n  return (\n    <div>\n      <h2>Settings</h2>\n    </div>\n  );\n};\n\nexport default Settings;`,
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
                  content: `import React from 'react';\n\nconst Dashboard = () => {\n  return (\n    <div>\n      <h2>Dashboard</h2>\n    </div>\n  );\n};\n\nexport default Dashboard;`,
                },
                {
                  id: uuid(),
                  name: "Courses.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Courses = () => {\n  return (\n    <div>\n      <h2>Courses</h2>\n    </div>\n  );\n};\n\nexport default Courses;`,
                },
                {
                  id: uuid(),
                  name: "Students.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Students = () => {\n  return (\n    <div>\n      <h2>Students</h2>\n    </div>\n  );\n};\n\nexport default Students;`,
                },
                {
                  id: uuid(),
                  name: "Profile.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Profile = () => {\n  return (\n    <div>\n      <h2>Profile</h2>\n    </div>\n  );\n};\n\nexport default Profile;`,
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
                  content: `import React from 'react';\n\nconst Dashboard = () => {\n  return (\n    <div>\n      <h2>Dashboard</h2>\n    </div>\n  );\n};\n\nexport default Dashboard;`,
                },
                {
                  id: uuid(),
                  name: "Courses.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Courses = () => {\n  return (\n    <div>\n      <h2>Courses</h2>\n    </div>\n  );\n};\n\nexport default Courses;`,
                },
                {
                  id: uuid(),
                  name: "Quizzes.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Quizzes = () => {\n  return (\n    <div>\n      <h2>Quizzes</h2>\n    </div>\n  );\n};\n\nexport default Quizzes;`,
                },
                {
                  id: uuid(),
                  name: "Notifications.jsx",
                  isFolder: false,
                  content: `import React from 'react';\n\nconst Notifications = () => {\n  return (\n    <div>\n      <h2>Notifications</h2>\n    </div>\n  );\n};\n\nexport default Notifications;`,
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
                  content: `import { createSlice } from '@reduxjs/toolkit';\n\nconst authSlice = createSlice({\n  name: 'auth',\n  initialState: {},\n  reducers: {},\n});\n\nexport default authSlice.reducer;`,
                },
                {
                  id: uuid(),
                  name: "notificationSlice.js",
                  isFolder: false,
                  content: `import { createSlice } from '@reduxjs/toolkit';\n\nconst notificationSlice = createSlice({\n  name: 'auth',\n  initialState: {},\n  reducers: {},\n});\n\nexport default notificationSlice.reducer;`,
                },
                {
                  id: uuid(),
                  name: "quizSlice.js",
                  isFolder: false,
                  content: `import { createSlice } from '@reduxjs/toolkit';\n\nconst quizSlice = createSlice({\n  name: 'quiz',\n  initialState: {},\n  reducers: {},\n});\n\nexport default quizSlice.reducer;`,
                },
              ],
            },
            {
              id: uuid(),
              name: "store.js",
              isFolder: false,
              content: `import { configureStore } from '@reduxjs/toolkit';\n\nconst store = configureStore({\n  reducer: {},\n});\n\nexport default store;`,
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
              content: `import React from 'react';\n\nconst AdminRoutes = () => {\n  return (\n    <div>\n      <h2>Admin Routes</h2>\n    </div>\n  );\n};\n\nexport default AdminRoutes;`,
            },
            {
              id: uuid(),
              name: "InstructorRoutes.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst InstructorRoutes = () => {\n  return (\n    <div>\n      <h2>Instructor Routes</h2>\n    </div>\n  );\n};\n\nexport default InstructorRoutes;`,
            },
            {
              id: uuid(),
              name: "StudentRoutes.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst StudentRoutes = () => {\n  return (\n    <div>\n      <h2>Student Routes</h2>\n    </div>\n  );\n};\n\nexport default StudentRoutes;`,
            },
            {
              id: uuid(),
              name: "ProtectedRoute.jsx",
              isFolder: false,
              content: `import React from 'react';\n\nconst ProtectedRoute = () => {\n  return (\n    <div>\n      <h2>Protected Route</h2>\n    </div>\n  );\n};\n\nexport default ProtectedRoute;`,
            },
          ],
        },
        {
          id: uuid(),
          name: "services",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "authService.js",
              isFolder: false,
              content: `import React from 'react';\n\nconst authService = () => {\n  return (\n    <div>\n      <h2>Auth Service</h2>\n    </div>\n  );\n};\n\nexport default authService;`,
            },
            {
              id: uuid(),
              name: "quizService.js",
              isFolder: false,
              content: `import React from 'react';\n\nconst quizService = () => {\n  return (\n    <div>\n      <h2>Quiz Service</h2>\n    </div>\n  );\n};\n\nexport default quizService;`,
            },
            {
              id: uuid(),
              name: "userService.js",
              isFolder: false,
              content: `import React from 'react';\n\nconst userService = () => {\n  return (\n    <div>\n      <h2>User Service</h2>\n    </div>\n  );\n};\n\nexport default userService;`,
            },
          ],
        },
        {
          id: uuid(),
          name: "styles",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "variables.css",
              isFolder: false,
              content: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`,
            },
            {
              id: uuid(),
              name: "themes",
              isFolder: true,
              children: [
                {
                  id: uuid(),
                  name: "light.css",
                  isFolder: false,
                  content: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`,
                },
                {
                  id: uuid(),
                  name: "dark.css",
                  isFolder: false,
                  content: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`,
                },
              ],
            },
            {
              id: uuid(),
              name: "reset.css",
              isFolder: false,
              content: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`,
            },
          ],
        },
        {
          id: uuid(),
          name: "utils",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "formatDate.js",
              isFolder: false,
              content: `export const formatDate = (dateString) => {\n  const date = new Date(dateString);\n  return date.toLocaleDateString();\n};`,
            },
            {
              id: uuid(),
              name: "validateForm.js",
              isFolder: false,
              content: `export const validateForm = () => {\n  return true;\n};`,
            },
            {
              id: uuid(),
              name: "constants.js",
              isFolder: false,
              content: `export const BASE_URL = 'http://localhost:3000';`,
            },
          ],
        },
        {
          id: uuid(),
          name: "App.jsx",
          isFolder: false,
          content: `import React from "react";

const App = () => {
  return <div>Welcome to the VS Code Clone!</div>;
};

export default App;`,
        },
        {
          id: uuid(),
          name: "index.js",
          isFolder: false,
          content: `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));`,
        },
      ],
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
      content: `{
  "name": "vs-code-clone",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
}`,
    },
    {
      id: uuid(),
      name: "tsconfig.json",
      isFolder: false,
      content: `{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}`,
    },
    {
      id: uuid(),
      name: "vite.config.ts",
      isFolder: false,
      content: `import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\n// https://vite.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n})\n`,
    },
    {
      id: uuid(),
      name: ".gitignore",
      isFolder: false,
      content: "node_modules",
    },
    {
      id: uuid(),
      name: "README.md",
      isFolder: false,
      content:
        "# VS Code Clone\nA simple file structure representation of a VS Code project.",
    },
  ],
};
