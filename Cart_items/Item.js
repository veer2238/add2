import React from 'react'
import { AddCircleOutline, Close, Remove } from '@mui/icons-material'

const Item = ({description,title,img,price,amount}) => {
  return (
    <div>
    <div className='item-info'>

     <div className='product-img'>

     <img src={img} height={150} width={130} alt='cart'/>
     
     </div>

     <div className='title'>

     <h2>{title}</h2>
     <h4>{description}</h4>
     
     </div>

     <div className='add-minus-quantity'>
     <AddCircleOutline/>
    

     <input type="text" placeholder={amount}/>
     <Remove/>
     </div>

     <div className='price'>
     <h3>{price}</h3>
 </div>

 <div className='remove_item'>
     <Close />
 </div>


     
     </div>
     <hr/>
    </div>
  )
}

export default Item