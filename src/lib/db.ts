interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  fullName: string;
  role: 'admin' | 'employee';
}

export const users: User[] = [
  {
    id: '1',
    username: 'Austin',
    email: 'austin.rich@promptix.com',
    password: 'Promptix123',
    fullName: 'Austin Rich',
    role: 'admin'
  },
  {
    id: '2',
    username: 'Dylan',
    email: 'dylan.wheeler@promptix.com',
    password: 'Promptix123',
    fullName: 'Dylan Wheeler',
    role: 'admin'
  },
  {
    id: '3',
    username: 'TJ',
    email: 'tobias.ives@promptix.com',
    password: 'Promptix123',
    fullName: 'Tobias Ives',
    role: 'employee'
  },
  {
    id: '4',
    username: 'Izak',
    email: 'izak.gaber@promptix.com',
    password: 'Promptix123',
    fullName: 'Izak Gaber',
    role: 'employee'
  }
];

export type { User };
