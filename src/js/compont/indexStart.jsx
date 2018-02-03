import React from 'react';

import $ from 'jquery';

import Swiper from '../widget/swiper-3.3.1.min.js';

import BannerLunbo from './BannerLunbo.jsx';

import WishList from './WishList.jsx';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import HeaderCity from './header/HeaderCity.jsx';

import HeaderService from './header/HeaderService.jsx';

import HeaderBell from './header/HeaderBell.jsx';

import GainCity from './header/GainCity.jsx';
     
var indexCss=require('../../css/indexDemo.css');


var lazyLoad=require('../widget/jquery.lazyload.js');

lazyLoad($, window, document);


const FooterNav=React.createClass({

  render:function(){

      return (

             <footer className="footer-box footer-fixed"  >

                       <nav>

                            <ul >

                               <li >
                                         <span className="ico-wish iconfont" style={{color:'#e8796e'}}>&#xe61d;</span>

                                          <i style={{color:'#e8796e'}}>心愿</i>

                              </li>

                              <li>

                                  <Link to="AccountList" >

                                             <span className="iconfont ico-list">&#xe606;</span>

                                              <i>清单</i>

                                  </Link>       

                              </li>

                            

                              <li >

                                          <span className="iconfont ico-miccenter">&#xe61e;</span>

                                          <i>我的</i>

                              </li>

                            </ul>



                 </nav>


        </footer>
         


        )
  }


})


var IndexStart= React.createClass({
  

    getInitialState: function() {
          return {

             city:"北京",
             cityList:[],
             showCity:false,
             cityId:''
            
          }

     
          
    },
  
  handleSelectCity(se,sh){
    
    this.setState({
       city:se,
       showCity:sh
    })

  },
  
  handleShowCity(val){

     
     this.setState({showCity: val});

  },


  componentDidMount: function() {
         
          

        this.getCity=function(){
           //获取城市接口
               let testurl='../testData/getCity.json';

               let useurl="http://192.168.2.60:8089/wishlist_mobile/mobile/getDataCategoryCity";
 
                
                   fetch(testurl)
                           //获取城市    

                                .then(function(response) {
                                  return response.json();
                                })
                                .then(function(result) {

                                    
                                         if(result.code==0){

                                              this.setState({

                                                    city:result.data[0].name,
                                                    cityList:result.data,
                                                    cityId:result.data[0].id
                                                   
                                              });



                                         }else{

                                            console.log(result.msg)
                                         }


                                  

                }.bind(this)).catch(e => console.log("Oops, error", e));  

        }.bind(this);

        
         this.getCity();



          $(window).on("scroll",function(){
            //滚动事件

                     if($(this).scrollTop()>=214){
                        

                          $("#nav-box2").show();

                     }else{

                            $("#nav-box2").hide();
                     }

                     $(".lazy-img").lazyload({
                            
                                placeholder: "",
                                threshold: 200,
                            

                    }); 

                   

         });
 


    },


   componentWillUnmount:function() {

       
  },



  
  render: function() {

      
           
       let showCity=this.state.showCity ? <GainCity data={this.state.cityList} handleSelectCity={this.handleSelectCity} showCity={this.state.showCity} /> :null;
     

    return (



          <div  className={indexCss.index_box} >  

                  <header  className="header_box" style={{backgroundColor:"#fff"}}>

                            <ul className="header_box_ul">

                                 <HeaderCity  city={this.state.city}  handleShowCity={this.handleShowCity} showCity={this.state.showCity} cityId={this.state.cityId} />

                                <li className="second">
                                  
                                    <i className="ico_wish_title"></i>
                                    <span className="header_title">WISH LIST</span>

                                </li>
                                
                                <li className="last">
                                    
                                  
                                    <HeaderBell />
                                    <HeaderService />

                                </li>

                              
                          </ul>

                 </header>

                  {showCity}

        
                 <BannerLunbo />
               
                 <nav className="nav-box" id="nav-box1">


                      <ul >
                     

                            <li>

                              <a className="act">心愿精选

                              </a>


                            </li>

                            <li>


                              <a >鲜货攻略</a>

                            </li>

                            <li>


                               <a >体验活动</a>

                            </li>

                            <li>
                              

                               <a>真实案列</a>


                            </li>
                                  

                                

                          </ul>


                           <div className={indexCss.indicate} >

                                 

                                 <div className={indexCss.ibox} ></div>

                                 

                           </div>

                 </nav>  


                 <WishList  cityId={this.state.cityId}  />

                 
                
                 <FooterNav />

                 {/*<!-- ==模拟nav== -->*/}



                   <nav className="nav-box top_fixed hide" id="nav-box2">

                      <ul >

                            <li>

                              <a className="act" >心愿精选

                              </a>

                            </li>

                            <li>

                              <a >鲜货攻略</a>

                            </li>

                            <li>

                               <a >体验活动</a>

                            </li>

                            <li>

                               <a>真实案列</a>

                            </li>

                          </ul>


                   {/*<!-- =====animate 指示器===== -->*/}

                   <div className={indexCss.indicate} >

                         <div className={indexCss.ibox} ></div>

                   </div>


                </nav>

          </div>  
         
        
       
 
       
    );
  }

});






export default IndexStart;