function App() {
  const products = [
    {
      id: "p1",
      name: "Coffee",
      cost: 15.99,
      img: "../IMAGES/MERCH/bagsOfBeans.png",
      roast: "TBD",
    },
    {
      id: "p2",
      name: "T-Shirt",
      cost: 25.99,
      img: "../IMAGES/MERCH/tShirt.png",
      size: "TBD",
    },
    {
      id: "p3",
      name: "Cap",
      cost: 27.99,
      img: "../IMAGES/MERCH/hat.png",
    },
    {
      id: "p4",
      name: "Mug",
      cost: 19.99,
      img: "../IMAGES/MERCH/mug.png",
    },
    {
      id: "p5",
      name: "Tote",
      cost: 13.99,
      img: "../IMAGES/MERCH/toteBag.png",
    },
    {
      id: "p6",
      name: "Tumbler",
      cost: 22.99,
      img: "../IMAGES/MERCH/tumbler.png",
    },
  ];

  return (
    <div>
      <MainProduct
        name={products[0].title}
        cost={products[0].cost}
        roast={products[0].roast}
      ></MainProduct>
      <MainProduct
        name={products[1].title}
        cost={products[1].cost}
        size={products[1].size}
      ></MainProduct>
      <MainProduct
        name={products[2].title}
        cost={products[2].cost}
      ></MainProduct>
      <MainProduct
        name={products[3].title}
        cost={products[3].cost}
      ></MainProduct>
      <MainProduct
        name={products[4].title}
        cost={products[4].cost}
      ></MainProduct>
      <MainProduct
        name={products[5].title}
        cost={products[5].cost}
      ></MainProduct>
    </div>
  );
}

export default App;
