import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Dialog, TextField } from '@mui/material';

const UserManagement = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', role: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleAddOrUpdateUser = () => {
    if (editingIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editingIndex] = currentUser;
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, currentUser]);
    }
    setCurrentUser({ name: '', role: '' });
    setOpen(false);
  };

  const handleEditUser = (index) => {
    setCurrentUser(users[index]);
    setEditingIndex(index);
    setOpen(true);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
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
                <Button variant="outlined" color="primary" onClick={() => handleEditUser(index)}>
                  Edit
                </Button>
                <Button variant="outlined" color="error" onClick={() => handleDeleteUser(index)}>
                  Delete
                </Button>
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
          <Button onClick={handleAddOrUpdateUser} variant="contained" style={{ marginTop: 20 }}>
            {editingIndex !== null ? 'Update User' : 'Add User'}
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default UserManagement;

