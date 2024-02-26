import './App.css';
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  const onClickHotDealsHandler = () => setProducts([
    {
      id: 1,
      name: "청소기222",
      price: 524700
    },
    {
      id: 2,
      name: "드라이기",
      price: 35000
    },
    {
      id: 3,
      name: "믹서기",
      price: 88000
    }
  ])
  

  const onClickBooksHandler = () => setProducts([
    {
      id: 1,
      name: "참고서",
      price: 17600
    },
    {
      id: 2,
      name: "소설",
      price: 16500
    },
    {
      id: 3,
      name: "시",
      price: 13000
    }
  ])

  return (
    <div className="App">
      <button onClick={onClickHotDealsHandler}>
        Hot Deals
      </button>
      <button onClick={onClickBooksHandler}>
        Books
      </button>

        <div style={{display: "flex", justifyContent: "space-around", "margin-top": "20px"}}>
          {
            products?.map(product => (
              <div key={product.id} style={{
                padding: "10px",
                border: "1px solid black"
              }}>
                <div>
                  사진 !!!
                </div>
                <div>
                  <p>
                    {product.name}
                  </p>
                </div>
                <div>
                  <p>
                    {product.price}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  );
}

export default App;
