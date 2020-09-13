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
