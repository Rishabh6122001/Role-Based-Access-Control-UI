import React, { useState } from 'react';
import { List, ListItem, Button, Dialog, TextField, Divider } from '@mui/material';
import mockRoles from '../mockData/roles';

const RoleManagement = () => {
  const [roles, setRoles] = useState(mockRoles);
  const [open, setOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState('');

  const handleAddRole = () => {
    if (currentRole.trim() && !roles.includes(currentRole)) {
      setRoles([...roles, currentRole]);
    }
    setCurrentRole('');
    setOpen(false);
  };

  const handleDeleteRole = (roleToDelete) => {
    setRoles(roles.filter((role) => role !== roleToDelete));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Role
      </Button>
      <List>
        {roles.map((role, index) => (
          <div key={index}>
            <ListItem>
              {role}
              <Button
                variant="outlined"
                color="error"
                style={{ marginLeft: 'auto' }}
                onClick={() => handleDeleteRole(role)}
              >
                Delete
              </Button>
            </ListItem>
            {index < roles.length - 1 && <Divider />}
          </div>
        ))}
      </List>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 20 }}>
          <TextField
            label="Role Name"
            fullWidth
            value={currentRole}
            onChange={(e) => setCurrentRole(e.target.value)}
          />
          <Button
            onClick={handleAddRole}
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            Add Role
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default RoleManagement;
