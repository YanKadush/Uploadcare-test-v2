import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getUsers } from '../../store/UsersStore';
import { Modal } from '../../components';

import './page-style.css';

export const Page = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);
  const { data: usersList, isError, isLoading, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });

  const actions = {
    invalidate: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    getData: () => refetch(),
    toggleModal: () => setOpen(!open),
    closeModal: () => setOpen(false)
  };

  if (isError) return <div>Request Failed: {error?.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className='page'>
        <button className='button' onClick={actions.invalidate}>Invalidate
          cache
        </button>
        <button className='button' onClick={actions.getData}>Fetch new data</button>
        <button className='button' onClick={actions.toggleModal}>Open modal</button>
      </div>
      {open && <Modal onClose={actions.closeModal} data={usersList?.data} />}
    </>
  );
};