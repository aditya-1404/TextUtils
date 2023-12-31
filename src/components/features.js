import React from 'react'

export default function (props) {
  return (
    <div style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",height:"100vh"}}>
    <div class="container my-4 mt-0 " >
      <div class="container" style={{"max-width": "945px"}}>
  <div class="row">
    <div class="col-sm-4 my-3" >
    <div class="card" style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",border:"4px solid #212529",height:"180px",borderRadius:"7px"}}>
  <div class="card-body" >
    <h2 class="card-title">To Uppercase</h2>
    <p class="card-text">Converts the text in the text field to Uppercase.</p>
  </div>
</div>
    </div>
    <div class="col-sm-4 my-3">
    <div class="card" style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",border:"4px solid #212529",height:"180px",borderRadius:"7px"}}>
  <div class="card-body" >
    <h2 class="card-title">To Lowercase</h2>
    <p class="card-text">Converts the text in the text field to Lowercase.</p>
  </div>
</div>
    </div>
    <div class="col-sm-4 my-3">
    <div class="card" style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",border:"4px solid #212529",height:"180px",borderRadius:"7px"}}>
  <div class="card-body" >
    <h2 class="card-title">Copy Text</h2>
    <p class="card-text">Copy the text in the text field to the clipboard.</p>
  </div>
</div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4 my-3" >
    <div class="card" style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",border:"4px solid #212529",height:"180px",borderRadius:"7px"}}>
  <div class="card-body" >
    <h2 class="card-title">Extra Spaces</h2>
    <p class="card-text">Removes extra spaces from the text in the text field.</p>
  </div>
</div>
    </div>
    <div class="col-sm-4 my-3">
    <div class="card" style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",border:"4px solid #212529",height:"180px",borderRadius:"7px"}}>
  <div class="card-body" >
    <h2 class="card-title">Hash</h2>
    <p class="card-text">Hashes the text in the text field to SHA1.</p>
  </div>
</div>
    </div>
    <div class="col-sm-4 my-3">
    <div class="card" style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",border:"4px solid #212529",height:"180px",borderRadius:"7px"}}>
  <div class="card-body" >
    <h2 class="card-title">Remove Symbols</h2>
    <p class="card-text">Removes all the symbols from the text in the text field.</p>
  </div>
</div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4 my-3" >
    <div class="card" style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",border:"4px solid #212529",height:"180px",borderRadius:"7px"}}>
  <div class="card-body" >
    <h2 class="card-title">Extract Numbers</h2>
    <p class="card-text">Extract numbers from the text in the text field.</p>
  </div>
</div>
    </div>
    <div class="col-sm-4 my-3" >
    <div class="card" style={{backgroundColor:props.mode=="dark"?"rgb(16 25 34)":"white",color:props.mode=="dark"?"white":"black",border:"4px solid #212529",height:"180px",borderRadius:"7px"}}>
  <div class="card-body" >
    <h2 class="card-title">Read Text</h2>
    <p class="card-text">Read the text aloud from the text field.</p>
  </div>
</div>
    </div>
  </div>
</div>
    </div> 
    </div>
  )
}
