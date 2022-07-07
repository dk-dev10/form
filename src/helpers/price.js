export const SpaceZero = (number) => {
  `${number}`
    .split("")
    .reverse()
    .map((el, index) => (index % 3 !== 2 ? el : ` ${el}`))
    .reverse()
    .join("");
};
