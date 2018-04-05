import React from "react";
import { Collapsible, CollapsibleItem } from 'react-materialize';

export default class HowTo extends React.Component {
  render() {
    return (
      <div>
        <h3>Ameen merchant app</h3>
        <Collapsible accordion defaultActiveKey={1}>
        <CollapsibleItem header='First' icon='assignment'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
        <CollapsibleItem header='Second' icon='place'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
        <CollapsibleItem header='Third' icon='whatshot'>
          Lorem ipsum dolor sit amet.
        </CollapsibleItem>
      </Collapsible>
      </div>
    );
  }
}
