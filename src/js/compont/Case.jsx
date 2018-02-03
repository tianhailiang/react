import React from 'react';

var indexCss=require('../../css/indexDemo.css');

var Case=React.createClass({

    render: function() {

       let environment=this.props.data.environment==0?"室内":"室外";

        let label= this.props.data.style.map((item,index)=>{
           
         return  <i key={index}>{item}</i>

      });


      let tint =this.props.data.main.map((item,index)=>{

           

              
            return  <li  key={index} style={{backgroundColor:"#"+item}}></li>

      });

       return(

           <dl>
                <dt>

                    <img  className="lazy-img "   data-original={this.props.data.iconForList} width="100%" height="200" />

                </dt>

                <dd>

                       <div className={indexCss.describe}>

                              <div className={indexCss.introduce_works_title} >
        
                                    <span className={indexCss.introduce_caption}>{this.props.data.title}</span>
                                        
                                      {label}
                                      <i>{environment}</i>
                                    
                               </div>  

                                  <ul className={indexCss.planning_color}>
                                    
                                      {tint}

                                   </ul>

                                   <div className={indexCss.introduce_planner} >
                                       
                                       <i>Wedding Planner</i> <span>{this.props.data.editorName}</span>

                                   </div>


                        </div>

                    </dd>

              </dl>



        )


     }


});



export default Case;