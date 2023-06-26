import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import Modal from '../components/Modal';
import LoadingComponent from './LoadingComponent';

const Albums = ({ albums, status, error, closeModal }) => (
  <Modal closeModal={closeModal}>
    {status === 'loading' && <LoadingComponent items="albums"/>}

    {status === 'failed' && <p>{error}</p>}

    <h3 className="p-3 text-center">Albums for the chosen user:</h3>

    <ListGroup as="ol" numbered className="p-3">
      {albums && albums?.length > 0 && albums.map(album => (
        <ListGroup.Item key={album.id} as="li" className="d-flex align-items-center">
          <p className="my-0 px-2">{`${album.title.slice(0, 1).toUpperCase()}${album.title.slice(1)}`}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>

    <div className="d-flex justify-content-center p-3">
      <Button variant="primary" className="w-25" onClick={closeModal}>Close</Button>
    </div>
  </Modal>
);

Albums.propTypes = {
  albums: PropTypes.array,
  status: PropTypes.string,
  error: PropTypes.any,
  closeModal: PropTypes.func,
};

export default Albums;
