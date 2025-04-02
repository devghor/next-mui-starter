'use client';

import React, { useState } from 'react';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { PageHeading } from '@/components/layout/PageHeading';
import PageContainer from '@/components/layout/PageContainer';
import { DataTable } from '@/components/ui/table/DataTable';
import { Button } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active'
    }
  ]);

  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    status: ''
  });

  const handleOpen = (user?: User) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status
      });
    } else {
      setEditingUser(null);
      setFormData({
        name: '',
        email: '',
        role: '',
        status: ''
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingUser(null);
  };

  const handleSubmit = () => {
    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...formData } : user
        )
      );
    } else {
      setUsers([
        ...users,
        {
          id: users.length + 1,
          ...formData
        }
      ]);
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const columns = [
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: 'company',
      label: 'Company',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'city',
      label: 'City',
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: 'state',
      label: 'State',
      options: {
        filter: true,
        sort: false
      }
    }
  ];

  const data = [
    { name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
    { name: 'John Walsh', company: 'Test Corp', city: 'Hartford', state: 'CT' },
    { name: 'Bob Herm', company: 'Test Corp', city: 'Tampa', state: 'FL' },
    { name: 'James Houston', company: 'Test Corp', city: 'Dallas', state: 'TX' }
  ];

  return (
    <PageContainer>
      <PageHeading
        title='Users'
        actions={
          <Button
            variant='contained'
            startIcon={<AddIcon />}
            onClick={() => handleOpen()}
          >
            Add User
          </Button>
        }
      />
      <DataTable data={data} columns={columns} />
    </PageContainer>
  );
}
