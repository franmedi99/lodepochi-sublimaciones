import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserHome() {

    const token = "IGQVJWQmNEc01sVEZA3UElDWktHbWQ0UGQ2NXg1SGpKX0pkbVFFck9JM3JCVngzX1F3ZAUd3Y293SnEtU2ZAwN3FFQm94elRrTFdzNDk5Y2NNN1YzUlBBOFRxOWNRODdIMmVWTzM3ZAE5sU3ZArazhoNWo5NQZDZD"
    const [user_data, setUser_data] = useState([])
    
    useEffect(() => {
        const GetUserData = async () => {
            const {data : {data}} = await axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token='+token)
            console.log(data);
            setUser_data(data)
        }
        GetUserData()
    }, [])
    

    return(
        <div>
            {user_data.map(data => {
                return(
                    <h2  key={data.id}>{data.media_user}</h2>
                )
            })}
        </div>
    )
        

    }


