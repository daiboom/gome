import { Flex } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

export default function ServiceLayout() {
  return (
    <div>
      <Flex as="nav">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/handler">Handler</Link>
        </div>
        <div>
          <Link to="/auth/login">Login</Link>
        </div>
      </Flex>
      <div>Service Layout</div>
      <Outlet />
    </div>
  );
}
