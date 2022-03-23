const ENDPOINT = ''

export default function register({username,password}){
    return fetch(`${ENDPOINT}/register`,{
        method: 'POST',
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({username,password})
    }).then(res =>{
        if(!res.ok) throw new Error('Response is Not OK')
        return true
    })
}