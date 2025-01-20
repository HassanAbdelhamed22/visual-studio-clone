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
      "name": "src",
      "isFolder": true,
      "children": [
        {
          "name": "assets",
          "isFolder": true,
          "children": []
        },
        {
          "name": "components",
          "isFolder": true,
          "children": [
            {
              "name": "Button.jsx",
              "isFolder": false,
            },
            {
              "name": "Header.jsx",
              "isFolder": false,
            },
            {
              "name": "Sidebar.jsx",
              "isFolder": false,
            },
            {
              "name": "Footer.jsx",
              "isFolder": false,
            }
          ]
        },
        {
          "name": "context",
          "isFolder": true,
          "children": []
        },
        {
          "name": "hooks",
          "isFolder": true,
          "children": []
        },
        {
          "name": "layouts",
          "isFolder": true,
          "children": [
            {
              "name": "AdminLayout.jsx",
              "isFolder": false
            },
            {
              "name": "InstructorLayout.jsx",
              "isFolder": false
            },
            {
              "name": "StudentLayout.jsx",
              "isFolder": false
            }
          ]
        },
        {
          "name": "pages",
          "isFolder": true,
          "children": [
            {
              "name": "admin",
              "isFolder": true,
              "children": [
                {
                  "name": "Dashboard.jsx",
                  "isFolder": false
                },
                {
                  "name": "Users.jsx",
                  "isFolder": false
                },
                {
                  "name": "Reports.jsx",
                  "isFolder": false
                },
                {
                  "name": "Settings.jsx",
                  "isFolder": false
                }
              ]
            },
            {
              "name": "instructor",
              "isFolder": true,
              "children": [
                {
                  "name": "Dashboard.jsx",
                  "isFolder": false
                },
                {
                  "name": "Courses.jsx",
                  "isFolder": false
                },
                {
                  "name": "Students.jsx",
                  "isFolder": false
                },
                {
                  "name": "Profile.jsx",
                  "isFolder": false
                }
              ]
            },
            {
              "name": "student",
              "isFolder": true,
              "children": [
                {
                  "name": "Dashboard.jsx",
                  "isFolder": false
                },
                {
                  "name": "Courses.jsx",
                  "isFolder": false
                },
                {
                  "name": "Quizzes.jsx",
                  "isFolder": false
                },
                {
                  "name": "Notifications.jsx",
                  "isFolder": false
                }
              ]
            }
          ]
        },
        {
          "name": "redux",
          "isFolder": true,
          "children": [
            {
              "name": "slices",
              "isFolder": true,
              "children": [
                {
                  "name": "authSlice.js",
                  "isFolder": false
                },
                {
                  "name": "notificationSlice.js",
                  "isFolder": false
                },
                {
                  "name": "quizSlice.js",
                  "isFolder": false
                }
              ]
            },
            {
              "name": "store.js",
              "isFolder": false
            }
          ]
        },
        {
          "name": "routes",
          "isFolder": true,
          "children": [
            {
              "name": "AdminRoutes.jsx",
              "isFolder": false
            },
            {
              "name": "InstructorRoutes.jsx",
              "isFolder": false
            },
            {
              "name": "StudentRoutes.jsx",
              "isFolder": false
            },
            {
              "name": "ProtectedRoute.jsx",
              "isFolder": false
            }
          ]
        },
        {
          "name": "services",
          "isFolder": true,
          "children": [
            {
              "name": "authService.js",
              "isFolder": false
            },
            {
              "name": "quizService.js",
              "isFolder": false
            },
            {
              "name": "userService.js",
              "isFolder": false
            }
          ]
        },
        {
          "name": "styles",
          "isFolder": true,
          "children": [
            {
              "name": "variables.css",
              "isFolder": false
            },
            {
              "name": "themes",
              "isFolder": true,
              "children": [
                {
                  "name": "light.css",
                  "isFolder": false
                },
                {
                  "name": "dark.css",
                  "isFolder": false
                }
              ]
            },
            {
              "name": "reset.css",
              "isFolder": false
            }
          ]
        },
        {
          "name": "utils",
          "isFolder": true,
          "children": [
            {
              "name": "formatDate.js",
              "isFolder": false
            },
            {
              "name": "validateForm.js",
              "isFolder": false
            },
            {
              "name": "constants.js",
              "isFolder": false
            }
          ]
        },
        {
          "name": "App.jsx",
          "isFolder": false
        },
        {
          "name": "index.js",
          "isFolder": false
        },
      ]
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
