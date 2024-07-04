import * as React from 'react';
import { Box } from './shared/Box';

export const Boxes = (props) => {
    const {boxes} = props
  return (
    <div>
        {boxes.map(box => box && <Box key={box.id} title={box.title} />)}
    </div>
  )
}
