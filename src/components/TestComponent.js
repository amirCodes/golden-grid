import React from 'react';
import GoldenLayout from 'golden-layout';

class TestComponent extends React.Component {
  state = {
    layout: {}
  }

  onPopOut = () => {
    this.props.glContainer.parent.popout()
  }

  render() {
    const config = {
      content: [{
          type: 'row',
          content:[{
              type: 'component',
              componentName: 'Test-component',
              componentState: { label: 'A' }
          },{
              type: 'column',
              content:[{
                  type: 'component',
                  componentName: 'Test-component',
                  componentState: { label: 'B' }
              },{
                  type: 'component',
                  componentName: 'Test-component',
                  componentState: { label: 'C' }
              }]
          }]
      }]
    };
    
    let myLayout,
      savedState = localStorage.getItem('savedState');
    
    if( savedState !== null) {
      myLayout = new GoldenLayout( JSON.parse( savedState ));
    } else {
      myLayout = new GoldenLayout( config )
    }
    
    myLayout.registerComponent('Test-component', TestComponent );
    
    myLayout.init();

    //this stores the layout postion to the local storage
    //future possible optimization, have a save button to save the state because this function will fire on every layout change which can be expensive
    myLayout.on('stateChanged', function(){
      const state = JSON.stringify( myLayout.toConfig() );
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





export default TestComponent;