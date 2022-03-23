const ENDPOINT = ''

export default function addFavs({id,jwt}){
    return fetch(`${ENDPOINT}/favs/${id}`,{
        method: 'POST',
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({jwt})
    }).then(res =>{
        if(!res.ok) throw new Error('Response is Not OK')
        return res.json()
    }).then(res =>{
        const {favs}= res
        return favs
    })
}