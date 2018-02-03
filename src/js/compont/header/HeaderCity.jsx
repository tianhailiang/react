import React from 'react';



var HeaderCity=React.createClass({

    

      handleClick(event){
    
         event.preventDefault();
      
         this.props.handleShowCity(!this.props.showCity);
    
    },       

      

      render: function() {

         

          return (
                
                  <li className="first" onClick={this.handleClick} >

                            <span className="header_city" >{this.props.city}</span>
                            <i className="iconfont icon_down">&#xe64a;</i>
                            
                  </li>

          	)

    }
});


export default  HeaderCity;