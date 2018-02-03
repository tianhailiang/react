import React from 'react';

var indexCss=require('../../css/indexDemo.css');

var WeddingHouse=React.createClass({

   render: function() {
        
        return (

               <dl>

                         <dt>

                               <img  className="lazy-img "   data-original={this.props.data.iconForList} width="100%" height="200" />

                         </dt>

                          <dd>

                                <div className={indexCss.describe}>

                                                 <p className={indexCss.art_top}>{this.props.data.title}</p>

                                                 <div className={ indexCss.house_box}>
                                                       <p className={indexCss.art_bot}>

                                                               {this.props.data.AWord}

                                                               
                                                       </p>
                                                       <div className={indexCss.house_address}>

                                                                 <i className="iconfont icon_location">&#xe604;</i>
                                                                 <span className={indexCss.address}>{this.props.data.location}</span>
                                                       
                                                       </div>     


                                                </div>
                                                 


                                </div>


                      </dd>


                 </dl>


        	) 

  
  }

});


export default WeddingHouse;