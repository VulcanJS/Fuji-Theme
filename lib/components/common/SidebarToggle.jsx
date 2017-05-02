import React from 'react';
import { registerComponent, Components } from 'meteor/vulcan:core';
import withUI from '../../containers/withUI.js';

const SidebarToggle = ({ui, toggleSidebar}) =>

  <div className="sidebar-toggle-wrapper">

    <a className="sidebar-toggle" href="#" onClick={toggleSidebar}>

      {ui.showSidebar ? <Components.Icon name="close"/> : <Components.Icon name="search"/>}

    </a>

  </div>

registerComponent('SidebarToggle', SidebarToggle, withUI);
