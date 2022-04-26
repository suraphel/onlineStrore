import React, { useState } from "react";

function DataForm() {
  const [add, setAdd] = useState([]);

  function FormHandler(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={FormHandler}>
        <label>Title</label>
        <input type="text" placeholder="title" />
        <button type="submit"> Add Item </button>
      </form>
    </div>
  );
}

export default DataForm;
