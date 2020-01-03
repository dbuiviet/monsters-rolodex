import React from 'react';

import {Card} from "../card/card.cpn";

import './card-list.style.css';

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.monsterList.map(monster =>
                    (<Card key={monster.id} monster={monster} />))
            }
        </div>
    );
}
