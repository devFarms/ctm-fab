import React from "react";
import './Cards.css';


const Cards = (props) => {
    
        return (
            <div className="card-deck w-55 p-3">
                <div className="card w-55 p-3 animated fadeIn">
                    <img className="card-img-top-1" src="./images/lakers.png" alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-header">{props.teamName}</h5>
                    <p className="card-text">Standings: </p>
                    <p className="card-text">Network: {props.network}</p>
                    <p className="card-text">Last 2 games:</p>
                    <p className="card-text">Upcoming games:</p>
                    </div>
                </div>
                <div className="card w-55 p-3 animated fadeIn">
                    <img className="card-img-top-2" src="./images/bulls.png" alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-header">Chicago Bulls</h5>
                    <p className="card-text">Standings: </p>
                    <p className="card-text">Brodcast: WGN 205</p>
                    <p className="card-text">Last 2 games:</p>
                    <p className="card-text">Upcoming games:</p>
                    </div>
                </div>
                <div className="card w-55 p-3 animated fadeIn">
                    <img className="card-img-top-3" src="./images/celtics.png" alt="Card image cap" />
                    <div className="card-body">
                    <h5 className="card-header">Boston Celtics</h5>
                    <p className="card-text">Standings: </p>
                    <p className="card-text">Brodcast: WKZ 415</p>
                    <p className="card-text">Last 2 games:</p>
                    <p className="card-text">Upcoming games:</p>
                    
                    </div>
                </div>
            </div>
        )
    
}

export default Cards;