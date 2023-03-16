import React from 'react';
import './index.scss';

//полная функция счетчика
function App() {
  const [count, setCount] = React.useState(0);

  //функция счетчика в отрицательном направлении
  const onClickMinus = () => {
    setCount(count-1);
  }

  //функция счетчика в положительном направлении
  const onClickPlus = () => {
    setCount(count+1);
  }

  return (
    <div className="App">
      <div>
        {/*Сам результат счетчика */}
        <h2>Counter:</h2>
        <h1>{count}</h1>
        {/*Кнопка запуска счетчика в отрицательном направлении */}
        <button onClick={onClickMinus} className="minus">- Minus</button>
        {/*Кнопка запуска счетчика в положительном направлении */}
        <button onClick={onClickPlus} className="plus">Plus +</button>
      </div>
    </div>
  )
}

export default App;