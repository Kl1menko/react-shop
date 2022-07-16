function Drawer () {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Корзина<img className="removeBtn" src="/img/btn-close.svg" alt="btnRemove" /></h2>

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

                <button className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow" /></button>
              </div>
          </div>
          </div>
    );
}

export default Drawer;