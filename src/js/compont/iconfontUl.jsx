import React from 'react';

var indexCss=require('../../css/indexDemo.css');

var Collect=React.createClass({
    
    handleClick(event){
    
      event.preventDefault();
      console.log(5)
    
    },

    componentDidMount: function() {



    },
    
    render: function(){

    	 


    	let view=function(){

           

          
    	  if(this.props.data.isView==1){
             
             return (
                     
                     <li >

			                  <i className="iconfont eye ">&#xe620;</i> <span className="num">{this.props.data.viewNum}</span>

                      </li>

             	)  

    	  }else{

		  	 return (
                   <li >

                            <i className="iconfont eye bg-c">&#xe620;</i> <span className="num">{this.props.data.viewNum}</span>


                     </li>
		  	 	)
				             

    	  }
        
    	}.bind(this);


    	let keep=function(){
            
	             if(this.props.data.isKeep==1){

	                return(
		                      <li >

		                              <i className="iconfont love ">&#xe616;</i><span className="num">{this.props.data.keepNum}</span>

		                       </li>
                        )
	             }else{

			          return(     
			                      <li className="last-li" onClick={this.handleClick} >

			                          <i className="iconfont love bg-c">&#xe616;</i><span className="num">{this.props.data.keepNum}</span>

			                      </li>
			            )           

	             }

    	}.bind(this);


          let dressUl=function(){

          	 if(this.props.data==1||this.props.data==2||this.props.data==3||this.props.data==4||this.props.data==9){
                    
                  return "iconfont-ul "+indexCss.dress_iconfont_ul;
                    
          	 }else{
                
                return "iconfont-ul";
          	 }
          }.bind(this);


    	
       return (
         
             <ul className={dressUl()}>

                            {view()}

                            {keep()}

            </ul>
           
       ) 

    } 	


});


export default Collect;