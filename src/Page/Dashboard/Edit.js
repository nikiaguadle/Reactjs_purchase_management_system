import React ,{useState}from "react";

const Edit =({purchase, setEditing,setPurchase,selectedItm})=>{
  console.log(selectedItm)
  const nm = selectedItm.purchaseItmName
  const qa= selectedItm.itmQantity
  const id = selectedItm.id;
  console.log(id)
  console.log(nm)
  console.log(qa)
  const[purchaseItmName,setPurchaseItmName] = useState(selectedItm.purchaseItmName);
  const[itmQantity,setItmQantity] = useState(selectedItm.itmQantity);
  const[itmAmount,setItmAmount] = useState(selectedItm.itmAmount);
  const[purchsesDate,setPurchsesDate] = useState(selectedItm.purchsesDate);

          const handleSubmit = (e)=>{
            e.preventDefault();
            let newP={
                id,
                purchaseItmName,
                itmQantity,
                itmAmount,
                purchsesDate

            }
            console.log(newP)
            console.log(id)
                for( let i = 0 ; i < purchase.length ; i++){
                if(purchase[i].id === id){
                   purchase.splice(i,1,newP)
                    break;
                }  
            } 
               
                setPurchase(purchase)
                setEditing(false)
    }

    return(
        <div>
             < h1 style={{font:'bold'}}>Edit list</h1>
             <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="purchaseItmName">Itm Name:  </label>
                <input type="text" 
                 id="purchaseItmName"
                 name="purchaseItmName"
                 value={purchaseItmName}
                 onChange={(e)=>setPurchaseItmName(e.target.value)}
                 />

                <br/>
                <br/>
                <label htmlFor="itmQantity">Itm Qantity:  </label>
                <input type="number" 
                 id="itmQantity"
                 name="itmQantity"
                 value={itmQantity}
                 onChange={(e)=>setItmQantity(e.target.value)}
                 />
                <br/>
                <br/>
                <label htmlFor="itmAmount">Itm Amount:</label>
                <input type="number" 
                 id="itmAmount"
                 name="itmAmount"
                 value={itmAmount}
                 onChange={(e)=>setItmAmount(e.target.value)}
                 />
                <br/>
                <br/>
                <label htmlFor="purchsesDate">Purchses Date:</label>
                <input type="date" 
                 id="purchsesDate"
                 name="purchsesDate"
                 value={purchsesDate}
                 onChange={(e)=>setPurchsesDate(e.target.value)}
                 />
                <br/>
                <br/>
                <div>
                
                    <button type="submit"  value='submit'>SUBMIT</button>
                    <button style={{marginLeft:'12px'}} 
                         type='button'
                         value="cancel" 
                         onClick={()=>setEditing(false)}
                         >Cancel</button>
                 </div>        
            </form>
        </div>

    )

}
export default Edit;