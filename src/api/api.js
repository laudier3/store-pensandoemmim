import axios from 'axios'

const api = axios.create({
    baseURL: "https://app1.apinonshops.store",
    headers: {
        Authorization: 'Bearer qGtfMJAAPMpu3B50e2X3tRzWDAhFUcfWoCXwe9AFVgkx6cTiqysOWTZ', // or 'Token YOUR_TOKEN'
        'Content-Type': 'application/json',
      },
})

export default api;

export const createSession = async (email, password) => {
    return api.post("/login", { email, password })
}

//Novo github
