import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import { Dropdown } from 'semantic-ui-react'


class CheckSemantic extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      options : [
        {
          key: 'ux',
          text: 'User Experience',
          value: 'ux'
        }
      ]
    }
  }
  render() {
    return (
      <Dropdown placeholder='Skills' fluid multiple selection options={this.state.options} />
    );
  }
}

Meteor.startup(() => {
  render(<CheckSemantic />, document.getElementById('app'));
});
