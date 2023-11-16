import { useQuery } from '@tanstack/react-query';
import { getUsers } from './store/UsersStore';

type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string
}

export const Component = () => {
  const { data: usersList, isError, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: getUsers });

  if (isError) return <div>Request Failed: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='component'>
      <button>Invalidate cache</button>
      <button>Fetch New Data</button>
      <button>Open Modal</button>
      <ul>
        {usersList.data.map((item: TUser) => (
          <li key={item.id}>{item.first_name}</li>
        ))}
      </ul>
    </div>
  );
};