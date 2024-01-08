import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function SearchName({ word }) {
  const nounDefinitions = [];
  const verbDefinitions = [];
  word.forEach((entry) => {
    entry.meanings.forEach((meaning) => {
      if (meaning.definitions) {
        meaning.definitions.forEach((definition) => {
          if (meaning.partOfSpeech === "noun") {
            nounDefinitions.push(definition.definition);
          } else if (meaning.partOfSpeech === "verb") {
            verbDefinitions.push(definition.definition);
          }
        });
      }
    });
  });
  return (
    <div className="px-6">
      <NavBar />
      <div className="flex justify-between shrink-0 items-center">
        <div>
          <p className="text-midnight-black font-bold text-2xl ">
            {word[0].word}
          </p>
          <span className="text-royal-purple">{word[0].phonetics[1].text}</span>
        </div>
        <button className="bg-pale-purple rounded-full p-3.5">
          <Image src="./play.svg" alt="play button" width="20" height="20" />
        </button>
      </div>

      <p>noun</p>
      <p>Meaning</p>
      <ul>
        {nounDefinitions.map((definition, index) => (
          <li key={index}>{definition}</li>
        ))}
      </ul>
      <p>verb</p>
      <p>Meaning</p>
      <ul>
        {verbDefinitions.map((definition, index) => (
          <li key={index}>{definition}</li>
        ))}
      </ul>
      <a href={word.sourceUrls}>{word.sourceUrls}</a>
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
    console.log(data);
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
