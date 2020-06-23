const generateFilterWithDropDown = (currentType, items, key, defaultText, idRemove,) => {
  return '<div class="containerDropDown hiddenOnMobile">' +
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


const applyGridView = (numberColumn = 3) => {
  const selectorHomeContainer = $('.home-fluid-thumbnail-grid');
  selectorHomeContainer.addClass("w-layout-grid");
  selectorHomeContainer.addClass("grid-" + numberColumn + "-column");
  // Upper scope
  addDisplay(".home-fluid-thumbnail-grid-narrow");
  addVisibility("article");
  $(".home-fluid-thumbnail-grid-narrow").css("display", "block");
  // To avoid buffering
  $("article").css("visibility", "visible")
};

const resetOriginalCssForNotHomePage = () => {
  // $(".pagination").css("visibility","visible")
  // search by location is working only on homepage
  removeVisibility($("[class*='SearchBar__form']"));
  removeVisibility($("[class*='SearchBar__root']"));
  // $("[class*='SearchBar__form']").css("visibility","hidden")
  // $("[class*='SearchBar__root']").css("visibility","hidden")
  addVisibility("article");
  // $("article").css("visibility","visible")
};
