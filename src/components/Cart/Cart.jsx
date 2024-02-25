import React from 'react';
import './cart.css'


const Cart = ({selectCourse,remaining,totalCredit}) => {
    console.log(selectCourse)
    return (
        <div>
           <div className='cart'>
 <div className="card card-compact w-60 bg-base-100 p-4 shadow-xl">
 
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p className='cart-remaining'>credit hour remaining:{remaining} hr</p>
     <hr className='my-4'></hr>
   
    <h5>Course Name:</h5>
    {
        selectCourse.map((Course ) => (
            <li className='list-decimal' key={Course.id}>{Course.heading}</li>
        ))
    }
    <hr className='my-4'></hr>
    <div className="card-actions justify-end">
      <p>Total Credit hour :{totalCredit}</p>
     
  </div>
</div>
</div>



</div>





        </div>
    );
};

export default Cart;