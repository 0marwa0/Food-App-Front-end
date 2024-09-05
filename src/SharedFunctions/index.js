export let IsLogin = () => {
  let token = localStorage.getItem("token");
  let result = token ? true : false;

  return result;
};
