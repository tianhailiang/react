import React from 'react';

import $ from 'jquery';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Collect from './iconfontUl.jsx';

import AliveFresh from './AliveFresh.jsx';

import Gather from './Gather.jsx';

import Case from './Case.jsx';

import Dress from './Dress.jsx';

import WeddingHouse from './WeddingHouse.jsx';

var indexCss=require('../../css/indexDemo.css');

var WishList=React.createClass({

    getInitialState: function() {


          return {

             indexData:[],
             date:null,
             cityId:this.props.cityId
            
          }

     
          
    },

    handleClick(event){
    
      event.preventDefault();

    
    },

   componentDidMount: function() {

            
      // console.log(this.props.cityId) 

       var that=this;

        var param = {
                   type: "0",
                   city:this.props.cityId
              };

       var myHeaders = new Headers();
         

         var  myInit ={

                    method: 'GET',
                    headers: myHeaders,
                    cache: 'default',
                    
                };

         
          this.request =function(){

                   var testurl="../testData/index_0.json";
                   var useurl="http://192.168.2.60:8089/wishlist_mobile/mobile/getWishList?type="+param.type+"&city="+param.city;
                  
                  fetch(testurl,myInit)
                       
                        .then(function(response) {
                          return response.json();
                        })
                        .then(function(result) {
                            

                                 if(result.code==0){

                                     var listData=null;

                                      if(result.data.data!=null){

                                            listData=result.data.data;

                                      }else{
                                            listData=result.data;
                                      }

                                      
                                      
                                       this.setState({

                                           date:result.data.pubDate,
                                           indexData:listData
                                        
                                        });
                                      
                                     

                                     $(".lazy-img").lazyload({
          
                                            placeholder: "",
                                            threshold: 200,
                                            failurelimit : 10,
                         
                                      });    




                                 }else{

                                    console.log(result.msg)
                                 }


                          

                        }.bind(this)).catch(e => console.log("Oops, error", e));


                    }.bind(this); 




                    this.request(); 

            

                   this.mySwiper2 = new Swiper('#swiper-container2', {
                        

                         onSlideChangeStart: function (swiper) {

                                 
                                  let wid=document.querySelector(`.${indexCss.ibox}`).offsetWidth;
                                
                                  let distance = (swiper.activeIndex) * wid +"px" ;
                                 
                                  let ibox=Array.from(document.querySelectorAll(`.${indexCss.ibox}`));
                                  
                              
                                  for(let item of ibox){
                                  	  item.style.transform = "translateX(" + distance + ")";
                                  	  item.style.webkitTransform = "translateX(" + distance + ")";
                                  	 
                                  };
                                                              

                                  if($("#nav-box2").css("display")=="block"){

                                      $(window).scrollTop(214);
                                  }

                           },
                        

                        onSlideChangeEnd: function (swiper) {

                              $("#nav-box1 ul>li").find("a").removeClass('act');
                              $("#nav-box2 ul>li").find("a").removeClass('act');
                              $("#nav-box1 ul>li").eq(swiper.activeIndex).find("a").addClass("act");
                              $("#nav-box2 ul>li").eq(swiper.activeIndex).find("a").addClass("act");
                                 
                                param.type=swiper.activeIndex;
                               

                                  this.request();

                        }.bind(this),         

                  });  
                  
                  
                  let iboxClick=Array.from(document.querySelectorAll('.nav-box ul>li'));
                    console.log(iboxClick)
                 
                 for(let [index,elem] of iboxClick.entries()){
                 	//nav点击事件
                 	
                 	
                 	elem.addEventListener("click",function(event){
                 		  event.preventDefault();
                 		     
                 		     alert(1);
                 		     param.type=index;
                 		     
                 		
                 		     that.mySwiper2.slideTo(param.type , 500, false);
                 		  
                 		     let wid=document.querySelector(`.${indexCss.ibox}`).offsetWidth;
                                
                              let distance = index * wid +"px" ;
                             
                              let ibox=Array.from(document.querySelectorAll(`.${indexCss.ibox}`));
                              
                          
                              for(let item of ibox){
                              	  
                              	  item.style.transform = "translateX(" + distance + ")";
                              	  item.style.webkitTransform = "translateX(" + distance + ")";
                              	  
                              };
                              
                             that.request();
                 		
                    });		
                 }
                  



      

   },


   componentWillUnmount:function() {

     
         this.mySwiper2 =null;
        

  },


   render: function() {
    

       let listData = this.state.indexData.map((item,index)=>{
         
            if(item.type==8 || item.type==7){

                 var dHtml= <AliveFresh data={item} />;

                 var path=`/Alive_detail/${item.id}`;

             }else if(item.type==10){

                
                 var dHtml=<Gather data={item} />
               
             }else if(item.type==11){
                 
                   var dHtml=<Case data={item} />;

             }else if(item.type==1 || item.type==2 || item.type==3 || item.type==4 || item.type==9){

                    var dHtml=<Dress data={item} />

             }else if(item.type==6){
                 
                   var dHtml=<WeddingHouse data={item} />;

             }



           return     <li className="mar-t7" key={index}   >  
                         
                            <Link to={path} >
                              
                                 {dHtml}

                                 <Collect data={item} />

                            </Link>


                       </li>

       });

        
    return (
            
       
                 
                 <div className="swiper-container " id="swiper-container2"   >

                           <div className="swiper-wrapper">
             
                                      <div className="swiper-slide " >
                                                        

                                                     <div className={indexCss.date} >

                                                          {this.state.date}

                                                     </div>  

                                                        
                                                       <ul className={indexCss.wrapper_ul} >

                                                            {listData}

                                                       </ul>



                                      </div> 

                                        <div className="swiper-slide " >
     
                                               <ul className={indexCss.wrapper_ul} >

                                                            {listData}

                                               </ul>
                                      </div>

                                      <div className="swiper-slide " >
     
                                               <ul className={indexCss.wrapper_ul} >

                                                            {listData}

                                               </ul>
                                      </div>

                                      <div className="swiper-slide " >
     
                                               <ul className={indexCss.wrapper_ul} >

                                                            {listData}

                                               </ul>
                                      </div>




                            </div>                   

                   </div>

            

          )

   }

});

export default WishList;