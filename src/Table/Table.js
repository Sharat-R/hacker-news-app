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
        },
        {
            "Comments": 'Mellow', "VoteCount": 90, "UpVote": '^', "NewsDetails": 'Blah  Blah' 
        },
        {
            "Comments": 'Jello', "VoteCount": 60, "UpVote": '^', "NewsDetails": 'Blah  Blah' 
        },
        {
            "Comments": 'Sello', "VoteCount": 20, "UpVote": '^', "NewsDetails": 'Blah  Blah' 
        }
    ]
    return (
    <table className='Table1'>
        <thead>
        <tr className='HeadRow'>
            <th>Comments</th>
            <th>VoteCount</th>
            <th>UpVote</th>
            <th>NewsDetails</th>
        </tr>
        </thead>
        <tbody>
            {
                response.map((item,i)=>{
                    if (i%2==0){
                    return (<tr className='AltRow1'>
                        <td>{item.Comments}</td>
                        <td>{item["VoteCount"]}</td>
                        <td>{item["UpVote"]}</td>
                        <td>{item["NewsDetails"]}</td>
                    </tr>)}
                    else{
                    return (<tr className='AltRow2'>
                        <td>{item.Comments}</td>
                        <td>{item["VoteCount"]}</td>
                        <td>{item["UpVote"]}</td>
                        <td>{item["NewsDetails"]}</td>
                    </tr>)
                    }
                })
            }

        </tbody>
    </table>
    
    )
}
export default Table;