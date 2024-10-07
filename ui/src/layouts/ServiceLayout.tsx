import { Box, Flex } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

function NavigationItem({ to, title }: { to: string; title: string }) {
  return (
    <div>
      <Link to={to}>{title}</Link>
    </div>
  );
}

const ROUTES = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/handler',
    title: 'Handler',
  },
  {
    to: '/auth/login',
    title: 'Login',
  },
];

function Navigation() {
  return (
    <Box style={{ width: '100%', backgroundColor: '#f0f0f0' }}>
      <Flex
        as="nav"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderBottom: '1px solid #ccc',
        }}
      >
        {ROUTES.map((route) => {
          return <NavigationItem key={route.to} {...route} />;
        })}
      </Flex>
    </Box>
  );
}
export default function ServiceLayout() {
  return (
    <div style={{ width: 'inherit' }}>
      <Navigation />
      <Outlet />
    </div>
  );
}
