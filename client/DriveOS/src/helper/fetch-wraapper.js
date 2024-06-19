// import config from 'config';
const config = JSON.parse(process.env.CONFIG || '{}');
import { accountService } from '../service/account.service';


export const fetchWrapper = {
    post,
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        credentials: 'include',
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}


function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = accountService.userValue;
    console.log("header: "+user);
    // console.log("header with jwt: "+user.jwtToken);
    const isLoggedIn = user && user.jwtToken;
    console.log("header isLoggedIn: "+isLoggedIn);
    const isApiUrl = url.startsWith(config.apiUrl);
    console.log("header isApiUrl: "+isApiUrl);
    if (isLoggedIn && isApiUrl) {
        // console.log("header auth: "+Authorization `Bearer ${user.jwtToken}`);
        return { Authorization: `Bearer ${user.jwtToken}` };
    } else {
        return {};
    }
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            if ([401, 403].includes(response.status) && accountService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                accountService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}