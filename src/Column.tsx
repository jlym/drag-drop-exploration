import * as React from 'react';
import { Card } from './Card';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

interface Props {
  day: string;
}

export default (props: Props) => {
  const cards: JSX.Element[] = [
    (
      <Card 
        key="1" 
        description="card 1"
        index={1}
        draggableId={props.day + '1'}
      />
    ),
    (
      <Card 
        key="2" 
        description="card 2"
        index={2}
        draggableId={props.day + '2'}
      />
    )
  ];
  return (
    <Droppable droppableId={props.day}>    
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>{props.day}</div>
          {cards}
        </div>
      )}      
    </Droppable>
  );
};
