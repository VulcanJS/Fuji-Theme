import { Components, replaceComponent } from 'meteor/vulcan:lib';
import React, { PropTypes, Component } from 'react';

const FujiLayout = props => 
  
  <div className="wrapper" id="wrapper">

      <Components.HeadTags />

      <Components.UsersProfileCheck {...props} />

      <Components.Header {...props}/>
    
      <div className="main">

        <div className="main-inner">

          <Components.FlashMessages />

          <div className="main-content">
          
            <Components.Sidebar />

            <div className="center-content">

              {props.children}

            </div>

          </div>
          
        </div>

        {/*<Components.Newsletter />*/}

      </div>
    

      <Components.Footer {...props}/>
    
    </div>

replaceComponent('Layout', FujiLayout);