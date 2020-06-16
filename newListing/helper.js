const hideError = (text, numberNext = 2) => {
  let selector = $('label:contains(' + text + ')');
  for (let i = 0; i < numberNext; i++) {
    selector = selector.next();
  }
  if (selector.hasClass("error")) {
    selector.css("visibility", "hidden");
    selector.css("position", "absolute");
  }
  // const selector = $('label:contains(' + text + ')').next().next();
};

const resetError = (text, numberNext = 2) => {
  // const selector = $('label:contains(' + text + ')').next().next();
  let selector = $('label:contains(' + text + ')');
  for (let i = 0; i < numberNext; i++) {
    selector = selector.next();
  }
  if (selector.hasClass("error")) {
    selector.css("visibility", "visible");
    selector.css("position", "relative");
  }
};

const detectIfTextIsError = (text) => {
  const selector = $('label:contains(' + text + ')');
  console.log("CONTROLLO SE ", text, " IS ERROR");
  console.log(selector)
  console.log(selector.next())
  console.log(selector.next().next())
  const hasClassError = selector.next().next().hasClass('error');
  console.log(text, hasClassError);
  const isVisible = selector.next().next().css('display') !== 'none';
  console.log(text, isVisible);
  return hasClassError && isVisible;
};


const removeFilterFromTitle = (title) => {
  const textSelector = $('label:contains(' + title + ')');
  console.log(textSelector);
  removeDisplay(textSelector);
  removeDisplay(textSelector.prev());
};

const removeFilterForCategory = (category) => {
  if (Number(category) === CATEGORY_LISTING[CATEGORY.SHARED_OFFICE]) {
    removeFilterFromTitle('Impianto audio');
    removeFilterFromTitle('Microfono');
    removeFilterFromTitle('Proiettore');
    removeFilterFromTitle('Lavagna interattiva');
  }
};

const replaceTextIntoLabel = (title, newText) => {
  const textSelector = $('label:contains(' + title + ')');
  textSelector.html(newText);
};
