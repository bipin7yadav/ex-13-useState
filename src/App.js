import "./styles.css";

export default function App() {
  const productArray = [
    { id: 1, name: "mobile", dcrp: "qwerty", price: "$300", outOfStock: false },
    { id: 2, name: "mobile", dcrp: "qwerty", price: "$300", outOfStock: true },
    { id: 3, name: "mobile", dcrp: "qwerty", price: "$300", outOfStock: true }
  ];
  return (
    <div className="App">
      <h1>
        Hindi <span>Kart</span>
      </h1>
      {productArray.map((a) => {
        return (
          <div className="product">
            <p>product: {a.id}</p>
            <h3>{a.name}</h3>
            <p>{a.price}</p>
            <p>{a.dcrp}</p>
            <p
              style={a.outOfStock ? { display: "block" } : { display: "none" }}
            >
              outOfStock
            </p>
          </div>
        );
      })}
    </div>
  );
}
