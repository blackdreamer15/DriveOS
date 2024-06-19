// import { BehaviorSubject } from 'rxjs';

// import config from 'config';
const config = JSON.parse(process.env.CONFIG || '{}');
import { fetchWrapper } from '../helper/fetch-wraapper';

// const userSubject = new BehaviorSubject(null);
const baseUrl = config.apiUrl

export const accountService = {
    login,
    signup,
    // user: userSubject.asObservable(),
    // get userValue() { return userSubject.value }
};

function signup(params) {
    return fetchWrapper.post(`${baseUrl}/signup`, params);
}

function login(email, password) {
    return fetchWrapper.post(`${baseUrl}/login`, { email, password })
        .then(user => {
            // publish user to subscribers and start timer to refresh token
            userSubject.next(user);
            startRefreshTokenTimer();
            return user;
        });
}


function startRefreshTokenTimer() {
    // parse json object from base64 encoded jwt token
    const jwtToken = JSON.parse(atob(userSubject.value.jwtToken.split('.')[1]));

    // set a timeout to refresh the token a minute before it expires
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    refreshTokenTimeout = setTimeout(refreshToken, timeout);
}