import React from 'react';
import GoldenLayout from 'golden-layout';

class TestComponent extends React.Component {
  onPopOut = () => {
    this.props.glContainer.parent.popout()
  }

  render() {
    layoutConfig.on( 'stateChanged', function(){
      var state = JSON.stringify( layoutConfig.toConfig() );
      localStorage.setItem( 'savedState', state );
    });
    
    return (
      <React.Fragment>
        <button onClick={this.onPopOut}>pop out</button>
        <h1>{this.props.label}</h1>
      </React.Fragment>
    )
  }
}

const defaultConfig = new GoldenLayout({
  content: [{
    type: 'row',
    content:[{
      type:'react-component',
      component: 'TestComponent',
      props: { label: 'A' }
    },{
      type: 'column',
      content:[{
        type:'react-component',
        component: 'TestComponent',
        props: { label: 'B' }
      },{
        type:'react-component',
        component: 'TestComponent',
        props: { label: 'C' }
      }]
    }]
  }]
});

const savedLayout = localStorage.getItem( 'savedState' );

let layoutConfig;

if( savedLayout !== null) {
  layoutConfig = new GoldenLayout( JSON.parse( savedLayout ) );
} else {
  layoutConfig = new GoldenLayout( defaultConfig )
}

layoutConfig.registerComponent('TestComponent', TestComponent );

layoutConfig.init();



export default TestComponent;