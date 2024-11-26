import React, { useState } from 'react';
import { CssBaseline, Box, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionMatrix from './components/PermissionMatrix';

const App = () => {
  const [activeTab, setActiveTab] = useState('Users');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSnackbarMessage(`Switched to ${tab}`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            RBAC Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto', width: 240 }}>
          <List>
            {['Users', 'Roles', 'Permissions', 'Audit Logs'].map((text) => (
              <ListItem button key={text} onClick={() => handleTabChange(text)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 30 }}>
        <Toolbar />
        {activeTab === 'Users' && <UserManagement />}
        {activeTab === 'Roles' && <RoleManagement />}
        {activeTab === 'Permissions' && <PermissionMatrix />}
        {activeTab === 'Audit Logs' && (
          <Typography variant="h6">Audit Logs Coming Soon!</Typography>
        )}
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={
          <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Box>
  );
};

export default App;
