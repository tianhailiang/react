import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, Link, browserHistory,IndexLink} from 'react-router';

import IndexStart from './compont/indexStart.jsx';

import  Alive_detail from './compont/wish/Alive_detail.jsx';


require('../css/common.css');

var App= React.createClass({

    render: function(){
         
      return (
             <div>

                {this.props.children}

              </div>
            )
        
    }

});





ReactDOM.render((

   <Router history={browserHistory}>
        <Route path="/" component={App}>

            <IndexRoute  component={IndexStart} />
            
          <Route path="/Alive_detail/:id" component={Alive_detail} />
          
          <Route path="/KefuList" getComponent={ (nextState, callback) =>{ 
              require.ensure( [ ], (require) => { 
                  callback(null, require("./compont/kefu/KefuList.jsx").default) 
              }) } } /> 

              
          <Route path="/KefuDetail" getComponent={ (nextState, callback) =>{ 
        require.ensure( [ ], (require) => { 
            callback(null, require("./compont/kefu/kefu_detail.jsx").default) 
        }) } } /> 


            <Route path="AccountList" getComponent={ (nextState, callback) =>{ 
                    require.ensure( [ ], (require) => { 
                        callback(null, require("./compont/detailed_account/account_list.jsx").default) 
                    }) } }  />


            
           </Route>

    </Router>




	), document.getElementById("app"));

