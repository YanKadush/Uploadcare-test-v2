export const getUsers = async () => {
  const res = await fetch('https://reqres.in/api/users');
  return res.json();
};