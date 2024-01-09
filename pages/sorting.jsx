import React, { useState,useCallback, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = 'ITEM';



const LIST = ({item})=>{
  // console.log(text)
   return <>
    <div style={{padding:'4px'}}>
    <p style={{color:"#4f4e4a"}}>{JSON.stringify(item)}</p>
   
    </div>
   </>
}


const DraggableItem = ({ id, index, item, moveItem, children }) => {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemType,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(draggedItem,monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = draggedItem.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine the rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      draggedItem.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;
  const boxShadow = isDragging ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "none";
  const border = isDragging ? "2px dashed gray" : "2px solid gray";
  drag(drop(ref));

  return (
    <div ref={ref} style={{ padding: '8px', marginBottom: '4px',  backgroundColor: "white", opacity,border,boxShadow }} data-handler-id={handlerId}>
      {React.cloneElement(children, { draggable: false })} {/* Disable dragging on the child component */}
    </div>
  );
};

// const DraggableItem = ({ id,item, index, moveItem }) => {
//   const ref = useRef(null)
//   // const [, ref] = useDrag({
//   //   type: ItemType,
//   //   item: { index },
//   // });

//   // const [, drop] = useDrop({
//   //   accept: ItemType,
//   //   hover: (draggedItem) => {
//   //     if (draggedItem.index !== index) {
//   //       moveItem(draggedItem.index, index);
//   //       draggedItem.index = index;
//   //     }
//   //   },
//   // });

  



//   const [{ handlerId }, drop] = useDrop({
//     accept: ItemType,
//     collect(monitor) {
//       return {
//         handlerId: monitor.getHandlerId(),
//       };
//     },
//     hover(item, monitor) {
//       if (!ref.current) {
//         return;
//       }
//       const dragIndex = item.index;
//       const hoverIndex = index;
//       // Don't replace items with themselves
//       if (dragIndex === hoverIndex) {
//         return;
//       }
//       // Determine rectangle on screen
//       const hoverBoundingRect = ref.current?.getBoundingClientRect();
//       // Get vertical middle
//       const hoverMiddleY =
//         (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//       // Determine mouse position
//       const clientOffset = monitor.getClientOffset();
//       // Get pixels to the top
//       const hoverClientY = clientOffset.y - hoverBoundingRect.top;
//       // Only perform the move when the mouse has crossed half of the items height
//       // When dragging downwards, only move when the cursor is below 50%
//       // When dragging upwards, only move when the cursor is above 50%
//       // Dragging downwards
//       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//         return;
//       }
//       // Dragging upwards
//       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//         return;
//       }
//       // Time to actually perform the action
//       moveItem(dragIndex, hoverIndex);
//       // Note: we're mutating the monitor item here!
//       // Generally it's better to avoid mutations,
//       // but it's good here for the sake of performance
//       // to avoid expensive index searches.
//       item.index = hoverIndex;
//     },
//   });

//   const [{ isDragging }, drag] = useDrag({
//     type: ItemType,
//     item: () => {
//       return { id, index };
//     },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });
 
//   const opacity = isDragging ? 0 : 1;
//   drag(drop(ref));
//   return (
//     <div ref={ref} style={{ padding: '8px', border: '1px solid #ccc', marginBottom: '4px' ,opacity}} data-handler-id={handlerId}>
//       <LIST text={item}/>
//      {/* { cards.map((card, i) => renderCard(card, i))} */}

//     </div>
//   );
// };

// const SortableList = () => {
//   const [cards, setCards] = useState([
//     {
//       id: 1,
//       text: 'Write a cool JS library',
//       title:"this is Library titile"
//     },
//     {
//       id: 2,
//       text: 'Make it generic enough',
//       title:"this is Library titile"
//     },
//     {
//       id: 3,
//       text: 'Write README',
//       title:"this is Library titile"
//     },
//     {
//       id: 4,
//       text: 'Create some examples',
//       title:"this is Library titile"
//     },
//     {
//       id: 5,
//       text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
//       title:"this is Library titile"
//     },
//     {
//       id: 6,
//       text: '???',
//       title:"this is Library titile"
//     },
//     {
//       id: 7,
//       text: 'PROFIT',
//       title:"this is Library titile"
//     },
//   ])
//   const [items, setItems] = useState(cards);

//   const moveItem = (fromIndex, toIndex) => {
//     console.log(fromIndex, toIndex)
//     const newItems = [...items];
//     const [movedItem] = newItems.splice(fromIndex, 1);
//     newItems.splice(toIndex, 0, movedItem);
//     setItems(newItems);
//   };

//   console.log(items,'items');

//   return (
//     <div>
//       <DndProvider backend={HTML5Backend}>
//         {items.map((item, index) => (
//           <DraggableItem id={item.id} key={index} index={index} item={item} moveItem={moveItem} />
//         ))}
//       </DndProvider>
//     </div>
//   );
// };


const SortableList = ({ handleMove = () => {},customComponent: CustomComponent = LIST ,data}) => {
  // console.log(CustomComponent,'dd')
  const [cards, setCards] = useState([
    // ... your card data
  ]);

  const [items,setItems] = useState(data||[])
  // const [items, setItems] = useState( [
  //   {
  //         id: 1,
  //         text: 'Write a cool JS library',
  //         title:"this is Library titile"
  //       },
  //       {
  //         id: 2,
  //         text: 'Make it generic enough',
  //         title:"this is Library titile"
  //       },
  //       {
  //         id: 3,
  //         text: 'Write README',
  //         title:"this is Library titile"
  //       },
  //       {
  //         id: 4,
  //         text: 'Create some examples',
  //         title:"this is Library titile"
  //       }, {
  //               id: 5,
  //               text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
  //               title:"this is Library titile"
  //             },
  //             {
  //               id: 6,
  //               text: '???',
  //               title:"this is Library titile"
  //             },
  //             {
  //               id: 7,
  //               text: 'PROFIT',
  //               title:"this is Library titile"
  //             }
  //           ]);

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setItems(newItems);
    handleMove(newItems)
    // console.log(newItems)
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        {items.map((item, index) => (
          <DraggableItem key={item.id} id={item.id} index={index} item={item} moveItem={moveItem}>
            <CustomComponent item={item} />
          </DraggableItem>
        ))}
      </DndProvider>
    </div>
  );
};


export default SortableList;
