import * as React from 'react';
import { 
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot
} from 'react-beautiful-dnd';

export interface Props {
  description: string;
  draggableId: string;
  index: number;
}

export const Card = (props: Props) => (
  <Draggable key="1" draggableId={props.draggableId} index={props.index}>
    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div
          style={{
            border: 'solid 2px',
            padding: '30px',
            margin: '5px',
            borderRadius: '7px',
            background: 'white',
          }}
        >
          {props.description}
        </div>        
      </div>
    )}
  </Draggable>
);
