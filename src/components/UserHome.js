import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/es'


export default function UserHome() {

    const [user_data, setUser_data] = useState([])
    const [results, setResults] = useState([])
    const [query, setQuery] = useState([])
    // eslint-disable-next-line
    const [modaldata,setModalData] =useState({img:"",caption:"",media_type:""})
    
    useEffect(() => {
        const GetUserData = async () => {
            const {data : {data}} = await axios.get('https://graph.instagram.com/me/media?fields=id,media_url,media_type,caption,timestamp&limit=100&access_token='+process.env.REACT_APP_TOKEN)
            setUser_data(data)
            setResults(data)
            const arraytosearch = []
            let count = 0
            data.forEach(element => {
                count = count + 1
                if(element.caption){
                    arraytosearch.push(element)
                }
                if (count === data.length) {
                  setQuery(arraytosearch)
                }
              });
        }
        GetUserData()
        // eslint-disable-next-line
    }, [])

    const buscador = (query,search) => {
        const FilterResult = query.filter((obj)=>obj.caption.toLowerCase().includes(search.toLowerCase()))
        if(search.length > 0){
            setResults(FilterResult)
        }else{
            setResults(user_data)
        }
    }
    const onChange = e =>{
        buscador(query,e.target.value)
      }
      const vermodal = obj =>{
       setModalData({img:obj.img,caption:obj.caption,media_type:obj.media_type, timestamp:obj.timestamp})
       const vermodal = document.getElementById('vermodal')
       vermodal.click()
      }

    return(
        <div>
            <button type="hidden" data-toggle="modal" data-target=".bd-example-modal-lg" className="ds" id="vermodal" ></button>
            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">

                    <div className="modal-content mt-5 mb-5 multimedia">
                        <button type="button" className="close boton-modal  p-1 stext-light" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    {modaldata.media_type === 'VIDEO' ? <video src={modaldata.img} autoPlay loop muted ></video>: <img src={modaldata.img} className="card-img-top " alt="imagen"/>} 
                    </div>
                </div>
            </div>

            <div className="desc">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium animi nemo reiciendis incidunt, velit dolores rem minima similique necessitatibus ipsam possimus ullam architecto repudiandae voluptates aut quasi quo. Laborum.</h4>
            </div>
            <div className="contenidoA">
                <h2>• Realizamos sublimaciones en : </h2>
                <div  className="cat">
                    <div>Tazas </div>
                    <div> Cantimploras </div>
                    <div>Remeras </div>
                    <div>Baby Body </div>
                    <div>Gorras </div>
                    <div>Barbijos </div>
                    <div>Rompe Cabezas </div>
                    <div>Relojes </div>
                    <div>¡Y muchos mas! </div>
                </div>
            </div>


        <div className="input-group mx-auto mt-5 mb-5 bg-buscador text-light">
            <input type="text" name="search" placeholder="Escribí un producto..." className="form-control ml-3 mb-3 blanco"  onChange={onChange}/> 
            <div className="input-group-append ">
                <i className="fa fa-search fa-2x mt-4 ml-2 mr-1 text-light" aria-hidden="true"></i> 
            </div>
        </div>


            <div className="contenidoB">
                {
                results.map(data => {
                    return(
                        <div key={data.id}>
                            {data.media_type === 'VIDEO' ?
                                <div className="card m-3" >
                                    <video src={data.media_url} autoPlay loop muted className="imagesB"></video>
                                    {data.caption ? <h5 className="card-text mt-3 p-3">{data.caption}</h5> : null}
                                    <h5 className="mt-1">{moment(data.timestamp).fromNow()}</h5> 
                                    <a href="#/" className="ver mx-auto"  onClick={(e) => vermodal({img:data.media_url ,caption:data.caption,media_type:data.media_type})} >Ver</a>
                                </div>
                            : 
                            <div className="card m-3" >
                                <img src={data.media_url} className="card-img-top imagesB" alt={data.id}/>
                                {data.caption ? <h5 className="card-text mt-3 p-3 info-card">{data.caption}</h5> : null}
                                <h5 className="mt-2">{moment(data.timestamp).fromNow()}</h5> 
                                <a href="#/" className="ver  mx-auto"  onClick={(e) => vermodal({img:data.media_url ,caption:data.caption,media_type:data.media_type})} >Ver</a>
                            </div>   
                            } 
                        </div>
                    )
                })
                }
            </div>
        </div>
    )

}


