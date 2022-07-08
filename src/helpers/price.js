export const SpaceZero = (number) => {
  let [, num, suffix] = number.match(/^(.*?)((?:[,.]\d+)?|)$/);
  return `${num.replace(/\B(?=(?:\d{3})*$)/g, ' ')}${suffix}`;
};
