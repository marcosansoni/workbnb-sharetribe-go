
const getKeyByValue = (object, value) =>
  Object.keys(object).find(key => object[key] === value);


//Add and remove visibility and display
const addVisibility = (selector) => $(selector).css("visibility", "visible");
const removeVisibility = (selector) => $(selector).css("visibility", "hidden");
const addDisplay = (selector, displayType = 'block') => $(selector).css("display", displayType);
const removeDisplay = (selector) => $(selector).css("display", "none");

const pathname = window.location.pathname;

console.log("Pathname ", pathname);

console.log("Href", window.location);

const urlParams = new URLSearchParams(window.location.search);

const splitPath = pathname.split("/");
console.log("Split pathName", splitPath);

const checkHome = () => {
  return pathname === '/' && window.location.href === ROOT;
};

const checkListingsList = () => {
  return pathname === '/' && window.location.href !== ROOT;
};

const checkNewListing = () => {
  return splitPath && splitPath.length >= 3 && splitPath[2] === 'listings' && splitPath[3] === 'new';
};

const ROOT = 'https://devworkbnb1.sharetribe.com/';

const PAGES = {
  HOME: 'Home',
  LISTING_LIST: 'ListingList',
  LISTING_DETAILS: 'ListingDetails',
  NEW_LISTING: 'NewListing',
};

const CHECK_PAGES = {
  [PAGES.HOME]: checkHome(),
  [PAGES.LISTING_LIST]: checkListingsList(),
  [PAGES.NEW_LISTING]: checkNewListing(),
};

// Search key used into all listings
const TRANSACTION_TYPE = {
  HOURLY: 'disponibilita-per-ora',
  DAILY: 'disponibilita-per-giorno',
  NIGHTLY: 'disponibilita-per-notte',
  MONTHLY: 'lungo-termine',
};

const CATEGORY = {
  PRIVATE_ROOM: 'stanza-privata',
  ALL_HOUSE: 'tutta-la-casa',
  SHARED_STUDY: 'studio-condiviso',
  OFFICE: 'ufficio',
  SHARED_OFFICE: 'ufficio-condiviso',
  MEETING_ROOM: 'sala-riunioni'
};

// Key used into search bar while insert or edit a listing for detecting type of reservation
const LISTING_SHAPE = {
  [TRANSACTION_TYPE.HOURLY]: 227262,
  [TRANSACTION_TYPE.DAILY]: 227263,
  [TRANSACTION_TYPE.NIGHTLY]: 227264,
  [TRANSACTION_TYPE.MONTHLY]: 221690,
};


const VISUALIZED_TRANSACTION_TYPE = {
  [TRANSACTION_TYPE.HOURLY]: 'Disponibilità per ora',
  [TRANSACTION_TYPE.DAILY]: 'Disponibilità per giorno',
  [TRANSACTION_TYPE.NIGHTLY]: 'Disponibilità per notte',
  [TRANSACTION_TYPE.MONTHLY]: 'Lungo termine',
};

const VISUALIZED_CATEGORY = {
  [CATEGORY.PRIVATE_ROOM]: 'Stanza privata',
  [CATEGORY.ALL_HOUSE]: 'Tutta la casa',
  [CATEGORY.SHARED_STUDY]: 'Studio Condiviso',
  [CATEGORY.OFFICE]: 'Ufficio',
  [CATEGORY.MEETING_ROOM]: 'Sala riunioni',
  [CATEGORY.SHARED_OFFICE]: 'Coworking',
};

const CATEGORY_LISTING = {
  [CATEGORY.ALL_HOUSE]: 531925,
  [CATEGORY.MEETING_ROOM]: 520129,
  [CATEGORY.OFFICE]: 531929,
  [CATEGORY.PRIVATE_ROOM]: 531924,
  [CATEGORY.SHARED_STUDY]: 531926,
  [CATEGORY.SHARED_OFFICE]: 531928,
};

const URL_PARAMS = {
  CATEGORY: 'category',
  LISTING_SHAPE: 'listing_shape',
  TRANSACTION_TYPE: 'transaction_type',
};


// Open the selected tab into new listings
const openNewListing = (tab = 1) => {
  NEW_LISTING_HELPER.resetError(tab);
  switch (tab) {
    case 1:
      // Display Title Text
      displayText('Titolo dell\'inserzione');
      // Display Price Title
      addDisplay('.price-container');
      // Display Description
      displayText("Descrizione dettagliata");
      addDisplay("textarea");
      return;
    case 2:
      displayText('Internet Download');
      displayText('Internet Upload');
      displayText('Filtri');
      displayText('Capienza');
      addDisplay(".checkbox-group-container label", 'inline-block');
      return;
    case 3:
      addDisplay(".checkbox-group-container label", 'inline-block');
      displayText('Min stay');
      displayText('Min hour');
      displayText('Orario check-in');
      displayText('Orario apertura');
      displayText('Orario check-out');
      displayText('Orario chiusura');
      displayText('Festivi');
      return;
    case 4:
      const selectorCucina = $('label:contains("Cucina")')[1];
      addDisplay(selectorCucina);
      addDisplay($(selectorCucina).next());
      const selectorParcehggio = $('label:contains("Parcheggio")')[1];
      addDisplay(selectorParcehggio);
      addDisplay($(selectorParcehggio).next());
      const selectorColazione = $('label:contains("Colazione")')[1];
      addDisplay(selectorColazione);
      addDisplay($(selectorColazione).next());
      return;
    case 5:
      displayText('Località', 2);
      addDisplay('.jsmap');
      return;
    case 6:
      displayText('Immagine');
      addDisplay('.listing-images');
      return;
    default:
      return;
  }
};

const resetErrorNewListing = (tab) => {
  switch (tab) {
    case 1:
      resetError('Titolo dell\'inserzione');
      resetError('Prezzo', 6);
      return;
    case 2:
      // Error
      resetError('Internet Download');
      resetError('Internet Upload');
      return;
    case 3:
      //Reset error previously hidden
      resetError('Orario check-in');
      resetError('Orario check-out');
      resetError('Min stay');
      resetError('Orario apertura');
      resetError('Orario chiusura');
      resetError('Min hour');
      return;
    // No errors into this tab
    case 4:
    case 5:
    case 6:
    default:
      return;
  }
};

// Open the selected tab into new listings
const closeNewListing = (tab = 1) => {
  switch (tab) {
    case 1:
      removeDisplayText('Titolo dell\'inserzione');
      removeDisplay('.price-container');
      removeDisplayText("Descrizione dettagliata");
      removeDisplay("textarea");
      // Hide error
      hideError('Titolo dell\'inserzione');
      hideError('Prezzo', 6);
    case 2:
      removeDisplayText('Internet Download');
      removeDisplayText('Internet Upload');
      removeDisplayText('Filtri');
      removeDisplayText('Capienza');
      removeDisplay(".checkbox-group-container label");
      // Error
      hideError('Internet Download');
      hideError('Internet Upload');
      return;
    case 3:
      // removeDisplay(".checkbox-group-container label");

      removeDisplayText('Min stay');
      removeDisplayText('Min hour');

      // Check-In
      removeDisplayText('Orario check-in');
      removeDisplayText('Orario apertura');

      // Check-out
      removeDisplayText('Orario check-out');
      removeDisplayText('Orario chiusura');

      removeDisplayText('Festivi');
      // Error
      hideError('Orario check-out');
      hideError('Orario chiusura');
      hideError('Orario check-in');
      hideError('Orario apertura');
      hideError('Min stay');
      hideError('Min hour');
      return;
    case 4:
      const selectorCucina = $('label:contains("Cucina")')[1];
      removeDisplay(selectorCucina);
      removeDisplay($(selectorCucina).next());
      const selectorParcehggio = $('label:contains("Parcheggio")')[1];
      removeDisplay(selectorParcehggio);
      removeDisplay($(selectorParcehggio).next());
      const selectorColazione = $('label:contains("Colazione")')[1];
      removeDisplay(selectorColazione);
      removeDisplay($(selectorColazione).next());
      return;
    case 5:
      removeDisplayText('Località', 2);
      removeDisplay('.jsmap');
      return;
    case 6:
      removeDisplayText('Immagine');
      removeDisplay('.listing-images');
      return;
    default:
      return;
  }
};

const toggleNewListing = (tab = 1) =>
  isShowNewListing(tab) ? closeNewListing(tab) : openNewListing(tab);


const checkIfLabelIsShown = (title) => {
  const selector = $('label:contains(' + title + ')');
  if (selector.length > 0) {
    return selector.css("display") !== "none";
  }
  return false;
};

const isShowNewListing = (tab = 1) => {
  switch (tab) {
    case 1:
      // Check if titolo dell'inserzione is shown
      return checkIfLabelIsShown('Titolo dell\'inserzione');
    case 2:
      // Check if filter is shown
      return checkIfLabelIsShown('Internet Download');
    case 3:
      //Check if some extra is shown
      return checkIfLabelIsShown('Orario check-in') || checkIfLabelIsShown('Orario apertura');

    case 4:
      const selector = $('label:contains("Cucina")')[1];
      console.log("isShow 4", $(selector).css("display") !== "none")
      return $(selector).css("display") !== "none";
    case 5:
      //Check if some extra is shown
      return checkIfLabelIsShown('Località');
    case 6:
      //Check if some extra is shown
      return checkIfLabelIsShown('Immagine');
    default:
      return;
  }
};

const isErrorNewListing = (tab = 1) => {
  switch (tab) {
    case 1:
      //Check if title is error
      const isErrorTitle = detectIfTextIsError("Titolo dell'inserzione");
      // Check if price is valid
      const priceErrorSelector = $("#listing_price-error");
      const isErrorPrice = priceErrorSelector && priceErrorSelector.length > 0 && priceErrorSelector[0] && priceErrorSelector.css("display") !== 'none';
      console.log("error title ", isErrorTitle, "error price", isErrorPrice);
      return isErrorPrice || isErrorTitle;
    // No error state into this tab
    case 2:
      //Check if title is error
      const isDownloadError = detectIfTextIsError("Internet Download");
      const isUploadError = detectIfTextIsError("Internet Upload");
      return isDownloadError || isUploadError;
    case 3:
      const isMinHourError = detectIfTextIsError("Min hour");
      const isMinStayError = detectIfTextIsError("Min stay");
      const isCheckInError = detectIfTextIsError("Orario check-in");
      const isAperturaError = detectIfTextIsError("Orario apertura");
      const isCheckOutError = detectIfTextIsError("Orario check-out");
      const isChiusuraError = detectIfTextIsError("Orario chiusura");
      return isMinHourError || isMinStayError || isCheckInError || isCheckOutError || isAperturaError || isChiusuraError;
    case 4:
    case 5:
    case 6:
    default:
      return false;
    // return isValidTitle && isErrorPrice
  }
};

const NEW_LISTING_HELPER = {
  open: openNewListing,
  toggle: toggleNewListing,
  error: isErrorNewListing,
  isShow: isShowNewListing,
  close: closeNewListing,
  resetError: resetErrorNewListing,
};


const showCategorySelection = () => {

  const currentUrl = window.location.href;

  let container = '<div class="col-12">';

  container += '<div class="col-12">' +
    '<h1 class="titolo-annuncio">Inserisci una struttura</h1>' +
    '<h4 style="padding-top: 32px">Seleziona la categoria dello spazio da pubblicare</h4>' +
    '<div class="containerBox w-layout-grid grid-3-column">' +
    '<a href=' + currentUrl + '?' + URL_PARAMS.CATEGORY + '=' + CATEGORY_LISTING[CATEGORY.PRIVATE_ROOM] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item">Stanza Privata</div></a>' +
    '<a href=' + currentUrl + '?' + URL_PARAMS.CATEGORY + '=' + CATEGORY_LISTING[CATEGORY.ALL_HOUSE] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item">Tutta la casa</div></a>' +
    '<a href=' + currentUrl + '?' + URL_PARAMS.CATEGORY + '=' + CATEGORY_LISTING[CATEGORY.SHARED_STUDY] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item ">Studio condiviso</div></a>' +
    '<a href=' + currentUrl + '?' + URL_PARAMS.CATEGORY + '=' + CATEGORY_LISTING[CATEGORY.OFFICE] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item ">Ufficio</div></a>' +
    '<a href=' + currentUrl + '?' + URL_PARAMS.CATEGORY + '=' + CATEGORY_LISTING[CATEGORY.SHARED_OFFICE] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item ">Ufficio condiviso</div></a>' +
    '<a href=' + currentUrl + '?' + URL_PARAMS.CATEGORY + '=' + CATEGORY_LISTING[CATEGORY.MEETING_ROOM] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item ">Sala Meeting</div></a>' +
    '</div>' +
    '</div>';


  container += '</div>';

  $(".wrapper").append(container);
};


const showReservationTypeSelection = (category) => {

  const currentUrl = window.location.href;

  let container = '<div class="col-12">';

  container += '<div class="col-12" style="display: flex; flex-direction: column">' +
    '<h1 class="titolo-annuncio">Inserisci una struttura</h1>' +
    '<h4 style="padding-top: 32px">Categoria selezionata</h4>' +
    '<span class="medium">' + VISUALIZED_CATEGORY[getKeyByValue(CATEGORY_LISTING, Number(category))] + '</span>' +
    '<span class="caption" style="padding-top: 24px">Sarà possibile modificare la categoria una volta inserita la struttura</span>' +
    '<h4 style="padding-top: 32px">Seleziona il tipo di prenotazione che desideri offrire<span class="caption" style="cursor: pointer" id="helperTipoPrenotazione">&nbsp; Che cosa significa?</span></h4>' +
    '<div class="containerBox w-layout-grid grid-3-column">' +
    '<a href=' + currentUrl + '&' + URL_PARAMS.LISTING_SHAPE + '=' + LISTING_SHAPE[TRANSACTION_TYPE.HOURLY] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item">Per ora</div></a>' +
    '<a href=' + currentUrl + '&' + URL_PARAMS.LISTING_SHAPE + '=' + LISTING_SHAPE[TRANSACTION_TYPE.DAILY] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item">Per giorno</div></a>' +
    '<a href=' + currentUrl + '&' + URL_PARAMS.LISTING_SHAPE + '=' + LISTING_SHAPE[TRANSACTION_TYPE.NIGHTLY] + '><div style="padding:64px !important" class="home-fluid-thumbnail-grid-item button secondary_black grid-item">Per notte</div></a>' +
    // '<a href=' + currentUrl + '&' + URL_PARAMS.LISTING_SHAPE + '=' + LISTING_SHAPE[TRANSACTION_TYPE.MONTHLY] + '><div class="boxCreation">Per mese</div></a>' +
    '</div>' +
    '</div>';


  container += '</div>';

  $(".wrapper").append(container);

  // Dialog used to describe the kind of reservation
  $("body").append('' +
    '<div class="overlay">' +
    '    <div class="dialog">' +
    '        <div id="closeDialog">X</div>\n' +
    '        <div class="headerDialog">' +
    '            <h4 style="margin: 0">Tipi di prenotazione</h4>' +
    '        </div>' +
    '         <div class="content">' +
    '             <h4>Per ora:</h4>' +
    '             <span>Lorem ipsum</span>' +
    '             <h4 style="padding-top: 32px">Per giorno:</h4>' +
    '             <span>Lorem ipsum</span>' +
    '             <h4 style="padding-top: 32px">Per notte:</h4>' +
    '             <span>Lorem ipsum</span>' +
    '         </div>' +
    '     </div>' +
    '</div>');

  $("#helperTipoPrenotazione").click(() => {
    addVisibility('.overlay');
  });

  $("#closeDialog").click(() => {
    removeVisibility('.overlay');
  });
};

const displayText = (title, nextNumber = 1, displayType) => {
  let textSelector = $('label:contains(' + title + ')');
  addDisplay(textSelector, displayType);
  for (let i = 0; i < nextNumber; i++) {
    textSelector = textSelector.next();
    addDisplay(textSelector);
  }
  // addDisplay(textSelector.next());
  // if (nextNumber === 2) {
  //   addDisplay(textSelector.next().next());
  // }
};

const removeDisplayText = (title, nextNumber = 1) => {
  let textSelector = $('label:contains(' + title + ')');
  removeDisplay(textSelector);
  for (let i = 0; i < nextNumber; i++) {
    textSelector = textSelector.next();
    removeDisplay(textSelector);
  }
  // removeDisplay(textSelector.next());
  // if (nextNumber === 2) {
  //   removeDisplay(textSelector.next().next());
  // }
};

const toggleDisplayText = (title, nextNumber = 1, displayType) => {
  const isShown = $('label:contains(' + title + ')').css("display") !== "none";
  if (isShown) {
    return removeDisplayText(title, nextNumber);
  }
  return displayText(title, nextNumber, displayType);
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


const tabIntoNewListing = ({
                             category,
                             reservation,
                             tabNumber,
                             title,
                             defaultState = 'close',
                             labelForTitleSelector,
                             extraAction = () => {
                             },
                             customTitleSelector = null,
                           }) => {

    // Add title of the box before title of the insertion
    // const titleSelector = $('label:contains("Titolo dell\'inserzione")');
    const titleSelector = customTitleSelector || $('label:contains(' + labelForTitleSelector + ')');
    titleSelector.before('<div id="' + tabNumber + 'SectionIntoNew" class="containerCollapse" style="' + 'margin-top: 24px' + '">' +
      // '<h5 class="titleCollapse">Dettagli annuncio</h5>' +
      '<h5 class="titleCollapse">' + title + '</h5>' +
      '<div id="' + tabNumber + 'TabCollapseNew" class="buttonCollapse">' + (defaultState === 'open' ? "Collassa" : "Espandi") + '</div>' +
      '</div>');

    if (defaultState === 'open') {
      NEW_LISTING_HELPER.open(tabNumber);
    } else {
      NEW_LISTING_HELPER.close(tabNumber);
    }

    extraAction();

    $('.send_button').click(() => {
      removeVisibility('.js-form-fields');
      setTimeout(() => {
        if (NEW_LISTING_HELPER.error(tabNumber)) {
          NEW_LISTING_HELPER.open(tabNumber);
          $("#" + tabNumber + "TabCollapseNew").html("Collassa");
        }
        addVisibility('.js-form-fields')
      }, 300)
    });

    $("#" + tabNumber + "SectionIntoNew").click(() => {
      console.log("clickkkkkk")
      $("#" + tabNumber + "TabCollapseNew").html(!NEW_LISTING_HELPER.isShow(tabNumber) ? "Collassa" : "Espandi");
      NEW_LISTING_HELPER.toggle(tabNumber);
    });
  }
;


const onFormCompletedLoading = (category, reservation) => {

  // removed unused filter
  removeFilterForCategory(category);

  const replaceTextIntoTabThree = () => {
    if (Number(reservation) !== LISTING_SHAPE[TRANSACTION_TYPE.NIGHTLY]) {
      replaceTextIntoLabel('Min stay', "Min hour*");
      replaceTextIntoLabel('Orario check-in', "Orario apertura*");
      replaceTextIntoLabel('Orario check-out', "Orario chiusura*");
    }
  };

  // Show first tab details
  // firstTabIntoNewListing(category, reservation);
  tabIntoNewListing({
    category,
    reservation,
    tabNumber: 1,
    title: "Dettagli struttura",
    defaultState: 'open',
    labelForTitleSelector: "Titolo dell'inserzione",
  });

  // Second tab hide
  // secondTabIntoNewListing(category, reservation);
  tabIntoNewListing({
    category,
    reservation,
    tabNumber: 2,
    title: "Servizi",
    labelForTitleSelector: "Internet Download"
  });

  //Third tab hide
  // thirdTabIntoNewListing(category, reservation);
  tabIntoNewListing({
    category,
    reservation,
    tabNumber: 3,
    title: "Orari",
    labelForTitleSelector: "Orario check-in",
    extraAction: replaceTextIntoTabThree,
  });
  //
  //
  const selectorCucina = $('label:contains("Cucina")')[1];

  tabIntoNewListing({
    category,
    reservation,
    tabNumber: 4,
    title: "Servizi a pagamento",
    labelForTitleSelector: "Cucina",
    customTitleSelector: $(selectorCucina),
  });


  // //Five Tab hide
  // fiveTabIntoNewListing(category, reservation);
  tabIntoNewListing({
    category,
    reservation,
    tabNumber: 5,
    title: "Posizione",
    labelForTitleSelector: "Località",
  });

  // //Six tab hide
  // sixTabIntoNewListing(category, reservation);
  tabIntoNewListing({
    category,
    reservation,
    tabNumber: 6,
    title: "Immagini",
    labelForTitleSelector: "Immagine",
  });

  const formListSelector = $(".js-form-fields");
  const containerAll = $(".new-listing-form");

  const previousOptionSelected =
    '<h1 class="titolo-annuncio">Inserisci una struttura</h1>' +
    '<h4 style="padding-top: 32px">Categoria selezionata</h4>' +
    '<span class="medium">' + VISUALIZED_CATEGORY[getKeyByValue(CATEGORY_LISTING, Number(category))] + '</span>' +
    '<h4 style="padding-top: 32px">Prenotazione selezionata</h4>' +
    '<span class="medium">' + VISUALIZED_TRANSACTION_TYPE[getKeyByValue(LISTING_SHAPE, Number(reservation))] + '</span>' +
    '<div class="caption" style="padding-top: 24px">Sarà possibile modificare la categoria e la prenotazione una volta inserita la struttura.</div>' +
    '<h4 style="padding-top: 32px">Seleziona i dettagli del tuo annuncio</h4>';

  formListSelector.wrap('<div class="col-12" style="padding: 0 24px"></div>');

  containerAll.prepend(previousOptionSelected);

  containerAll.addClass("col-12");
  containerAll.css("max-width", "none");
  containerAll.css("float", "unset");

  const selectorSaveButton = "button.send_button";

  $(selectorSaveButton).wrap("<div style='display: flex; justify-content: flex-end'></div>");
  $(selectorSaveButton).addClass("button secondary_black no_padding");
  $(selectorSaveButton).html("Pubblica Struttura");
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


const showDetailsNewListing = (category, reservation) => {
  setTimeout(() => {
    onFormCompletedLoading(category, reservation);
    addDisplay(".new-listing-form")
  }, 800);
};

const generateFilterWithDropDown = (currentType, items, key, defaultText, idRemove,) => {
  return '<div class="containerDropDown">' +
    generateDropDownButton(currentType, defaultText, items, key) +
    '<div class="dropDown" workbnb-key="D' + key + '" tabindex="-1">' +
    generatedDropDownItem(items, currentType, key) +
    generateRemoveItem(currentType, key) +
    '</div></div>'
};

const generatedDropDownItem = (items, selectedId, key) => {
  let res = '';
  items.forEach(item => {
    const isSelected = item.id === selectedId;
    res += '<div  workbnb-key="I' + key + '" class="selectDropDown ' + (isSelected ? "selectedItemDropDown" : '') + '" id=' + item.id + '>' +
      item.name +
      '</div>';
  });
  return res;
};

const generateDropDownButton = (selectedId, defaultText, items, key) => {
  const isSelected = selectedId !== null;
  const textToShow = isSelected ? items.filter(i => i.id === selectedId)[0].name : defaultText;
  return '<div workbnb-key="' + key + '"' +
    'class="selectedDropDownText button secondary_black small w-inline-block" style="' + (isSelected ? "border: 1px solid #222222" : "") + '"> ' + textToShow + ' </div>';
};

const generateRemoveItem = (selectedId, key) => {
  return selectedId !== null ? '<div class="separator"></div>' +
    '<div class="selectDropDown" workbnb-key="I' + key + '" id="remove">Rimuovi Filtro </div>' : '';
};

const generateFilterForLeftHomeBar = () => {

  // Transaction Type
  // Get the key
  const currentTransactionType = urlParams.get(URL_PARAMS.TRANSACTION_TYPE);

  const itemsTransactionType = [
    {id: TRANSACTION_TYPE.HOURLY, name: VISUALIZED_TRANSACTION_TYPE[TRANSACTION_TYPE.HOURLY]},
    {id: TRANSACTION_TYPE.DAILY, name: VISUALIZED_TRANSACTION_TYPE[TRANSACTION_TYPE.DAILY]},
    {id: TRANSACTION_TYPE.NIGHTLY, name: VISUALIZED_TRANSACTION_TYPE[TRANSACTION_TYPE.NIGHTLY]},
    {id: TRANSACTION_TYPE.MONTHLY, name: VISUALIZED_TRANSACTION_TYPE[TRANSACTION_TYPE.MONTHLY]},
  ];

  const transactionDropDown = generateFilterWithDropDown(currentTransactionType, itemsTransactionType, 'transaction_type', 'Tipo di Prenotazione');

  // Category
  //Get the category current key
  const currentCategory = urlParams.get(URL_PARAMS.CATEGORY);

  const itemsCategory = [
    {id: CATEGORY.PRIVATE_ROOM, name: VISUALIZED_CATEGORY[CATEGORY.PRIVATE_ROOM]},
    {id: CATEGORY.ALL_HOUSE, name: VISUALIZED_CATEGORY[CATEGORY.ALL_HOUSE]},
    {id: CATEGORY.SHARED_STUDY, name: VISUALIZED_CATEGORY[CATEGORY.SHARED_STUDY]},
    {id: CATEGORY.OFFICE, name: VISUALIZED_CATEGORY[CATEGORY.OFFICE]},
    {id: CATEGORY.MEETING_ROOM, name: VISUALIZED_CATEGORY[CATEGORY.MEETING_ROOM]},
    {id: CATEGORY.SHARED_OFFICE, name: VISUALIZED_CATEGORY[CATEGORY.SHARED_OFFICE]},
  ];

  const categoryDropDown = generateFilterWithDropDown(currentCategory, itemsCategory, 'category', 'Categoria');

  const moreFilterSelected = true;

  const buttonForMoreFilter = '<div id="moreFilter" ' +
    'class="button secondary_black small w-inline-block" style="' + (moreFilterSelected ? "border: 1px solid #222222" : "") + '">Più filtri</div>';

  return '<div class="rightFilter">' + transactionDropDown + '' + categoryDropDown + '' + buttonForMoreFilter + '</div>';

};

const createDialogWithMoreFilterIntoHomePage = () => {
  let minimumPrice = undefined;
  let maximumPrice = undefined;
  let minimumDownload = undefined;
  let maximumDownload = undefined;
  let minimumUpload = undefined;
  let maximumUpload = undefined;
  let currentSelectedFilter = [];


  //Append to body
  $("body").append('<div class="overlay">\n' +
    '    <div class="dialog">\n' +
    '        <div id="closeDialog">X</div>\n' +
    '        <div class="headerDialog">\n' +
    '            Più filtri\n' +
    '        </div>\n' +
    '        <div class="content">\n' +
    '            <div class="sectionDialog">\n' +
    '                <h4>Prezzo</h4>\n' +
    '                <input type="text" class="js-range-slider" id="priceSelector" name="my_range" value=""/>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Prezzo minimo: </p><span id="minPrice">0</span><span>€</span>\n' +
    '                    </div>\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Prezzo massimo: </p><span id="maxPrice">250</span><span>€</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog">\n' +
    '                <h4>Servizi</h4>\n' +
    '                <ul>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="house">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-home" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="phone">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-phone" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="plane">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-plane" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="snow">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-snowflake-o" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="battery">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-battery-full" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="code">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-code" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div>Servizi selezionati: <span id="selectedFilter"></span></div>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog">\n' +
    '                <h4>Velocità Internet Download</h4>\n' +
    '                <input type="text" class="js-range-slider" id="downloadInternet" name="my_range" value=""/>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Minimo Download: </p><span id="minDown">10</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Massimo Download: </p><span id="maxDown">1000</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog">\n' +
    '                <h4>Velocità Internet Upload</h4>\n' +
    '                <input type="text" class="js-range-slider" id="uploadInternet" name="my_range" value=""/>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Minimo Upload: </p><span id="minUp">10</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Massimo Upload: </p><span id="maxUp">1000</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="footerDialog">\n' +
    '            <div class="cancelButton">Cancella Filtri</div>\n' +
    '            <div class="applyButton">Conferma</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');

  $("#closeDialog").click(() => {
    removeVisibility('.overlay');
  });

  console.log($("#downloadInternet"))
  // console.log(ionRangeSlider)

  // $("#downloadInternet").ionRangeSlider({
  //   values: [10, 20, 30, 50, 100, 200, 300, 500, 1000],
  //   type: "range",
  //   from: 0,
  //   to: 2,
  //   grid: true,
  //   grid_snap: true,
  //   onChange: (data) => {
  //     // console.log(data)
  //     const fromDownload = data.from_value;
  //     const toDownload = data.to_value;
  //     $("#minDown").html(fromDownload);
  //     $("#maxDown").html(toDownload);
  //   },
  //   onFinish: (data) => {
  //     minimumDownload = Number(data.from_value) !== 10 ? data.from_value : undefined;
  //     maximumDownload = Number(data.to_value) !== 1000 ? data.to_value : undefined;
  //   }
  // });
  //
  // $("#priceSelector").ionRangeSlider({
  //   min: 0,
  //   max: 250,
  //   type: "range",
  //   grid: true,
  //   onChange: (data) => {
  //     const fromPrice = data.from_pretty;
  //     const toPrice = data.to_pretty;
  //     $("#minPrice").html(fromPrice);
  //     $("#maxPrice").html(toPrice);
  //   },
  //   onFinish: (data) => {
  //     minimumPrice = Number(data.from_pretty) !== 0 ? data.from_pretty : undefined;
  //     maximumPrice = Number(data.to_pretty) !== 250 ? data.to_pretty : undefined;
  //   }
  // });
  //
  // $("#uploadInternet").ionRangeSlider({
  //   values: [10, 20, 30, 50, 100, 200, 300, 500, 1000],
  //   type: "range",
  //   grid: true,
  //   onChange: (data) => {
  //     // console.log(data)
  //     const fromPrice = data.from_value;
  //     const toPrice = data.to_value;
  //     $("#minPrice").html(fromPrice);
  //     $("#maxPrice").html(toPrice);
  //   },
  //   onFinish: (data) => {
  //     minimumUpload = Number(data.from_value) !== 10 ? data.from_value : undefined;
  //     maximumUpload = Number(data.to_value) !== 1000 ? data.to_value : undefined;
  //   }
  // });

  $("input").change((e) => {
    // console.log("changed");
    const name = e.target.name;
    const check = e.target.checked;
    // console.log(e.target.checked)
    // console.log(e.target.name);
    if (!check) {
      currentSelectedFilter = currentSelectedFilter.filter(i => i !== name);
    } else {
      currentSelectedFilter = [
        ...currentSelectedFilter,
        name,
      ]
    }
    // console.log(currentSelectedFilter);
    $("#selectedFilter").html(currentSelectedFilter.join(', '));
  });

  $(".applyButton").click(() => {
    console.log("minDownload", minimumDownload)
    console.log("maxDownload", maximumDownload)
    console.log("minUp", minimumUpload)
    console.log("maxUp", maximumUpload)
    console.log("minPrice", minimumPrice)
    console.log("maxPrice", maximumPrice)
  })
};


$(document).ready(() => {


  if (CHECK_PAGES[PAGES.NEW_LISTING]) {

    console.log("New listing");

    const currentCategorySelected = urlParams.get(URL_PARAMS.CATEGORY);
    const currentKindReservation = urlParams.get(URL_PARAMS.LISTING_SHAPE);
    // No category and no kind of reservation selected
    if (!currentCategorySelected && !currentKindReservation) {
      showCategorySelection();
    } else if (currentCategorySelected && !currentKindReservation) {
      showReservationTypeSelection(currentCategorySelected);
    } else {
      showDetailsNewListing(currentCategorySelected, currentKindReservation);
    }

    // console.log("category", currentCategorySelected);
    // console.log("kind", currentKindReservation);
    // // console.log($(".send_button"))
    // setTimeout(() => {
    //   console.log($(".send_button"))
    // }, 800);
    // console.log("------------")
  } else {
    addDisplay(".new-listing-form");
    addDisplay("#selected-groups");
  }


  $("#moreFilter").click(() => {
    console.log("click")
    addVisibility('.overlay');
    $("body").css("overflow", "hidden");
  });


  if (CHECK_PAGES[PAGES.LISTING_LIST] || CHECK_PAGES[PAGES.HOME]) {
    console.log("TUTTE LE INSERZIONI");

    createDialogWithMoreFilterIntoHomePage();

    // Replace Griglia and Mappa button
    const referenceForGrid = $("[title='Griglia']").attr("href");
    const referenceForMap = $("[title='Mappa']").attr("href");

    const selectorHome = $('.home-toolbar');

    const leftFilter = generateFilterForLeftHomeBar();

    const rightFilter = '<div class="switch">' +
      '<a  href=' + referenceForGrid + ' class="button secondary_black small w-inline-block"><img src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eac771b4ceba51b7de8f544_grid-interface.svg" alt="Grid" class="switch-icon"><span class="hiddenOn767">Griglia</span></a>' +
      '<a href=' + referenceForMap + ' class="button secondary_black small w-inline-block"><img src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eaab17abe49fe2613f58438_map.svg" alt="Map" class="switch-icon"><span class="hiddenOn767">Mappa</span></a>' +
      '</div>';

    $(selectorHome).html('<div class="containerFilterTopBar">' + leftFilter + '' + rightFilter + '</div>');

    const dropDownSelector = ".dropDown";

    $(".selectedDropDownText").click((e) => {
      const workbnbKey = $(e.target).attr("workbnb-key");
      const dropDownSelector = $('[workbnb-key="D' + workbnbKey + '"]');

      const currentDisplay = $(dropDownSelector).css("display");
      if (currentDisplay === 'none') {
        addDisplay(dropDownSelector);
        $(".dropDown").focus();
      } else {
        removeDisplay(dropDownSelector);
      }
    });


    $(".selectDropDown").click((e) => {
      const id = e.target.id;
      const key = $(e.target).attr("workbnb-key").substring(1);
      // console.log("Selected id", id);
      const hasKey = urlParams.get(key) !== null;
      // console.log("Selected key", key);
      if (id === "remove") {
        urlParams.delete(key);
      } else if (hasKey) {
        console.log("set", urlParams.set(key, id));
        console.log(urlParams.toString())
        // window.location.href = ROOT+"?"+urlParams.toString()
      } else {
        console.log("append", urlParams.append(key, id))
        console.log(urlParams.toString())
      }
      window.location.href = ROOT + "?" + urlParams.toString();
      removeDisplay(dropDownSelector);
    });

    $(".dropDown").focusout(() => {
      removeDisplay(dropDownSelector);
    });

    $("#moreFilter").click((e) => {
      console.log("click");
      addVisibility('.overlay');
    });
  }
});

