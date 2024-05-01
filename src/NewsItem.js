import React from 'react'

function NewsItem(props) {
   
    let w={
        height:"600px"
    }

  return (
    <>
    
   <div className="col">
    <div className="card " style={w}>
      <img src={props.nimage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.ntitle}</h5>
        <p className="card-text">{props.ndec}</p>
        <a href={props.nurl} style={{marginLeft:"90px"}} ><button type="button" className="btn btn-warning">More News</button></a>
      </div>
    </div>
  </div>
    </>
  )
}

export default NewsItem