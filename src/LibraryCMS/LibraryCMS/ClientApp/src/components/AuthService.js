//import cookie from 'react-cookies';
//import { json } from 'body-parser';
//import decode from 'jwt-decode';


export default class AuthService{

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
    
      signout = () => {
    
      }

}