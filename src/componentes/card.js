import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import backCard from '../imagenes/card-back.png';
function card({ name, number, frontFace, flipCard, unflippedCards, disabledCards }) {

    useEffect(() => {
        if (unflippedCards.includes(number)) {
            setTimeout(() => setIsFlipped(false), 700);
        }
    }, [unflippedCards])

    useEffect(() => {
        if (disabledCards.includes(number)) {
            setHasEvent(false);
        }
    }, [disabledCards])

    const click = e => {
        const fliped = flipCard(name, numbrer);
        if (fliped !== 0) {
            setFlip(!isFlip);
        }
        //setFlip(!isFlip);

    };


    const [isFlip, setFlip] = useState(false);
    return (
        <div className='card'>
            <ReactCardFlip isFlipped={isFlip}>
                <img className='card-image' src={backCard} onClick={hasEvent ? click : null} />
                <img className='card-image' src={face} onClick={hasEvent ? click : null} />
            </ReactCardFlip>
        </div>
    )
}

export default card;