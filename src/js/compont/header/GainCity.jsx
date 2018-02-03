
import React from 'react';



 function myStop(e){

             e.preventDefault();
};


var GainCity=React.createClass({
      
      handleClick(event){
    
         event.preventDefault();
         
       // console.log(event.target.innerHTML)  
       this.props.handleSelectCity(event.target.innerHTML,!this.props.showCity);

        document.removeEventListener('touchmove', myStop, false);
    
    },       


     componentDidMount:function(){
        
        document.addEventListener('touchmove', myStop,false);

     

     },
     
     render: function() {

     	 var heig=document.documentElement.clientHeight;
         var wid=document.documentElement.clientWidth;
        
        let cityList = this.props.data.map((item,index)=>{
             
             return (

                    <li data-cid={item.id} key={index} onClick={this.handleClick}>{item.name}</li>


             	)

        }); 	


        return (
        
             <div className="city_selct_box" style={{"height":heig,"width":wid}}>

                    <ul className="city_ul" >

                          {cityList}
                            
                           
                    </ul>

                    <div className="Mask" ></div>
            </div>
       
        )

   }

});


export default  GainCity;