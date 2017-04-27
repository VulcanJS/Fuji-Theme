import { Components, replaceComponent } from 'meteor/vulcan:lib';
import React, { PropTypes, Component } from 'react';
import Sidebar from 'react-sidebar';
import withUI from '../../containers/withUI.js';

const FujiLayout = props => 
  
  <Sidebar sidebar={<Components.Sidebar />} open={props.ui.showSidebar} onSetOpen={props.toggleSidebar} sidebarClassName="sidebar-wrapper">

    <div className="wrapper" id="wrapper">

      <Components.HeadTags />

      <Components.UsersProfileCheck {...props} />

      <Components.Header {...props}/>
    
      <div className="main-wrapper">

        <div className="main">

          <Components.FlashMessages />

          <div className="main-content">
          
            <a href="#" onClick={props.toggleSidebar}>toggle</a>
            
            <div className="center-content">

              {props.children}

            </div>

          </div>
          
        </div>

        {/*<Components.Newsletter />*/}

      </div>
    

      <Components.Footer {...props}/>
    
    </div>

  </Sidebar>

replaceComponent('Layout', FujiLayout, withUI);