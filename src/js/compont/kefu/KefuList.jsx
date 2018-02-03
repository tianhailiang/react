import React from 'react';

import {browserHistory,Link} from 'react-router';

const KefuList=React.createClass({
     
     handleClick:function(event){
         
         console.log(event.target.innerHTML);
          
            // browserHistory.push('/KefuDetail'); 

         

     },
     componentDidMount: function() {
         
        

    },  	
   
     render: function() {
        
 
    return (

         <div>
             

             <div>我是客服列表页</div> 

              <ul>
              	 
              	  <Link to="/KefuDetail" ><li onClick={this.handleClick}>列表1</li></Link>
              	  <Link to="/KefuDetail" ><li onClick={this.handleClick}>列表2</li></Link>
              	  <Link to="/KefuDetail" ><li onClick={this.handleClick}>列表3</li></Link>

              </ul>
           
             

         </div>
     )
  }


});


export default  KefuList;