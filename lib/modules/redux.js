import { addAction, addReducer } from 'meteor/vulcan:core';

// register messages actions
addAction({
  ui: {
    toggleSidebar(event) {
      if (event) event.preventDefault();
      return {
        type: 'TOGGLESIDEBAR',
      };
    },
    setBreakPoint(breakpoint) {
      return {
        type: 'SETBREAKPOINT',
        breakpoint
      };
    },
  }
});

// register messages reducer
addReducer({
  ui: (state = {showSidebar: false}, action) => {
    switch(action.type) {
      case 'TOGGLESIDEBAR':
        return {
          ...state,
          showSidebar: !state.showSidebar
        };
      case 'SETBREAKPOINT':
        return {
          ...state,
          breakpoint: action.breakpoint
        };
      default:
        return state;
    }
  },
});