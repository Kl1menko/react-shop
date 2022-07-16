function Card () {
    return(
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
    );
}

export default Card;

