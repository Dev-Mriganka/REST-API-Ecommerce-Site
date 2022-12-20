import axios from "axios";

// const USER_BASE_URL =
const TOKEN = localStorage.getItem("token");
class UserService {
  saveUser(user) {
    return axios.post("http://localhost:8088/register", user);
  }

  loginUser(userDto) {
    return axios.post("http://localhost:8088/login", userDto);
  }

  logOutUser() {
    return axios.delete(
      `http://localhost:8088/logout?authenticationToken=${TOKEN}`
    );
  }
}

export default new UserService();
