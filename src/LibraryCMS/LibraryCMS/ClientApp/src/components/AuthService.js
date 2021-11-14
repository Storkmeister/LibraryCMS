//import cookie from 'react-cookies';
//import { json } from 'body-parser';
import decode from 'jwt-decode';


export default class AuthService{

  async login(email, password) {
    return await fetch('/Authentication/Login', {
        method: "POST",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ "Email": email, "Password": password, "FullAddress": "n/a"}),
    })
      .then(response => response.json())
      .then((response) => {
          this.setToken(response.token);
          return Promise.resolve(response);
      })
      .catch(error => {console.log(error)});
  }

  loggedIn = () =>  {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token)
  }

  checkIsAdmin = () => {
    const token = this.getToken();
    return !!token && this.getUserLevel(token)
  }

  setToken = (token) => {
    sessionStorage.setItem('token', JSON.stringify(token));
  };

  getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const tokenObj = JSON.parse(tokenString);
    return tokenObj;
  };

  verifyToken = async () => {
    return await fetch();
  }

  isTokenExpired(token) {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            return true
        } else {
            return false
        }
    }
    catch (e) {
        return false;
    }
  }

  signOut = () => {
    sessionStorage.removeItem('token');
  }

  getUserLevel = (token) => {
    const decoded = decode(token);
    return (decoded?.sub == 'True')
  }

}