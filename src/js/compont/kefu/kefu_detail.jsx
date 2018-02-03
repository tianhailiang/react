import React from 'react';

const KefuDetail=React.createClass({
     
    
     componentDidMount: function() {
        window.addEventListener('message', function(e) {
          console.log(e.data);
        },false); 


    },  	
   
     render: function() {
        
 
    return (

         <div>
             

             <div>我是客服详情页</div> 

          
           
            

         </div>
     )
  }


});


export default  KefuDetail;