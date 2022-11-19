import axios from 'axios'






export const authAPI = {
    async login(email, password) {
        const response = await fetch("http://localhost:8000/api/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then(response => response.json().then(data => ({
            status: response.status,
            body: data
        })));

        return response;




    },
    async register(email, password, username, picture) {
        const response = await fetch("http://localhost:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                email: email,
                password: password,
                username: username,
                image: picture,
            }),
        }).then(response => response.json().then(data => ({
            status: response.status,
            body: data
        })));

        return response;
    },
    async authen() {
        const response = await fetch("http://localhost:8000/api/user/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        }).then(response => response.json().then(data => ({
            status: response.status,
            body: data
        })));

        return response;
    },
    async logout() {
        const response = await fetch("http://localhost:8000/api/logout/", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",

        }).then
            (response => response.json().then(data => ({ status: response.status, body: data })));

        return response;
    }


}


