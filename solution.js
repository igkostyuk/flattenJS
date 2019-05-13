function flatten(arr) {
  // ваше решение пишите здесь
  return arr.reduce(
    (acc, el) => acc.concat(Array.isArray(el) ? flatten(el) : el),
    []
  );
}
