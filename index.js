const CHECK_PAGES = {
  [PAGES.HOME]: checkHome(),
  [PAGES.LISTING_LIST]: checkListingsList(),
  [PAGES.NEW_LISTING]: checkNewListing(),
  [PAGES.LISTING_DETAILS]: checkListingDetails(),
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

    applyGridView(4);

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

    selectDefaultItemFromURL();

    appendEventListener();

    $(".dropDown").focusout(() => {
      removeDisplay(dropDownSelector);
    });

    $(".moreFilter").click((e) => {
      console.log("temp")
      addVisibility('.overlay');
      $("body").css("overflow","hidden");
    });
    addVisibility("#homepage-filters");
  } else {
    resetOriginalCssForNotHomePage();
  }

  if(CHECK_PAGES[PAGES.LISTING_DETAILS]){

    console.log("page listing")
    parsePageListingDetails();

  }

  //Everywhere footer
  $("#sidewinder-wrapper").append("<footer id=\"footer\" class=\"footer\">\n" +
    "    <div class=\"container w-container\">\n" +
    "      <div class=\"footer-flex-container\">\n" +
    "        <div class=\"footer-links-wrapper\">\n" +
    "          <div>\n" +
    "            <h2 class=\"footer-heading\">Assistenza</h2>\n" +
    "            <ul class=\"w-list-unstyled\">\n" +
    "              <li><a href=\"mailto:ciao@workbnb.io?subject=Ciao%20workbnb%20%F0%9F%91%8B\" class=\"footer-link\">Contattaci</a><a href=\"https://workbnb.io/lungo-termine\" class=\"footer-link\" target=\"_blank\">Lungo termine</a></li>\n" +
    "            </ul><a href=\"https://workbnb.io/host\" target=\"_blank\" class=\"footer-link\">Diventa un host</a></div>\n" +
    "        </div><a href=\"https://workbnb.io\" target=\"_blank\" aria-current=\"page\" class=\"footer-logo-link w-inline-block w--current\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5e9c32ab88adf76b8cb60de9_H_Logotype_White.svg\" alt=\"\" class=\"image\"></a></div>\n" +
    "      <div class=\"footer-last-wrapper\">\n" +
    "        <div class=\"w-layout-grid grid-socials\"><a href=\"https://www.facebook.com/workbnb\" class=\"footer-social-icon w-inline-block\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5ea6ac58c07d782051424641_logo-facebook_white.svg\" alt=\"\"></a><a id=\"w-node-8ee847943669-47943648\" href=\"https://www.instagram.com/workbnb.io/\" class=\"footer-social-icon w-inline-block\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5ea6ac588ad6b679c09f652c_logo-instagram_white.svg\" alt=\"\"></a><a id=\"w-node-8ee84794366b-47943648\" href=\"https://www.linkedin.com/company/workbnb-io\" class=\"footer-social-icon w-inline-block\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5ea6ac58d3a80f969bd1682e_logo-linkedin_white.svg\" alt=\"\"></a></div>\n" +
    "        <div class=\"spacing_24\"></div>\n" +
    "        <div class=\"privacy-wrapper\">\n" +
    "          <div class=\"diritti-text\">© 2020 workbnb</div>\n" +
    "          <div class=\"iubenda-wrapper\"><a href=\"#\" class=\"iubenda-link\">Privacy</a><a href=\"#\" class=\"iubenda-link\">Termini</a><a href=\"#\" class=\"iubenda-link\">Cookies</a></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </footer>");

});
