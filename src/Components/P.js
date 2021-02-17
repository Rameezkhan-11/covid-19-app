import React,{useState,useEffect} from 'react';

function P (){
const [data,getData] = useState({});
useEffect(()=>{

    async function Global(){

        const api = await fetch( "https://coronavirus-19-api.herokuapp.com/countries" )
        const fetch1 = await api.json();
        // console.log(fetch1.confirmed.value)
        getData(fetch1);
        console.log(fetch1)


    }

Global()


},[])
    return(

        <>
            
            <p>{}</p>
        
            <p>{}</p>
        
        </>






    )








}
export default P;