//import cookie from 'react-cookies';
//import { json } from 'body-parser';
//import decode from 'jwt-decode';


export default class AuthService{

  login(email, password) {
    return fetch('/Authentication/Login', {
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
          this.setToken(response.token); // Setting the token in localStorage
          return Promise.resolve(response);
      })
      .catch(error => {console.log(error)});
}




  setToken = (token) => {
    sessionStorage.setItem('token', JSON.stringify(token));
  };

    getToken = async () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  verifyToken = async () => {
    return await fetch();
  }

  signOut = () => {
    console.log('Signin you out')
  }

}