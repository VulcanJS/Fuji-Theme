import { addAction, addReducer } from 'meteor/vulcan:core';

// register messages actions
addAction({
  ui: {
    toggleSidebar(event) {
      event.preventDefault();
      return {
        type: 'TOGGLESIDEBAR',
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
      default:
        return state;
    }
  },
});