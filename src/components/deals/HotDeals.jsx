import React from "react"
function HotDeals({products,onAdd}){
    return (
      <div>
       <h1>Hot Deals</h1>
        <ul style={{display:'flex',padding:'20px',margin:'10px',listStyle:'none'}}>
        
            {
                products.map(product=>{
                    return(
                    <div style={{marginRight:'100px'}} key={product.id}>
                    <li style={{fontSize:'30px'}}>{product.name}</li>
                    <li><img src={product.image_url}/></li>
                    <li>{product.price}</li>
                    <li>{product.category}</li>
                    <button onClick={()=>{onAdd(product)}} style={{backgroundColor:'red'}}>Add to Cart</button>
                     </div>
                    );
                })
            }
        </ul>
      </div>
    );
}
export default HotDeals