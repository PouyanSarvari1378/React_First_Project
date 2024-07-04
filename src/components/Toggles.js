import * as React from 'react';
import { Toggle } from './shared/toggle';

export const Toggles = (props) => {
  const {boxes, showingBoxes, checkedHandler} = props
  

  return (
    <div>
      {
        boxes.map(box => <Toggle 
          key={box.id} 
          box={box} 
          showingBoxes={showingBoxes}
          checkedHandler={checkedHandler} />)
      }
    </div>
  )
}
