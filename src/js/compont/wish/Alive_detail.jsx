import React from 'react'
import { withRouter } from 'react-router'

var my = require('../../../css/wish.css');


var IntervalMixin={
  
  setInterval:function(callback,interval){
    var token=setInterval(callback,interval);
    this.__intervals.push(token);
    return token;

  },
  componentDidMount:function(){
    this.__intervals=[];
  },
  componentWillUnmount:function(){
    this.__intervals.map(clearInterval);
  }


};


var Since2014=React.createClass({
  
    mixins:[IntervalMixin],
 

    componentDidMount:function(){
       this.setInterval(this.forceUpdate.bind(this),1000);
    },

    render:function(){
      
             var to = 0;

        return (
            


             <div>{to}</div>

          )

    }

});

const Alive_detail = React.createClass({
 
 
  componentDidMount() {
  	  const id = this.props.params.id;
      console.log(id);

    this.props.router.setRouteLeaveHook(this.props.route, () => {
     
        alert("你确定要离开")
    });

   
  },

  componentWillUnmount:function(){

       
  },

  render() {
    return (
        <div className={my.aliveBox}>
        
                 <h1 >鲜活详情</h1>
               
                 <Since2014 />

        </div>

     )   
  }

})

export default withRouter(Alive_detail)


