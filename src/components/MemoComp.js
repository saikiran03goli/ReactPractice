import React from 'react';

function MemoComp(props) {
  console.log("Rendering Memo Comp");
  return (
    <div>
      {props.name}
    </div>
  );
}

export default React.memo(MemoComp);