export default function SearchName({ words }) {
  return <div></div>;
}

export async function getServerSideProps(context) {
  const searchName = context.query;
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchName}`
  );
  const words = await response.json();
  return {
    props: {
      words,
    },
  };
}
