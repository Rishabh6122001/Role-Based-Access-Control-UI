import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox } from '@mui/material';
import mockRoles from '../mockData/roles';
import mockPermissions from '../mockData/permissions';

const PermissionMatrix = () => {
  const [permissions, setPermissions] = useState(
    mockRoles.reduce((acc, role) => {
      acc[role] = mockPermissions.map((perm) => ({ name: perm, allowed: false }));
      return acc;
    }, {})
  );

  const handlePermissionToggle = (role, permName) => {
    const updatedPermissions = { ...permissions };
    updatedPermissions[role] = updatedPermissions[role].map((perm) =>
      perm.name === permName ? { ...perm, allowed: !perm.allowed } : perm
    );
    setPermissions(updatedPermissions);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Role</TableCell>
          {mockPermissions.map((perm, index) => (
            <TableCell key={index} align="center">{perm}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(permissions).map((role, index) => (
          <TableRow key={index}>
            <TableCell>{role}</TableCell>
            {permissions[role].map((perm, idx) => (
              <TableCell key={idx} align="center">
                <Checkbox
                  checked={perm.allowed}
                  onChange={() => handlePermissionToggle(role, perm.name)}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PermissionMatrix;
