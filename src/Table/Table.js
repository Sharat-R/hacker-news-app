import './Table.css';

function Table(props){
   console.log("props",props);
   let data = props.data;
    return (
    <table className='Table1'>
        <thead>
        <tr >
            <th>Comments</th>
            <th>VoteCount</th>
            <th>UpVote</th>
            <th>NewsDetails</th>
        </tr>
        </thead>
        <tbody>
            {
              data.map((item,i)=>{
                    if (i%2==0){
                    return (<tr className='AltRow1'>
                        <td>{item.comment_text}</td>
                        <td>{item.points}</td>
                        <td>^</td>
                        <td>{item.story_title}</td>
                    </tr>)}
                    else{
                    return (<tr className='AltRow2'>
                        <td>{item.Comments}</td>
                        <td>{item["VoteCount"]}</td>
                        <td>{item["UpVote"]}</td>
                        <td>{item["NewsDetails"]}</td>
                    </tr>)
               }})
            }

        </tbody>
    </table>
    
    )
}
export default Table;