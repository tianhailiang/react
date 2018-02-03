
import React from 'react';

var indexCss=require('../../css/indexDemo.css');

var BannerLunbo=React.createClass({

    getInitialState: function() {
          return {
           
            src:[]
          };
    },

   componentDidMount: function() {
   	
   	   
       var myHeaders = new Headers();

      var myInit ={
                  method: 'GET',
                  headers: myHeaders,          
                  cache: 'default',

                };
                
          var testurl="../testData/banner.json";
          var useurl="http://192.168.2.60:8089/wishlist_mobile/mobile/getBannerList?type=1";      

         
       fetch(testurl,myInit).then((response) => { return response.json()})
           
           .then(function(result){

              if (this.isMounted()) {
                     
                   if(result.code==0){
                      alert(result)
                       console.log(result);
                      this.setState({
                          
                          src:result.data

                        });


                        this.mySwiper1 = new Swiper('#swiper-container1', {
                
                               pagination: '.swiper-pagination',

                               paginationClickable: false,
                               spaceBetween: 0,
                               centeredSlides: true,
                                autoplay: 2500,
                                autoplayDisableOnInteraction: false,
                                loop: true

                         });




                   }else{

                      console.log(result.msg);
                   }

                    
                }

           }.bind(this)).catch(e => console.log("Oops, error", e));



   },



   componentWillUnmount:function() {
       
       this.mySwiper1=null;
      

  },


   render: function() {
           
        
       let listData = this.state.src.map((item,index)=>{
           
          
           return    <div className="swiper-slide " key={index}> <img src={item.bannerUrl}  className={indexCss.carousel_img} /></div>

       });

      
                 

    return (
                    <div className={indexCss.swiper_container_box} >

                            <div className="swiper-container" id="swiper-container1">


                                   <div className="swiper-wrapper" >

                                          
                                                {listData}

                                          
                                    </div>

                                   <div className="swiper-pagination"></div>        
                              
                          </div>

                   </div>        

          )

   }

});


export default BannerLunbo;