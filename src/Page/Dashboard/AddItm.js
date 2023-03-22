import React, { useState,useRef,useEffect } from "react";

const AddItm =({purchase,setPurchase,setAddItm})=>{
    const[purchaseItmName,setPurchaseItmName] = useState('')
    const[itmQantity,setItmQantity] = useState('')
    const[itmAmount,setItmAmount] = useState("")
    const[purchsesDate,setPurchsesDate] = useState('')
    const inputText = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!purchaseItmName || !itmQantity || !itmAmount || !purchsesDate  ){
            alert('all feileds are requried');
            setAddItm(false)

        }else
        {

        const id = purchase.length + 1 ;
        const newPurchaseList = {
                    id,
                    itmQantity,
                    itmAmount,
                    purchaseItmName,
                    purchsesDate
                }
                
                purchase.push(newPurchaseList);
                setPurchase(purchase);
                setAddItm(false);
                alert('submited succesefully')

         }
    } 

    const qHAndler= (e)=>{
        let qValue = e.target.value;
        if(qValue >=0){
                setItmQantity(e.target.value)
            }else{
                setItmQantity(0)
            }
    }

    useEffect(()=>{
        inputText.current.focus();
    },[])

    return(
        <div style={{marginTop:"20px" ,textAlign:'center'}}>
            < h1 style={{font:'bold'}}>ADD ITMS</h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="purchaseItmName">Itm Name:  </label>
                <input type="text" 
                 id="purchaseItmName"
                 ref={inputText}
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
                 onChange={qHAndler}
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
                
                    <button type="submit" value='submit'>SUBMIT</button>
                    <button style={{marginLeft:'12px'}} 
                         type='button'
                         value="cancel" 
                         onClick={()=>setAddItm(false)}
                         >Cancel</button>
                </div>
                                    

            </form>
           
        </div>

    )
    }

export default AddItm;