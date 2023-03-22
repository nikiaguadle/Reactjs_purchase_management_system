import React,{useState} from "react";
import Header from'./Header';
import AddItm from "./AddItm";
import List from "./List";
import Edit from "./Edit"
import { purchaseList } from "../../Data";

const Dashboard =()=>{
    const [isAddItm,setAddItm] = useState(false)
    const [purchase,setPurchase] = useState(purchaseList)
    const[editing,setEditing] = useState(false)
    const[selectedItm,setSelectedItm] = useState(null)
           
      //  for(let x in purchase){
          //  console.log(purchase[x])
        // }
         
     
      const handleEdit = (ind)=>{
          
       const selectI = purchase.find((ele)=>{return ind ===ele.id})
        console.log(selectI)
         setSelectedItm(selectI)
         setEditing(true)
       console.log(selectedItm) 
      }
    
       const handleDelete = (id)=>{
            
            const purchases = purchase.filter((itm)=>{
               return id !== itm.id
            }) 
            console.log(purchases)
                  setPurchase(purchases)
         }

     return(
      <div style={{margin:"30px",textAlign:"center"}}>{ !isAddItm && !editing &&(
       <>
         <Header
            setAddItm = {setAddItm} 

         />
          <List
             purchase = {purchase}
             handleDelete ={handleDelete}
             handleEdit = {handleEdit}
             
          />
        </>      
    )}
    {isAddItm &&(
        <AddItm
           purchase={purchase}
           setPurchase={setPurchase}
           setAddItm={setAddItm}
        />
    )}
    {editing &&(
      <Edit
            purchase={purchase}
            setEditing={setEditing}
            setPurchase={setPurchase}
            selectedItm={selectedItm}
      />
    )
    
    }
    </div>
   );
   } 

export default Dashboard;