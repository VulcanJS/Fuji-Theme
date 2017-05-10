import { Components, replaceComponent } from 'meteor/vulcan:lib';
import React, { PropTypes, Component } from 'react';
import Sidebar from 'react-sidebar';
import withUI from '../../containers/withUI.js';
import classNames from 'classnames';

const smallBreak = 850;

class FujiLayout extends Component {
  
  constructor(props) {
    super();
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {

      const mql1 = window.matchMedia(`(max-width: ${smallBreak}px)`);
      const mql2 = window.matchMedia(`(min-width: ${smallBreak+1}px)`);

      const setBp1 = () => {
        if (window.innerWidth <= smallBreak) this.props.setBreakPoint('small');
      };
      const setBp2 = () => {
        if (window.innerWidth > smallBreak) this.props.setBreakPoint('medium')
      };
      
      if (mql1.matches) setBp1();
      if (mql2.matches) setBp2();

      mql1.addListener(setBp1);
      mql2.addListener(setBp2);
    }
  }

  render() {

    return (
  
      <Sidebar 
        sidebar={<Components.Sidebar />} 
        onSetOpen={this.props.toggleSidebar} 
        sidebarClassName="sidebar-wrapper"
        pullRight={true}
        docked={this.props.ui.showSidebar && this.props.ui.breakpoint === 'medium'}
        open={this.props.ui.showSidebar && this.props.ui.breakpoint === 'small'}
        touch={false}
      >

        <div className={classNames('wrapper', `wrapper-${this.props.ui.breakpoint}`)} id="wrapper">

          <Components.HeadTags />

          <Components.UsersProfileCheck currentUser={this.props.currentUser} documentId={this.props.currentUser && this.props.currentUser._id} />

          <Components.Header />
        
          <div className="main-wrapper">

            <div className="main">

              <Components.FlashMessages />

              <div className="main-content">
                          
                {this.props.children}

              </div>
                            
            </div>

            {/*<Components.Newsletter />*/}

          </div>
        

          <Components.Footer />
        
        </div>

      </Sidebar>

    )

  }

}
replaceComponent('Layout', FujiLayout, withUI);