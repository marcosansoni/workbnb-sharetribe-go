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

  console.log("addd")

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

const showDetailsNewListing = (category, reservation) => {
  setTimeout(() => {
    onFormCompletedLoading(category, reservation);
    addDisplay(".new-listing-form")
  }, 800);
};
