import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import './App.css';
import Card from './componentes/card';




import { imagenes } from './importCards'
function App() {

    const [firstCard, setFirstCard] = useState({});
    const [secondCard, setSecondCard] = useState({});
    const [cards, setCards] = useState([]);

    const [unflippedCards, setUnflippedCards] = useState([]);
    const [disabledCards, setDisabledCards] = useState([]);

    const MixArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }



    useEffect(() => {
        MixArray(imagenes)
        setCards(imagenes);
    }, []);
    useEffect(() => {
        checkForMatch();
      }, [secondCard]);

    const flipCard = (name, number) => {
        if (firstCard.name === name && firstCard.number === number) {
            return 0;
        }
        if (!firstCard.name) {
            setFirstCard({ name, number });
        }
        else if (!secondCard.name) {
            setSecondCard({ name, number });
        }
        return 1;
    }
    const checkForMatch = () => {
        if (firstCard.name && secondCard.name) {
            const match = firstCard.name === secondCard.name;
            match ? disableCards() : unflipCards();
        }
    }

    const disableCards = () => {
        setDisabledCards([firstCard.number, secondCard.number]);
        resetCards();
    };

    const unflipCards = () => {
        setUnflippedCards([firstCard.number, secondCard.number]);
        resetCards();
    };

    const resetCards = () => {
        setFirstCard({});
        setSecondCard({});
    }

    return (
        <div className="fondo">

            <div className="container">

                {
                    cards.map((card, index) => {
                        //console.log(1);

                        <Card
                            name={card.player}
                            number={index}
                            frontFace={card.src}
                            flipCard={flipCard}
                            unflippedCards={unflippedCards}
                            disabledCards={disabledCards}
                        />
                    })
                }
            </div>
        </div>
    );


}


export default App;