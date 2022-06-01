// import React, { useState, useRef } from "react";

// function DataForm(props) {
//   const [add, setAdd] = useState([]);

//   function FormHandler(event) {
//     event.preventDefault();

//   }

//   return (
//     <div>
//       <form onSubmit={FormHandler}>
//         <label>Title</label>
//         <input type="text" placeholder="Title" ref={title} />
//         <label>Price</label>
//         <input type="number" placeholder="Price" ref={price} required />
//         {/* <label>AvatarUrl</label> */}
//         <input type="url" placeholder="AvatarUrl" ref={avatarUrl} />
//         <label>ImageUrl</label>
//         <input type="url" placeholder="ImageUrl" ref={imageUrl} />
//         <label>Sample</label>
//         <input type="text" placeholder="Sample" ref={sample} required />

//         <label>Description</label>
//         <textarea
//           type="text"
//           rows="5"
//           placeholder="Description"
//           ref={description}
//         ></textarea>

//         <button type="submit"> Add Item </button>
//         <button onClick={addProduct}> Add Item II </button>
//         <button onClick={submitHandler}>test me</button>
//       </form>
//     </div>
//   );
// }

// export default DataForm;

// /* collect the data :
//    avatarSrc,
//     avatarUrl,
//     title,
//     subtitle,
//     price,
//     imgSrc,
//     imageUrl,
//     description,
// take in all the necessary info and add it to the db
// fetch it from the db
// render it
// */
