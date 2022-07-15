function App() {
  return (
    <div className="wrapper clear">

        <div className="overlay">
          <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Корзина <img className="removeBtn" src="/img/btn-close.svg" alt="btnRemove" /></h2>

              <div className="items">
                  <div className="cartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                      <b>3122 грн.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-close.svg" alt="btnRemove" />
                </div>

                <div className="cartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg"></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                      <b>3122 грн.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-close.svg" alt="btnRemove" />
                </div>
              </div>

              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>13 321 грн.</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>321 грн.</b>
                  </li>
                </ul>

                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
              </div>

          </div>
        </div>

        <header className="d-flex justify-between align-center p-40">
           <div className="d-flex align-center">
           <img width={40} height={40} src="/img/logo.png" />
            <div> 
                <h3 className="text-uppercase">React sneakers</h3>
                <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
           </div>
              <ul className="d-flex">
                  <li className="mr-30"><img width={18} height={18} src="/img/cart.svg"/><span>1205 грн.</span></li>
                  <li><img width={18} height={18} src="/img/user.svg" /></li>
              </ul>
        </header>
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
              <div className="search-block d-flex">
                <img src="/img/search.svg" alt="search" />
                <input type="text" placeholder="Поиск..." />
              </div>
          </div>

            <div className="d-flex">
            <div className="card">
              <div className="favorite"><img src="/img/heart-unlike.svg" alt="heartUn" /></div>
              <img width={133} height={112} src="/img/sneakers/1.jpg" alt="1"/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <span>Цена:</span>
                      <b>1233 грн.</b>
                    </div>
                      <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="plus" />  
                      </button>  
                </div>  
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/sneakers/2.jpg" alt="2"/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <span>Цена:</span>
                      <b>1233 грн.</b>
                    </div>
                      <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="plus" />  
                      </button>  
                </div>  
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/sneakers/3.jpg" alt="3"/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <span>Цена:</span>
                      <b>1233 грн.</b>
                    </div>
                      <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="plus" />  
                      </button>  
                </div>  
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/sneakers/4.jpg" alt="4"/>
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                      <span>Цена:</span>
                      <b>1233 грн.</b>
                    </div>
                      <button className="button">
                        <img width={11} height={11} src="/img/plus.svg" alt="plus" />  
                      </button>  
                </div>  
            </div>
            </div>

    </div>
    </div>
  );
}

export default App;
