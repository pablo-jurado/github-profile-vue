import axios from "axios";

const BASE_API = "https://api.github.com/";
const TOKEN = process.env.VUE_APP_TOKEN;

const config = {
  headers: {
    Authorization: `token ${TOKEN}`,
  },
};

export async function getUser(user) {
  const url = BASE_API + "users/" + user;
  const response = await axios.get(url, config);
  if (response && response.data) return response.data;
  return null;
}

function getFollowList() {
  return localStorage.getItem("users");
}

export function isUserFollowed(login) {
  const savesUsers = getFollowList();
  const emptyList = !savesUsers;

  if (emptyList) return false;

  const usersArray = JSON.parse(savesUsers);
  const foundUser = usersArray.find((user) => user.login === login);

  return Boolean(foundUser);
}

export function updateFollowList(newUser) {
  const savesUsers = getFollowList();
  const emptyList = !savesUsers;

  if (emptyList) {
    localStorage.setItem("users", JSON.stringify([newUser]));
  } else {
    const usersArray = JSON.parse(savesUsers);
    if (isUserFollowed(newUser.login)) {
      const filteredUsers = usersArray.filter(
        (user) => user.login !== newUser.login
      );
      localStorage.setItem("users", JSON.stringify(filteredUsers));
    } else {
      localStorage.setItem("users", JSON.stringify([...usersArray, newUser]));
    }
  }
}
