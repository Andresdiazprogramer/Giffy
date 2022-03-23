const ENDPOINT = ''

export default function login({username,password}){
    return fetch(`${ENDPOINT}/login`,{
        method: 'POST',
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({username,password})
    }).then(res =>{
        if(!res.ok) throw new Error('Response is Not OK')
        return res.json()
    }).then(res =>{
        const {jwt}= res
        return jwt
    })
}