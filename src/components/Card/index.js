import cardStyles from "./Card.module.scss";
import React from "react";

function Card (props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    return(
    <div className={cardStyles.card}>
        <div className={cardStyles.favorite} onClick={props.onFavorite}>
            <img src="/img/heart-unlike.svg" alt="heartUn" />
        </div>
            <img width={133} height={112} src={props.imageUrl} alt="img"/>
        <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} грн.</b>
                </div>
                    <img className={cardStyles.plus} onClick={onClickPlus} width={24} height={24} src={isAdded ? "/img/added.svg" : "/img/plus.svg"} alt="plus" />  
                </div>  
    </div>
    );
}

export default Card;

