import * as React from 'react';
import Column from './Column';
import { DragDropContext, DropResult, HookProvided } from 'react-beautiful-dnd';

const onDragEnd = (result: DropResult, provided: HookProvided): void => {
  return;
};

export default () => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Column key="1" day="Monday" />
        <Column key="2" day="Tuesday" />
      </div>
    </DragDropContext>
  );
};
