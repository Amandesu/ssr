import fetch from 'node-fetch';



export default ({url, data}) => {
    return fetch(url, {
        method:"POST",
        data
    }).then(res => {
         return res.json();
    }).then(res => {
        return res;
    })
}