const editListing = () => {
  const selectorCategory = $(".selected-group");

  console.log(selectorCategory);
  console.log(Array.isArray(selectorCategory));

  selectorCategory.each(items => items.childNodes.each(item => {
    console.log($(item));
    console.log($(item).hasClass(".hidden"))
  }))
  console.log(selectorCategory);
};
