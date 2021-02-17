import React,{useState,useEffect} from 'react';
// import CountUp from "react-countup";




function CardData(){

  const [data,setdata] = useState([]);
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  
  
  useEffect(()=>{
    
    async function api(){
      
      const covid = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
      const recived = await covid.json();
      
      setdata(recived);
      setConfirmed(recived[0].active);
      setRecovered(recived[0].recovered)
      setDeaths(recived[0].deaths);
      
      
    }
    
    
    api();
    
    
    
  },[])
  
  
  
  
  const handle = (e)=>{
    
    const a =  e.target.index;
    console.log(e);

    
    
    
    
    
    
    
  }
  
  
  
  
  
  
  
  
  return(
    
    <>
  <label>Countries Status</label>

<select onChange={handle} style={{textAlign: 'center', marginLeft : '20px'}}>

  { data.map ((obj1,ind)=>{
    
    return( 
      <option key={ind}>{obj1.country}</option>
      )
      
      
      
      
    })}

</select>






<div style={{marginTop : '100px'}} className="row">
  <div className="column">
    <div className="card">Total-Active-Cases<br />{confirmed}
</div>
  </div>
  <div className="column">
    <div className="card">Total-Recoverd<br />{recovered}</div>
  </div>
  <div className="column">
    <div className="card">Total-Deaths<br />{deaths}</div>
  </div>
  
  </div>





    </>






  )








}
export default CardData;