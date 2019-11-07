import fetch from 'node-fetch';



export default ({url, data={}, method = "POST"}) => {
    let urlParams = {k:5443477}, paramUrl = "";
    let options = {
        method,
        headers: {
            "X-Host":url, //"mall.film-ticket.city.list",
        },
       "Content-Type": "application/json; charset=UTF-8"
    }
    if (method == "POST") {
        options.body = JSON.stringify(data)
    } else {
        urlParams = Object.assign(urlParams, data)
        paramUrl = Object.keys(urlParams).map(key => `${key}=${urlParams[key]}`).join("&");
    }
    return fetch(`/gateway?${paramUrl}`, options).then(res => {
         return res.json();
    }).then(res => {
        return res;
    })
}
