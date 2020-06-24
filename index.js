const CHECK_PAGES = {
  [PAGES.HOME]: checkHome(),
  [PAGES.LISTING_LIST]: checkListingsList(),
  [PAGES.NEW_LISTING]: checkNewListing(),
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

  } else {
    addDisplay(".new-listing-form");
    addDisplay("#selected-groups");
  }

  console.log("help")


  if (CHECK_PAGES[PAGES.LISTING_LIST] || CHECK_PAGES[PAGES.HOME]) {
    console.log("TUTTE LE INSERZIONI");


    createDialogFilterHomePage();
    // createDialogWithMoreFilterIntoHomePage();

    applyGridView();

    // Replace Griglia and Mappa button
    const referenceForGrid = $("[title='Griglia']").attr("href");
    const referenceForMap = $("[title='Mappa']").attr("href");

    const selectorHome = $('.home-toolbar');

    const leftFilter = generateFilterForLeftHomeBar();

    const rightFilter = '<div class="switch">' +
      '<a  href=' + referenceForGrid + ' class="button secondary_black small w-inline-block hiddenBelow767"><img src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eac771b4ceba51b7de8f544_grid-interface.svg" alt="Grid" class="switch-icon"><span class="hiddenOn767">Griglia</span></a>' +
      '<a href=' + referenceForMap + ' class="button secondary_black small w-inline-block hiddenBelow767"><img src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eaab17abe49fe2613f58438_map.svg" alt="Map" class="switch-icon"><span class="hiddenOn767">Mappa</span></a>' +
      '<a  href=' + referenceForGrid + ' class="button secondary_black small w-inline-block hiddenOver767"><img src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eac771b4ceba51b7de8f544_grid-interface.svg" alt="Grid" class="switch-icon" style="margin: 0"></a>' +
      '<a href=' + referenceForMap + ' class="button secondary_black small w-inline-block hiddenOver767"><img src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eaab17abe49fe2613f58438_map.svg" alt="Map" class="switch-icon" style="margin: 0"></a>' +
      '</div>';

    $(selectorHome).html('<div class="containerFilterTopBar">' + leftFilter + '' + rightFilter + '</div>');

    const dropDownSelector = ".dropDown";

    let isOpenDialog = {};

    $(".selectedDropDownText").click((e) => {
      const workbnbKey = $(e.target).attr("workbnb-key");
      const dropDownSelector = $('[workbnb-key="D' + workbnbKey + '"]');

      if (isOpenDialog && isOpenDialog[workbnbKey]) {
        removeDisplay(dropDownSelector);
        isOpenDialog = {
          ...isOpenDialog,
          [workbnbKey]: false,
        }
      } else {
        isOpenDialog = {
          ...isOpenDialog,
          [workbnbKey]: true,
        };
        addDisplay(dropDownSelector);
        $(".dropDown").focus();
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

    appendEventListener();

    $(".dropDown").focusout(() => {
      removeDisplay(dropDownSelector);
    });

    $(".moreFilter").click((e) => {
      addVisibility('.overlay');
    });
  } else {
    resetOriginalCssForNotHomePage();
  }
});
