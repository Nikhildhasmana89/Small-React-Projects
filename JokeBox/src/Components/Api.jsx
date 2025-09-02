export const Jokedata = async () => {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/ten"
  );
  const data = await response.json();
  return data[0];
};
