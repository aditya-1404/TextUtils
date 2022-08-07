import React,{useState} from 'react'
import logo from './envelope.png'
import axios from 'axios'

export default function(props) {
  const [data,setdata]=useState({
    first_name:"",
    last_name:"",
    email:"",
    query:"",
  })
  const handleChange=(e)=>{
    const value=e.target.value;
    setdata({
      ...data,
      [e.target.name]:value
    })
  }
  document.body.style.background=props.mode=='light'?"white":"rgb(16 25 34)";
  const handleSubmit= async(e)=>{
    console.log("his")
    const userData={
      first_name:data.first_name,
      last_name:data.last_name,
      email:data.email,
      query:data.query,
    }
    const res=await axios.post("/form",userData);
    console.log(res);
  }
  return (
    <>
    <div >
    <div className='container pt-4 text-center'>
      <h1 className='font-weight-bold'><strong  style={{color:props.mode=='light'?"black":"white"}}>Contact Us</strong></h1>
    </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                  <img className="img-fluid mx-auto d-block" src={logo}/>
                </div>
                <div className='col-md-6 my-auto'>
                <form onSubmit={handleSubmit}>
                  <div className='container d-flex flex-column my-4'>
                    <input type={'name'} onChange={handleChange} name="first_name" value={data.first_name} className='my-2 form-control' style={{'height': '45px','font-size': 'large','padding': '10px','border-radius': '30px'}} placeholder={'First name'}></input>
                    <input type={'name'} onChange={handleChange} name="last_name" value={data.last_name} className='my-2 form-control' style={{'height': '45px','font-size': 'large','padding': '10px','border-radius': '30px'}} placeholder={'Last name'}></input>
                    <input type={'email'} onChange={handleChange} name="email" value={data.email} className='my-2 form-control' style={{'height': '45px','font-size': 'large','padding': '10px','border-radius': '30px'}} placeholder={'Email address'}></input>
                    <textarea class="my-2 form-control" onChange={handleChange} name="query" value={data.query} placeholder={'Any Questions?'} style={{'height': '100px','font-size': 'large','padding': '10px','border-radius': '30px'}} rows="5"></textarea>
                  </div>
                    <button type="submit" class={`btn ${props.mode=='light'?'btn-dark':'btn-light'} mx-auto d-block`}>Submit</button>
                </form>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
