import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Fragment } from "react";
import { useState } from "react";

export default function SearchName({ word }) {
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handlePlay = () => {
    let audioUrl;
    word[0].phonetics.forEach((phonetic) => {
      if (phonetic.audio.length > 0) {
        audioUrl = phonetic.audio;
      }
    });

    const audioElement = new Audio(audioUrl);

    audioElement.addEventListener("playing", () => setAudioPlaying(true));
    audioElement.addEventListener("ended", () => setAudioPlaying(false));

    audioElement.play();
  };

  return (
    <div className="px-6 pb-10 dark:bg-midnight-black">
      <NavBar />

      <div className="flex justify-between shrink-0 items-center">
        <div className="my-5">
          <p className="text-midnight-black font-bold text-2xl dark:text-white">
            {word[0].word}
          </p>
          <span className="text-royal-purple">
            {word[0].phonetic || word[0].phonetics[1].text}
          </span>
        </div>

        <button
          className="bg-pale-purple rounded-full p-3.5"
          onClick={handlePlay}
        >
          <Image src="./play.svg" alt="play button" width="20" height="20" />
        </button>
      </div>

      {word[0].meanings.map((meaning, index) => (
        <ul key={index}>
          <p className="mb-3 mt-5 text-medium-gray">Meaning</p>
          <li className="flex items-center">
            <p className="mr-1.5 font-bold text-midnight-black text-base mb-3.5 dark:text-white">
              {meaning.partOfSpeech}
            </p>
            <div className="border-t border-medium-gray flex-1"></div>
          </li>
          <li>
            <ul className="list-disc marker:text-royal-purple pl-5 text-sm">
              {meaning.definitions.map((definition, index) => (
                <Fragment key={index}>
                  <li className="mb-3.5">{definition.definition}</li>
                  {definition.example && (
                    <li className="text-medium-gray list-none mb-3.5">
                      &quot;{definition.example}&quot;
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>

            <ul className="flex text-sm flex-wrap">
              <p className="mr-4">Synonyms</p>
              {meaning.synonyms.map((synonym, index) => {
                return (
                  <li key={index} className="text-royal-purple mr-4">
                    {synonym}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { searchName } = context.query;
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchName}`
    );
    const data = await response.json();

    return {
      props: {
        word: data,
      },
    };
  } catch (error) {
    console.log("An error occured : error.message");
    return {
      props: {
        word: null,
      },
    };
  }
}
