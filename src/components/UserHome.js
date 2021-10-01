import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserHome() {

    const token = "IGQVJYOThHX3N6dFJsLUhQRzRKeGotdXVteVdMcGpvSnhiTnlJcjM1Vl95VzE4NmxuX21tM0czVm5UMmpIRW1Tc0pOdjNSdGVPZAHRJS0ZA0SGlGNHdOdnpxTkdGaGdMaU5JS2NXLVRZAaHlsTVFBbjBZATwZDZD"
    const [user_data, setUser_data] = useState([])
    
    useEffect(() => {
        const GetUserData = async () => {
            const {data : {data}} = await axios.get('https://graph.instagram.com/me/media?fields=id,media_url,media_type,caption,timestamp&access_token='+token)
            console.log(data);
            setUser_data(data)
        }
        GetUserData()
    }, [])
    

    return(
        <div>
            <div className="desc">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium animi nemo reiciendis incidunt, velit dolores rem minima similique necessitatibus ipsam possimus ullam architecto repudiandae voluptates aut quasi quo. Laborum.</h4>
            </div>
            <div className="contenidoA">
                <h2>Hacemos sublimaciones en </h2>
                <div>Tazas</div>
                <div>Cantimploras</div>
                <div>Remeras</div>
                <div>Baby Body</div>
                <div>Gorras</div>
                <div>Barbijos</div>
                <div>Rompe Cabezas</div>
                <div>Relojes</div>
            </div>
            <div className="contenidoB">
                {user_data.map(data => {
                    console.log(data.media_url);
                    return(
                        <div key={data.id} className="galeria">
                            {data.media_type === 'VIDEO' ?
                                <div className="card m-3">
                                    <video src={data.media_url} autoPlay loop muted className="imagesB"></video>

                                    {data.caption ? <div className="card-body"><p className="card-text">{data.caption}</p></div> : null}
                                </div>
                             
                            : 
                            <div className="card m-3">
                                <img src={data.media_url} className="card-img-top imagesB" alt={data.id}/>
                            {data.caption ? <div className="card-body"><p className="card-text">{data.caption}</p></div> : null}
                            </div>
                            } 
                        </div>
                    )
                })}
            </div>
        </div>
    )
        
    
    }


