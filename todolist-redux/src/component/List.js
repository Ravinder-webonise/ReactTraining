import React from "react";

function List({ data, renderItems }) {
  if (Array.isArray(data)) {
    return data.map((index, obj) => {
      return renderItems(obj, index);
    });
  } else {
    return <></>;
  }
}

export default List;
