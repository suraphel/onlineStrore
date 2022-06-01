import AddProductForm from "./AddProductForm";

function AddProduct() {
  //   const [add, setAdd] = useState([]);

  async function AddProductHandler(productObject) {
    const response = await fetch(
      "https://firetest-a4733-default-rtdb.europe-west1.firebasedatabase.app/product.json",
      {
        method: "POST",
        body: JSON.stringify(productObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  //   function FormHandler(event) {
  //     event.preventDefault();

  //     // const inputtedprice = price.current.value;
  //     // const inputtedTittle = title.current.value;
  //     // const inputtedavatarUrl = avatarUrl.current.value;
  //     // const inputtedimageUrl = imageUrl.current.value;
  //     // const inputtedsample = sample.current.value;
  //     // const inputteddescription = description.current.value;

  //     // setAdd(inputtedTittle);

  //     // props.onAddItems({
  //     //   title: inputtedTittle,
  //     //   price: inputtedprice,
  //     //   avatarUrl: inputtedavatarUrl,
  //     //   imageUrl: inputtedimageUrl,
  //     //   sampel: inputtedsample,
  //     //   description: inputteddescription,
  //     // });

  //     // need to check this
  //   }

  //   async function addProduct(productObject) {
  //     const response = await fetch(
  //       "https://firetest-a4733-default-rtdb.europe-west1.firebasedatabase.app/",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(productObject),
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });

  // make the input available in other parts
  //}
  return (
    <div>
      <AddProductForm onAddProductForm={AddProductHandler} />
    </div>
  );
}

export default AddProduct;
