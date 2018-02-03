import React from 'react';

var indexCss=require('../../css/indexDemo.css');

var AliveFresh=React.createClass({

     render: function() {

        var location=function(){

            if(this.props.data.type==7){

            	return (
                         
                          <div className={indexCss.address_box}>

                                <i className="iconfont icon_location">&#xe604;</i><span className={indexCss.address}>{this.props.data.location}</span>
                                               

                          </div>      


            		)

            }else{

            	return null;
            }

        }.bind(this);   


        var subtitle=function(){
            
            if(this.props.data.type==8){

               return    <p className={indexCss.art_bot}>{this.props.data.subtitle}</p>

            }else{

                return null;
            }

        }.bind(this);


       return(

           <dl>
               <dt >
                    <img className="lazy-img " data-original={this.props.data.iconForList} width="100%"height="200"/>
                </dt>
              <dd>
                 <div className={indexCss.describe}>
                     <p className={indexCss.art_top}>{this.props.data.title}</p>
                      {subtitle()}
                   
                     <div className={indexCss.come}>

                          <div className={indexCss.from_box}>
                             <span className={indexCss.form}>Form</span><i className="editorName">{this.props.data.editorName}</i>
                          </div>
                         
                         {location()}

                     </div>

                  </div>

              </dd>

            </dl>


        )


     }


});


export default AliveFresh;