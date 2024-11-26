import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Dialog, TextField } from '@mui/material';
import mockUsers from '../mockData/users';

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', role: '' });

  const handleAddUser = () => {
    setUsers([...users, currentUser]);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Add User</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary">Edit</Button>
                <Button variant="outlined" color="error">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: 20 }}>
          <TextField
            label="Name"
            fullWidth
            value={currentUser.name}
            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
          />
          <TextField
            label="Role"
            fullWidth
            value={currentUser.role}
            onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
          />
          <Button onClick={handleAddUser} variant="contained" style={{ marginTop: 20 }}>
            Add User
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default UserManagement;
