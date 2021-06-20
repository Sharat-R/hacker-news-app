import axios from "axios";



let getNewsDetails = async (pageNumber)=>{
    let response;
    try{
        response =await axios.get(`https://hn.algolia.com/api/v1/search_by_date?page=${pageNumber}`, {});
    }catch(error1){
        console.log(error1);
    }
    return response;
}
export default getNewsDetails;