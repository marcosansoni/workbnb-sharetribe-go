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
  if (Number(category) === CATEGORY_LISTING[CATEGORY.SHARED_OFFICE]
    || Number(category) === CATEGORY_LISTING[CATEGORY.SHARED_STUDY]
    || Number(category) === CATEGORY_LISTING[CATEGORY.OFFICE]) {
    removeFilterFromTitle('Impianto audio');
    removeFilterFromTitle('Microfono');
    removeFilterFromTitle('Proiettore');
    removeFilterFromTitle('Lavagna interattiva');
  }
  if (Number(category) === CATEGORY_LISTING[CATEGORY.ALL_HOUSE] ||
    Number(category) === CATEGORY_LISTING[CATEGORY.PRIVATE_ROOM]) {
    removeFilterFromTitle('Impianto audio');
    removeFilterFromTitle('Microfono');
    removeFilterFromTitle('Proiettore');
    removeFilterFromTitle('Lavagna interattiva');
    removeFilterFromTitle('Sala allattamento');
    removeFilterFromTitle('Docce');
    removeFilterFromTitle('Bar');
    removeFilterFromTitle('Sala Ristorazione');
    removeFilterFromTitle('Deposito');
    removeFilterFromTitle('Postazione finestrata');
  }
};

const replaceTextIntoLabel = (title, newText) => {
  const textSelector = $('label:contains(' + title + ')');
  textSelector.html(newText);
};

const descriptionText = (text) => {
  return "<div class='caption' style='padding-top: 8px; padding-bottom: 8px'>" + text + "</div>";
}


const addTooltip = () => {
  const titleSelector = $('label:contains("Titolo")');
  titleSelector.append(descriptionText("Titolo dell'annuncio, sarà quello visualizzato"));

  const priceSelector = $('label:contains("Prezzo")');
  priceSelector.append(descriptionText("Prezzo si intende bla bla bla. All'host, al momento della prenotazione, verrà scalata la commissione di workbnb"))
  removeDisplay("small .price-container");
};
