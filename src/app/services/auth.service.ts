// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }

//   public isAuthenticated(): boolean {
//     // Controlla se l'utente è autenticato recuperando l'oggetto currentUser dalla localStorage
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
//     return currentUser && currentUser.token;
//   }

//   public login(user: any) {
//     // Simula il login dell'utente
//     localStorage.setItem('currentUser', JSON.stringify({ user, token: 'fake-token' }));
//   }

//   public logout() {
//     // Simula il logout dell'utente
//     localStorage.removeItem('currentUser');
//   }
// }
