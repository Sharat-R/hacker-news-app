import "./Pagination.css";
import getNewsDetails from "../API/API";
import { useState } from "react";

function Pagination (props) {
    const setPageData = props.setPageData;
    const [currentpgno, setCurrentPgNo]=useState(1);

    let handleClick = async ()=>{
        let c = currentpgno;
        if(c>1){
            c=c-1;
        setCurrentPgNo(c);
        let response = await getNewsDetails(c);
        setPageData(response.data.hits)
        console.log(response.data.hits[0]);
        }
    }
    let handleClick1 = async ()=>{
        let c = currentpgno;
        if(c<100){
            c=c+1;
            setCurrentPgNo(c);
        let response = await getNewsDetails(c);
        setPageData(response.data.hits)
        console.log(response.data.hits[0]);
    }
    }
    return (<div className="pagination">
        <span>Page {currentpgno}</span>
        <button className='button1' onClick={handleClick}>Previous |</button> 
        <button className='button1' onClick={handleClick1}>Next</button> 
       </div> )
}

export default Pagination;