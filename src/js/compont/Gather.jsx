
import React from 'react';

var indexCss=require('../../css/indexDemo.css');

var Gather = React.createClass({
   
    componentDidMount: function() {
        

        this.mySwiper3= new Swiper('.swiper-container3', {
          
          slidesPerView :'2.5',
          freeMode : true,
          spaceBetween : 7.5,
        
        });


   },
    componentWillUnmount:function() {

     
         this.mySwiper3 =null;
        

  },
    render: function() {

        let slideData = this.props.data.recommendList.map((item,index)=>{
              
              
        
             return ( 
                         <div className="swiper-slide" key={index}>

                                <img src={item.iconForList} alt=""  className={indexCss.activity_img}/>

                                <span className={indexCss.activity_price}>{item.price}</span>

                          </div>

                      )


        });

  
      return(

              <div>


                    <h2 className={indexCss.activity_h2}>

                           {this.props.data.title}
                            
                        </h2>

                        <h3 className={indexCss.activity_h3}>{this.props.data.description}</h3>
                        
                            <div className="swiper-container swiper-container3" >

                                       <div className="swiper-wrapper" >
                                               
                                            {slideData}

                                       </div>



                            </div>

                           
                             <div className={indexCss.activity_num}>
                                 
                                 <span> {this.props.data.num}件商品</span>

                             </div>

                          

                </div>      

        )


     }



});


export default Gather;