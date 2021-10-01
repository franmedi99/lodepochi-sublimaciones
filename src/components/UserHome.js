import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/es'
/*LOGOS*/
import cantimplora from '../assets/img/cantimplora.ico' 

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
                <h2>Realizamos sublimaciones en </h2>
                <div  className="cat">
                    <div>Tazas ✓</div>
                    <div><img src={cantimplora} alt="barbijo" className="cat-logos" /> Cantimploras ✓</div>
                    <div>Remeras ✓</div>
                    <div>Baby Body ✓</div>
                    <div>Gorras ✓</div>
                    <div>Barbijos ✓</div>
                    <div>Rompe Cabezas ✓</div>
                    <div>Relojes ✓</div>
                    <div>¡Y muchos mas! ✓</div>
                </div>
            </div>
            <div className="contenidoB">
                {user_data.map(data => {
                    console.log(data.media_url);
                    return(
                        <div key={data.id} >
                            {data.media_type === 'VIDEO' ?
                                <div className="card m-3">
                                    <video src={data.media_url} autoPlay loop muted className="imagesB"></video>
                                    <div className="card-body">{data.caption ?<h5 className="card-text">{data.caption}</h5> : null}</div>
                                    <h5>{moment(data.timestamp).fromNow()}</h5> 
                                </div>
                             
                            : 
                            <div className="card m-3">
                                <img src={data.media_url} className="card-img-top imagesB" alt={data.id}/>
                                <div className="card-body">
                                    {data.caption ? <h5 className="card-text">{data.caption}</h5> : null}
                                    <h5>{moment(data.timestamp).fromNow()}</h5> 
                                   
                                    
                                </div> 
                            </div>
                            } 
                        </div>
                    )
                })}
            </div>
        </div>
    )
        
    
    }


