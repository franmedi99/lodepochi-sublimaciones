import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserHome() {

    const token = "IGQVJXYVJVTHJIcTRDeG5Cc2hMYzYyVEZAtT2J5OXRBWVpxU0YxcGpxN3dsNXV2Ry1CQzV4cmIzYldZAd1VTdGxtaEpJaVRJeWFqYS1Qd1ZAtSDQ1Q1dZAM1h5RVBNVzNZAMlJON0FMZAFR2M2U1WF9uYmF4VAZDZD"
    const [user_data, setUser_data] = useState([])
    
    useEffect(() => {
        const GetUserData = async () => {
            const {data : {data}} = await axios.get('https://graph.instagram.com/me/media?fields=id,caption&access_token='+token)
            console.log(data);
            setUser_data(data)
            
        }

        GetUserData()
        
    }, [])

    const Ids =  () => {
        user_data.map( async data => {
            console.log(data.id)
            const ImagesData = await axios.get('https://graph.instagram.com/'+data.id+'?fields=id,media_type,media_url,username,timestamp&access_token='+token)
            console.log(ImagesData);
        })
    }
    
    return (
        <div>
            <h1>cargando</h1>
            <button type="submit" onClick={Ids}>obtener</button>
        </div>
    )
}
