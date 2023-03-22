import React from "react";

const List =({purchase,handleEdit,handleDelete})=>{
  //  console.log(purchase[0].purchaseItmName)
   // for(let i in purchase){ console.log(purchase[i].itmQantity)}
    const  date = new Date();
    const newDate = date.getMonth();
    const month= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const newMonth = month[newDate];
    
    return(
        <div style={{margin:"10px 400px"}}> 
              <table style={{borderCollapse:'solid black 1px'}}>
                <caption><h3 style={{color:'black',fontFamily:"Serif"}}> MONTH : {newMonth} </h3></caption>
                    <thead>
                        <tr>
                        <th>No.</th>
                        <th>Item Name</th>
                        <th>Qantity</th>
                        <th>Amount</th>
                        <th>Purchase Date</th>
                        <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>{
                          purchase.map((pur,i)=>(
                        <tr key={pur.id}>
                        <td>{ i+1}</td>
                        <td>{pur.purchaseItmName}</td>
                        <td>{pur.itmQantity}</td>
                        <td>{pur.itmAmount}</td>
                        <td>{pur.purchsesDate}</td>
                        <td>
                            <button onClick={()=>handleEdit(pur.id)}>Edit</button>
                        </td>
                        <td>
                          <button onClick={()=>handleDelete(pur.id)}>Delete</button>
                        </td>
                      </tr>
                       ))
                        }</tbody>
                    </table>
        </div>

    )

}
export default List;