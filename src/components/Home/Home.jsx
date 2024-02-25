import React, { useState } from 'react';
import { useEffect } from 'react'
import { BsBookmarks, BsCurrencyDollar} from 'react-icons/bs';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';
// import toast from 'react-hot-toast';






const Home = () => {
    
    const [allCourse, setAllCourse] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    const [totalCredit, setTotalCredit]  = useState((0))
    const [remaining,setRemaining]  = useState((0))

    useEffect(() => {
        fetch('./home.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    
      },[])

      const clickSelector = (Course) =>{
        

        const isSelect = selectCourse.find((content) => content.id == Course.id);
        
        let count = Course.credit;
        if (isSelect){
          return toast("You have already selected")
         
        } else{
          selectCourse.forEach((content) => {
            count = count  + content.credit;
          })
         
             
             const totalRemaining = 20 - count;

             if(count > 20){
               return toast('You already enough credit completed')
             }
             setTotalCredit(count);
             setRemaining(totalRemaining);
          setSelectCourse([...selectCourse,Course]);
        }
       
       
      };
    
      
    
    return (
           <div>
            
            <h2 className='text-4xl font-semibold my-12 text-center'>Course Registration</h2>
         <div className='flex gap-16 px-32'>

            <div className='flex flex-wrap gap-6 max-w-5xl'>
            {
               
                allCourse.map((Course)=>(
                    
            <div key={Course.id} className="card w-60 h-84 bg-base-100 p-4 shadow-xl">
            <figure><img src={Course.img} alt="card-img" /></figure>
           <div className="card-body">
         <h2 className="text-xl mt-3 text-gray-900">{Course.heading}</h2>
        <p className='text-sm mt-3'>{Course.p}</p>
        <div className="card-actions flex mt-2 gap-4  ">
            <span><BsCurrencyDollar></BsCurrencyDollar></span><p className='text-sm'>Price:{Course.price}</p>

          <span><BsBookmarks></BsBookmarks></span><p className='text-sm'>Credit:{Course.credit}</p>
        
     </div>
     <div className="card-actions justify-center">
      <button onClick={()=>clickSelector(Course)} className="btn btn-primary w-full mt-4 rounded-sm py-2 text-white hover:text-slate-300 bg-[#2F80ED]">Selected</button>
    </div>
  </div>
</div> 

))
           
}
  
 </div>
 
 <Cart selectCourse = {selectCourse} totalCredit ={totalCredit} remaining = {remaining}></Cart>
</div>
</div>



       
    );
};

export default Home;