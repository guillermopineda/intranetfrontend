import axios from "axios";
import Cookies from "js-cookie";

const baseURL = 'https://intranet-api-dltuh.ondigitalocean.app/api/login/';

export default {
    setUserLogged(userLogged) {
        Cookies.set("login", userLogged);
      },
    getUserLogged() {
        return Cookies.get("login");
      },
    deleteUser() {
        Cookies.remove("login");
        Cookies.remove("token");
        Cookies.remove("csrf");
      },
    postLogin(username, password) {
        const user = { username, password };
        return axios.post(baseURL , user);
      },
      setUserToken(userToken){
          Cookies.set('token',userToken);
      },
      getUserToken(){
          return Cookies.get("token");
      },
      setHeaderToken(headerToken){
        Cookies.set('csrf',headerToken);
      },
      getHeaderToken(){
        return Cookies.get("csrf");
      }

};