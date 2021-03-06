
import React,{useState,useEffect} from 'react';
import CountUp from "react-countup";
import {Pie} from 'react-chartjs-2';




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
  
  // let index = data.findIndex(ind => ind.country == "USA");
  // console.log(index);
  
  const handle = (e)=>{
  
   const a = e.target.value;
   let ind1 = data.findIndex(ind2 => ind2.country == a);
   
 
   setConfirmed(data[ind1].active);
   setRecovered(data[ind1].recovered)
   setDeaths(data[ind1].deaths);
   
    
    
    
    
  }
  
  
  const dataGraph = {
    labels: [
      'Total-deaths',
      'Total-recovered',
      'Total-confirmed'
    ],
    datasets: [{
      data: [Number(confirmed),Number(recovered),Number(deaths)],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };
  
  
  
  
  
  return(
    
    <>
  <label style={{ paddingRight: '25px'}}>Countries Status</label>

<select onChange={handle} style={{backgroundColor:'#efefef' }}>

  {data.map ((key,ind)=>{
  
    
    return( 
      <option key={ind}>{key.country}</option>
      )
      
      
      
      
    })}

</select>






<div style={{marginTop : '100px'}} className="row">
  <div className="column">
    <div className="card">Total-Confirmed<br />{<CountUp 
    start={0}
    duration={3}
    separator={","}
    end={Number(confirmed)}
    
    
    /> }
</div>
  </div>
  <div className="column">
    <div className="card">Total-Recoverd<br />{<CountUp 
    start={0}
    duration={3}
    separator={","}
    end={Number(recovered)}
    
    
    
    /> }</div>
  </div>
  <div className="column">
    <div className="card">Total-Deaths<br />{<CountUp 
    
    start={0}
    duration={3}
    separator={","}
    end={Number(deaths)}
    
    
    
    />}</div>
  </div>
  
  </div>



  <div>
        <h2>Covid-19 Graph</h2>
        <Pie data={dataGraph} />
      </div>

    </>






  )








}
export default CardData;