import fetch from "isomorphic-fetch";

export const getMessage = () => {
    console.log('waht?')
    return fetch('http://localhost:3000/api/message').then((resp) => (resp.json()))
};