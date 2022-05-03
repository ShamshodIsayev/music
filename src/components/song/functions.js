export function getIndexFromArr(arr, song, status) {
  const title = song.title;
  let index = 0;
  arr.map((el, i) => {
    if (title === el.title) index = i;
  });
  if (status === "next" && index === arr.length - 1) return "last";
  if (status === "prev" && index === 0) return "prev";
  return index;
}
