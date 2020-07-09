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
  return "<div class='caption' style='padding-top: 8px; padding-bottom: 8px; font-weight: 400'>" + text + "</div>";
};


const addTooltip = (reservation) => {
  const titleSelector = $('label:contains("Titolo")');
  titleSelector.append(descriptionText("Titolo dell'annuncio, sarà quello visualizzato"));

  const priceSelector = $('label:contains("Prezzo")');
  priceSelector.append(descriptionText("Prezzo si intende bla bla bla. All'host, al momento della prenotazione, verrà scalata la commissione di workbnb"))
  console.log($(".price-container small"));
  removeDisplay(".price-container small");

  const descriptionSelector = $('label:contains("Descrizione dettagliata")');
  descriptionSelector.append(descriptionText("La descrizione può essere formattata utilizzando il linguaggio a markdown"))

  const internetSelector = $('label:contains("Internet Download")');
  internetSelector.prepend(descriptionText("Velocità di internet può essere calcolata mediante speedtest"))

  const filterSelector = $('label:contains("Filtri")');
  filterSelector.append(descriptionText("Selezionare tutti i servizi disponibili all'interno della propria struttura, eventualmente anche a pagamento. Sarà possibile successivamente inserire il prezzo extra."))

  const minHourSelector = $('label:contains("Min")');
  console.log("!!!!Reservation", reservation)
  if (reservation === LISTING_SHAPE[TRANSACTION_TYPE.HOURLY]){
    minHourSelector.append(descriptionText("Numero di ore minime della prenotazione"))
  }else{
    minHourSelector.append(descriptionText("Soggiorno minimo"))
  }

  const festiviSelector = $('label:contains("Festivi")');
  festiviSelector.append(descriptionText("Spuntare il giorno selezionato se aperto anche nel giorno festivo"))

  const selectorCucina = $('label:contains("Cucina")')[1];
  selectorCucina.prepend(descriptionText("Inserire il costo eventuale dei servizi, se a pagamento. Se disponibili vanno selezionati anche all'interno della sezione servizi"));

  const immagineSelector = $('label:contains("Immagine")');
  immagineSelector.append(descriptionText("Caricare come prima immagine quella dello speedTest. Per un miglior risultato usa formati JPG, GIF, PNG che siano di larghezza 660 e altezza 440 pixel."));

};
