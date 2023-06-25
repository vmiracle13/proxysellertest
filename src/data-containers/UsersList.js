import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { fetchUsers } from "../redux/reducers/users";

const UserList = () => {
  const { users, status, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== 'loading' || users && users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  return (
    <Stack>
      <div className="mx-auto">
        <h2 className='py-4 text-center'>Users list</h2>

        {status === 'loading' && <p>Loading users...</p>}

        {status === 'failed' && <p>{error}</p>}

        {status === 'success' && <ListGroup as="ol" numbered>
          {users && users?.length > 0 && users.map(user => (
            <ListGroup.Item key={user.id} as="li" className="d-flex align-items-center justify-content-between">
              <p className="my-0 px-2">{user.name}</p>

              <Stack gap={2} direction="horizontal" className='ms-auto'>
                <a href="#" className="p-2 bg-secondary text-white rounded text-decoration-none">Posts</a>
                <Button variant="secondary">Albums</Button>
              </Stack>
            </ListGroup.Item>
          ))}
        </ListGroup>}
      </div>
    </Stack >
  );
};

export default UserList;
