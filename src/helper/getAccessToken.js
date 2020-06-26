const getAccessToken = () => {
  let accessToken = localStorage.getItem('accessToken')
    ? localStorage.getItem('accessToken')
    : false;
  return accessToken;
};

export default getAccessToken;
