"use client";

import { useState } from "react";
import jokes from "@/data/jokes.json";

type Joke = {
  question: string;
  answer: string;
};

const jokeList = jokes as Joke[];

function pickJoke(exclude?: Joke): Joke {
  if (jokeList.length === 1) return jokeList[0];

  let next = jokeList[Math.floor(Math.random() * jokeList.length)];
  while (exclude && next.question === exclude.question) {
    next = jokeList[Math.floor(Math.random() * jokeList.length)];
  }
  return next;
}

export default function Home() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  function askForJoke() {
    setJoke((current) => pickJoke(current ?? undefined));
    setShowAnswer(false);
  }

  return (
    <main>
      <div className="panel">
        <button type="button" onClick={askForJoke}>
          Üks halb Henri nali palun
        </button>

        {joke && (
          <article className="card">
            <p className="question">{joke.question}</p>
            {showAnswer ? (
              <p className="answer">{joke.answer}</p>
            ) : (
              <button type="button" onClick={() => setShowAnswer(true)}>
                Vastus
              </button>
            )}
          </article>
        )}
      </div>
    </main>
  );
}
