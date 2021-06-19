import "./Pagination.css";

function Pagination () {
    let handleClick = ()=>{
        debugger
        alert("TODO")
    }
    let handleClick1 = ()=>{
        console.log("BODO")
    }
    return (<div className="pagination">
        <button onClick={handleClick}>Previous</button> 
        <button onClick={handleClick1}>Next</button> 
       </div> )
}

export default Pagination;