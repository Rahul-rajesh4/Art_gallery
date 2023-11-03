import React, { useState } from 'react'
import './item.css'
import Nav from '../Navbar/Nav'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Additem() {
    const nav = useNavigate()
    const [output, setOutput] = useState({ })

    const inputChange = (event) => {
        const { name, value } = event.target
        setOutput({ ...output, [name]: value })
    }
  
    

    const submit = () => {
        const data=new FormData()
        data.append('Artname',output.Artname)
        data.append('Artistname',output.Artistname)
        data.append('Category',output.Category)
        data.append('Price',output.Price)
        data.append('Images',output.Images)
        console.log(output);
        axios.post('http://127.0.0.1:8000/api/AddshowAPI', data).then((response) =>{
            console.log(response)
            nav('/home')

        })

    }
  return (
    <>
    <Nav/>
    <div>
                <div class="row">
                    <div id="main2">
                        <div class="container">
                            <section>

                                <div class="row">
                                    <div class="card itemcard">
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
                                                <input type="file" class="form-control" placeholder="file" name='Images' onChange={(e)=>{console.log(e.target.files[0]);;setOutput({ ...output,'Images':e.target.files[0]})}}></input>
                                                <br></br>
                                                <button type="button" onClick={submit} class="btn btn-dark">ADD</button>
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
