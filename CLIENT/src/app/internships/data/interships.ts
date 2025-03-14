import { Internship } from '../../types/types';

export const internships: Internship[] = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    description: 'Join our team to build modern web applications using React and TypeScript.',
    stipend: 2000,
    duration: 6,
    admin: {
      name: 'Alice Johnson',
      email: 'alice.johnson@techcorp.com',
    },
  },
  {
    id: 2,
    title: 'Backend Developer Intern',
    company: 'DataSys',
    location: 'New York, NY',
    description: 'Work on scalable backend systems using Node.js and PostgreSQL.',
    stipend: 2500,
    duration: 3,
    admin: {
      name: 'Bob Smith',
      email: 'bob.smith@datasys.com',
    },
  },
  {
    id: 3,
    title: 'Full Stack Developer Intern',
    company: 'WebStack',
    location: 'Austin, TX',
    description: 'Develop full-stack applications using modern web technologies.',
    stipend: 3000,
    duration: 4,
    admin: {
      name: 'Clara Davis',
      email: 'clara.davis@webstack.com',
    },
  },
];