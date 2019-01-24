import React from 'react';
import GoldenLayout from 'golden-layout';

class TestComponent extends React.Component {
  onPopOut = () => {
    this.props.glContainer.parent.popout()
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.onPopOut}>pop out</button>
        <h1>{this.props.label}</h1>
      </React.Fragment>
    )
  }
}

var myLayout = new GoldenLayout({
  content: [{
    type: 'row',
    content:[{
      type:'react-component',
      component: 'Test-component',
      props: { label: 'A' }
    },{
      type: 'column',
      content:[{
        type:'react-component',
        component: 'Test-component',
        props: { label: 'B' }
      },{
        type:'react-component',
        component: 'Test-component',
        props: { label: 'C' }
      }]
    }]
  }]
});

myLayout.registerComponent('Test-component', TestComponent );

myLayout.init();



export default TestComponent;