import './Table.css';
function Table(){
    var response=[
        {
            "Comments": 'Hello', "VoteCount": 20, "UpVote": '^', "NewsDetails": 'Blah  Blah' 
        },
        {
            "Comments": 'Yellow', "VoteCount": 10, "UpVote": '^', "NewsDetails": 'Blah  Blah' 
        },
        {
            "Comments": 'Shello', "VoteCount": 30, "UpVote": '^', "NewsDetails": 'Blah  Blah' 
        }
    ]
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
                response.map((item,i)=>{
                    return (<tr>
                        <td>{item.Comments}</td>
                        <td>{item["VoteCount"]}</td>
                        <td>{item["UpVote"]}</td>
                        <td>{item["NewsDetails"]}</td>
                    </tr>)
                })
            }

        </tbody>
    </table>
    
    )
}
export default Table;