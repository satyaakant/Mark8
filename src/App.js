import React, { useState } from "react";
import "./styles.css";
var EmojiDictnary = {
  "😑": "annoyance",
  "😶": "speachless",
  "🥴": "woozy face",
  "😏": "smirking face",
  "🤤": "drooling face",
  "😳": "shy"
};

var emojisweknow = Object.keys(EmojiDictnary);
export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojinputhandler(event) {
    var userInput = event.target.value;
    console.log(userInput);
    var meaning = EmojiDictnary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    //console.log(meaning);
    setmeaning(meaning);
  }
  function clickhandler(emoji) {
    var meaning = EmojiDictnary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        inside <span style={{ color: "green" }}> outt</span>
      </h1>
      <input onChange={emojinputhandler} />
      <h2>{meaning}</h2>
      <h3>Emoji we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => clickhandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
