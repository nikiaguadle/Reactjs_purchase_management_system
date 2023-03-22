
import React from "react";

const Header =({setAddItm})=>{
    
    return(
        <header>
            <h3>Purchase ManageMent Systm</h3>
            <div style={{marginTop:'30 px',marginBottom:"18px", marginLeft:"30px"}}>
                <button style={ {color:'black',backgroundColor:'green'}}  onClick={()=>setAddItm(true)}>Add Itms</button>
            </div>
        </header>

    )

}
export default Header;