const editListing = () => {
  const selectorCategory = $(".selected-group");

  console.log(selectorCategory);
  console.log(Array.isArray(selectorCategory))

  selectorCategory.forEach(items => items.childNodes.forEach(item => {
    console.log($(item))
    console.log($(item).hasClass(".hidden"))
  }))
  console.log(selectorCategory);
};
