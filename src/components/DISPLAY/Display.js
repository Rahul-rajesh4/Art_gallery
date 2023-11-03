import React, { useEffect, useState } from 'react'
import './display.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Display() {

    const navigate = useNavigate()

    const role = JSON.parse(localStorage.getItem('Fname'))

    const [get, setGet] = useState([])
    const [single, setSingle] = useState([])
    const [set, setCategory] = useState()
    const inputChange = (event) => {
        const { name, value } = event.target
        setCategory({ ...set, [name]: value })

    }
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/Filterproducts', set).then((response) => {
            console.log(response.data.data);
            setSingle(response.data.data)
        }).catch((error) => { console.log(error); })

    }, [set])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/GetshowDetails').then((response) => {
            console.log(response.data)
            setGet(response.data.data)
        }).catch((error) => { console.log(error) })
    }, [])

    const Edit = (val) => {
        const id = val
        navigate(`/Edit/${id}`)
    }

    const Delete = (val) => {
        const id = val
        axios.delete(`http://127.0.0.1:8000/api/Deleteshow/${id}`).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
        window.location.reload()


    }



    return (
        <>
            <center>
                <div className='selclr'>
                    <div class=" col-md-4  ">
                        <select id="inputState" class="form-control fillterdesign" name='Category' onClick={inputChange}>
                            <option selected disabled>Filter...</option>
                            <option >paintings</option>
                            <option >sculpture</option>
                            <option >books</option>
                            <option >modern art</option>
                        </select>
                    </div>
                </div>
            </center>
            <div class="container itemstylee">
                <div class='row'>
                    {single[0] ?
                        <>
                            {single.map((value, key) => (
                                <>
                                    {role === 'admin' ?
                                        <div class="card designn">
                                            <img src={`art_django/media/${value.Images}`} alt="" />

                                            <div className='overlay2'>
                                                <div class="card-content">
                                                    <h2>
                                                        {value.Artname}
                                                    </h2>
                                                    <p class="card-text"><label>
                                                        Artist:{value.Artistname}<br></br>
                                                        Category:{value.Category}<br></br>
                                                        Price:{value.Price}
                                                    </label>
                                                    </p>
                                                    <div className=''>
                                                        <a type="button" class="btn btn-dark firstbutton" onClick={() => { Edit(value.id) }}>Edit</a><br></br>
                                                        <a type="button" class="btn btn-danger" onClick={() => { Delete(value.id) }}>Delete</a>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div class="card designn">
                                            <img src={`art_django/media/${value.Images}`} alt="" />
                                            <div className='overlay2'>
                                                <div class="card-content">
                                                    <h2>
                                                        {value.Artname}
                                                    </h2>
                                                    <p class="card-text"><label>
                                                        Artist:{value.Artistname}<br></br>
                                                        Category:{value.Category}<br></br>
                                                        Price:{value.Price}
                                                    </label>
                                                    </p>
                                                    <a href="#" class="button">
                                                        Find out more
                                                        <span class="material-symbols-outlined">
                                                            __
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </>
                            ))}
                        </>


                        :

                         get [0] ?
                            <>
                                {get.map((value, key) => (
                                    <>
                                        {role === 'admin' ?
                                            <div class="card designn">
                                                <img src={`art_django/${value.Images}`} alt="" />

                                                <div className='overlay2'>
                                                    <div class="card-content">
                                                        <h2>
                                                            {value.Artname}
                                                        </h2>
                                                        <p class="card-text"><label>
                                                            Artist:{value.Artistname}<br></br>
                                                            Category:{value.Category}<br></br>
                                                            Price:{value.Price}
                                                        </label>
                                                        </p>
                                                        <div className=''>
                                                            <a type="button" class="btn btn-dark firstbutton" onClick={() => { Edit(value.id) }}>Edit</a><br></br>
                                                            <a type="button" class="btn btn-danger" onClick={() => { Delete(value.id) }}>Delete</a>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div class="card designn">
                                                <img src={`art_django/${value.Images}`} alt="" />
                                                <div className='overlay2'>
                                                    <div class="card-content">
                                                        <h2>
                                                            {value.Artname}
                                                        </h2>
                                                        <p class="card-text"><label>
                                                            Artist:{value.Artistname}<br></br>
                                                            Category:{value.Category}<br></br>
                                                            Price:{value.Price}
                                                        </label>
                                                        </p>
                                                        <a href="#" class="button">
                                                            Find out more
                                                            <span class="material-symbols-outlined">
                                                                __
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </>
                                ))}
                            </>
                            :
                            <h3>no data</h3>

                    }


                </div>

            </div>
        </>

    )
}

