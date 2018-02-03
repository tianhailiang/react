import React from 'react';

var indexCss=require('../../css/indexDemo.css');

var Dress=React.createClass({

	 render: function() {
        
        let heig=function(){
               
               if(this.props.data.type==4 || this.props.data.type==9){

                   return 200;
               }else{

                  return 500;
               }

        };

     return (

     	       <dl>

                     <dt >

                            <img  className="lazy-img "   data-original={this.props.data.iconForList} width="100%"  height={heig} />

                     </dt>

                     <dd>
                         
                           <div className={indexCss.dress} >
                                 
                                 <span className={indexCss.dress_name}>{this.props.data.title}</span>

                                 <span className={indexCss.dress_price}>{this.props.data.price}</span>
                                
                          </div>

                    </dd>
                    
              </dl>            

     	)	 
                              	

   }

 });  

export default Dress;