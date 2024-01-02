import "./Rules.css";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

import img1 from "../../assets/draw1.png";
import img2 from "../../assets/draw2.png";

const Rules = () => {
  const [isHoveringCross, setIsHoveringCross] = useState(false);

  let rules = {
    "rules-title": "Bagchal Board Game",

    //template literal.  -- string multipule line
// key and value 
    briefing: `Bagchal (Baghchal / Tiger and Goat game) is a traditional Nepalese board game. It is a two player
                        Board game. As acclaimed, back in the days it was played by hearders as a passtime while grazing cattles.Bagchal board is a 5 X 5 grid with 25 nodes interconnected with each other through edges.
                        "Bagh" means "Tiger" and "Chal" means "To-move".
                        
                        Two players, one playing Tiger and the other playing Goats,
                        compete in a mind game of Bagchal.`,
    briefing1: ` Tiger can move in any direction (guided by lines on the board), whereas goats firstly
                        need to place wherever the player wants to place (in any unoccupied place) then after
                        placing all 20 goats, they also move as tiger. Tigers can jump over goats, but not over
                        other tigers or empty spaces. The game ends when either the tiger captures five goats,
                        or the goat player prevents the tiger from making a legal move. Baghchal is a game of
                        strategy, where both players need to think ahead and use their moves wisely.
                        If Tiger has no legal move, he loses the game; if a certain number of goats have been
                        killed (typically five), Goat loses.`,
    "draw-title": "Draw",
    "draw-briefing briefing": `In our app, we have also implemented the three-fold repetition rule. The threefold repetition rule states that a game will be a draw if the same position occurs three times during the game.`,
  };

  const imagePaths = [
    [img2, "draw1"],
    [img1, "draw2"],
  ]; // path and identifier

  return (
    <div className={`rules-container`}>
      <div
        className="cross"
        onMouseEnter={() => {
          setIsHoveringCross(true);
        }}
        onMouseLeave={() => {
          setIsHoveringCross(false);
        }}
      >
        <Link to="/Baghchal">
          {isHoveringCross ? (
            <ImCross color="rgb(13, 179, 185)" />
          ) : (
            <ImCross color="white" />
          )}
        </Link>
      </div>
      {/* 
            <div className="rules-title">
                <h1 >{rules['rules-title']}</h1>
                </div>


            <div className="briefing">
            <p>{rules['briefing']}</p>
                
                </div>

                <div className="briefing1">
                <p>{rules['briefing1']}</p>
                
                </div> */}

      {/* <div className="draw-title">
                <h1>{rules['draw-title']}</h1>
                </div>

                <div className="draw-briefing briefing">
                <p>{rules['draw-briefing briefing']}</p>
                </div>


                <div className="img-eg">
                {
                    imagePaths.map((img,index)=>{
                        return (
                            <div className = 'img-eg-inner' key = {index}>
                                <img src={img[0]} alt={img[1]} key = {img[1]}/>
                                <div className = 'title-name' key = {index}>{img[1]}</div>
                            </div>
                        )
                    })
                }
            </div>  */}

      {Object.keys(rules).map((key, index) => {
        if (typeof rules[key] === "string") {
          return key === "rules-title" ? (
            <div className={key} key={index}>
              <h1>{rules[key]}</h1>
            </div>
          ) : (
            <div className={key} key={index}>
              <p>{rules[key]}</p>
            </div>
          );
        } else {
          return Object.keys(rules[key]).map((keyIn, indexIn) => (
            <React.Fragment key={indexIn}>
              <div className={key} key={index}>
                <h1>{rules[key]}</h1>
              </div>
              <div className="obj-description" key={`desInner-${indexIn}`}>
                {rules[key][keyIn].map((info, indexInfo) => (
                  <React.Fragment key={indexInfo}>
                    <h1>{info}</h1>
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </React.Fragment>
          ));
        }
      })}
      <div className="img-eg">
        {imagePaths.map((img, index) => {
          return (
            <div className="img-eg-inner" key={index}>
              <img src={img[0]} alt={img[1]} key={img[1]} />
              <div className="title-name" key={index}>
                {img[1]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rules;
