const editListing = () => {
  const selectorCategory = $(".selected-group");

  selectorCategory.forEach(items => items.childNodes.forEach(item => {
    console.log($(item))
    console.log($(item).hasClass(".hidden"))
  }))
  console.log(selectorCategory);
};
