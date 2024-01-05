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
    <div>
      <h1>{word[0].word}</h1>
      <p>{word[0].phonetics[1].text}</p>
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
      <p></p>
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
