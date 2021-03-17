function CategoryList(obj) {
  console.log("CategoryList!", obj);
  if (obj.recipes.length > 0) {
    console.log("Time to go");
  } else {
    console.log("Not yet");
  }
  return null;
}
export { CategoryList };
