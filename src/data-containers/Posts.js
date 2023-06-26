import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from "../redux/reducers/posts";

import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import LoadingComponent from '../components/LoadingComponent';

const Posts = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector(state => state.posts);

  useEffect(() => {
    if (userId && posts.length === 0) {
      dispatch(fetchPosts(userId));
    }
  }, [dispatch, userId, posts]);

  return (
    <Stack className="container-sm">
      <div className="mx-auto">
        <h2 className='py-4 text-center'>Posts of the chosen user:</h2>

        {status === 'loading' && <LoadingComponent items="posts" />}

        {status === 'failed' && <p>{error}</p>}

        {status === 'success' && (
          <ListGroup as="ol" numbered>
            {posts && posts?.length > 0 && posts.map(post => (
              <ListGroup.Item key={post.id} as="li" className='d-flex'>
                <div className='px-2'>
                  <h5>{`${post.title.slice(0, 1).toUpperCase()}${post.title.slice(1)}`}</h5>
                  <p>{`${post.body.slice(0, 1).toUpperCase()}${post.body.slice(1)}`}</p>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    </Stack >
  );
};

export default Posts;
