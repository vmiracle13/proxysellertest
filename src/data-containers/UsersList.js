import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import Albums from '../components/Albums';
import LoadingComponent from '../components/LoadingComponent';

import { fetchUsers } from "../redux/reducers/users";
import { fetchAlbums, reset } from '../redux/reducers/albums';

const UserList = () => {
  const [isModalShown, setShowModal] = useState(false);
  const { users, status, error } = useSelector(state => state.users);
  const albums = useSelector(state => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== 'loading' || users && users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  const showModal = (userId) => {
    dispatch(reset());
    dispatch(fetchAlbums(userId));
    setShowModal(true);
  }

  const closeModal = () => setShowModal(false);

  return (
    <Stack>
      <div className="mx-auto">
        <h2 className='py-4 text-center'>Users list</h2>

        {status === 'loading' && <LoadingComponent items="users" />}

        {status === 'failed' && <p>{error}</p>}

        {status === 'success' && <ListGroup as="ol" numbered>
          {users && users?.length > 0 && users.map(user => (
            <ListGroup.Item key={user.id} as="li" className="d-flex align-items-center justify-content-between">
              <p className="my-0 px-2">{user.name}</p>

              <Stack gap={2} direction="horizontal" className='ms-auto'>
                <a href={`/${user.id}/posts`} className="p-2 bg-secondary text-white rounded text-decoration-none">Posts</a>
                <Button variant="secondary" onClick={() => showModal(user.id)}>Albums</Button>
              </Stack>
            </ListGroup.Item>
          ))}
        </ListGroup>}

        {isModalShown && (
          <Albums {...albums} closeModal={closeModal} />
        )}
      </div>
    </Stack >
  );
};

export default UserList;
