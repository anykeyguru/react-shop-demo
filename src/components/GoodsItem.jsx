import React from "react";

function GoodsItem(props) {
    const {
        mainId,
        displayName,
        displayDescription,
        price = {},
        displayAssets = [],
        addToBasket = Function.prototype
    } = props;
    const image = displayAssets[0].background

    return (
        <div className="card" id={mainId} >
            <div className="card-image">
                <img src={image} alt={displayDescription}/>
                <button
                    onClick={()=> addToBasket({
                        mainId,
                        displayName,
                        price,
                    })}
                    className="btn-floating halfway-fab waves-effect  red accent-3">
                    <i className="material-icons">add</i></button>
            </div>
            <div className="card-content">
                <span className="card-title ">{displayName}</span>
                <p>{
                    displayDescription ? displayDescription : <br/>
                }</p>
            </div>
            <div className="card-action">
                <button className="btn purple darken-1">Buy</button>
                <span className="right price">{price.regularPrice} sum</span>
            </div>
        </div>
    );


}

export {GoodsItem};