import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';
// npm i typescript-cookie

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    setCookie('token-trello', token, { expires: 30, path: '/' });
  }

  getToken() {
    const token = getCookie('token-trello');
    return token;
  }

  removeToken() {
    removeCookie('token-trello');
  }
}

  // localstorage

  // saveToken(token: string) {
  //   localStorage.setItem('token', token);
  // }

  // getToken() {
  //   const token = localStorage.getItem('token');
  //   return token;
  // }

  // removeToken() {
  //   localStorage.removeItem('token');
  // }
