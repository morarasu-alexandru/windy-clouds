export function instantGratification(fn, delay) {
  fn();

  return setInterval(fn, delay);
}
