import React, { useEffect, useState } from 'react'
import './edit.css'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
export default function Edit() {



    const[state,setState] = useState()

    const inputChange = (event)=>{
        const{name,value} = event.target
        setState({...state,[name]:value})
    }
    console.log(state);

    const [get,setGet]=useState()

    const{id}=useParams()
    console.log(id);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Singledata/${id}`).then((response)=>{
            console.log(response.data.data)
            setGet(response.data.data[0])

        }).catch((error)=>{console.log(error);

        })

    },[]);
    console.log(get);

    const navi = useNavigate()

    const Back = ()=>{
        navi('/home')

    }

    const  update = ()=>{
        axios.put(`http://127.0.0.1:8000/api/updateshow/${id}`,state).then((response)=>{
            console.log(response);
            navi('/home')
        }).catch((error)=>{console.log(error);})
    }



  return (
    <>
    <div>
                <div class="row">
                    <div id="main2">
                        <div class="container ">
                            <section>

                                <div class="row">
                                    <div class="card editcard">
                                        <div class="card-body">
                                            <h5 class="card-title text-dark">Add Items</h5>
                                            <form>
                                                <div class="row">
                                                    <div class="col">
                                                        <label class="name">Art Name</label>
                                                        <input type="text" class="form-control" placeholder="Art name"
                                                            aria-label="Artname" name='Artname' onChange={inputChange}></input>
                                                    </div>
                                                    <div class="col">
                                                        <label class="name">Artist Name</label>
                                                        <input type="text" class="form-control" placeholder="Artist name"
                                                            aria-label="Artistname" name='Artistname' onChange={inputChange}></input>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <label class="name">Category</label>
                                                <select class="form-select" aria-label="Default select example" name='Category'onChange={inputChange}>
                                                    <option selected>Open this select menu</option>
                                                    <option>paintings</option>
                                                    <option>sculpture</option>
                                                    <option>books</option>
                                                    <option>modern art</option>
                                                    
                                                </select>
                                                <br></br>
                                                <label class="name">price</label>
                                                <input type="number" class="form-control" placeholder="price" name='Price' onChange={inputChange}></input>
                                                <br></br>
                                                <label class="name">Add Photo</label>
                                                <input type="file" class="form-control" placeholder="file" name='Image' ></input>
                                                <br></br>
                                                <button type="button" onClick={update} class="btn btn-dark">update</button>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}