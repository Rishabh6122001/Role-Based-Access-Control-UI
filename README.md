# Role-Based Access Control (RBAC) UI

This project is a web-based UI for managing users, roles, and permissions in a system. It is built using React and Material-UI (MUI). The application allows admins to manage users, roles, and their permissions dynamically. It also provides an easy-to-use interface for interacting with the data and managing access control.

## Features

- **User Management**: Add, edit, and delete users.
- **Role Management**: Add and delete roles.
- **Permission Matrix**: View and manage permissions for different roles.
- **Navigation**: Easy navigation through different management sections via a sidebar.
- **Snackbar Alerts**: Notifications when switching between sections.

## Tech Stack

- **React**: For building the user interface.
- **Material-UI**: For UI components and styling.
- **React Hooks**: For managing component state (`useState`).

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/rbac-ui.git
cd rbac-ui

### 2. Install Dependencies:

```bash

npm install


### 3. Start the application:

```bash
npm start



/src
  /components
    /UserManagement.js      # Manages users (add, delete, edit)
    /RoleManagement.js      # Manages roles (add, delete)
    /PermissionMatrix.js    # Displays and manages permission matrix
  /mockData
    /users.js               # Mock user data
    /roles.js               # Mock roles data
    /permissions.js         # Mock permissions data
  App.js                    # Main component rendering the UI
  index.js                  # Entry point for the React app
  index.css                 # Global CSS styles
  App.css                   # Styles for the App component
