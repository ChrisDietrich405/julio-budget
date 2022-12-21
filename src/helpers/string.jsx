export const firstLetterUpperCase = (str) => {
  const strArray = str.split("");

  return strArray[0].toUpperCase() + strArray.slice(1).join("");
};
