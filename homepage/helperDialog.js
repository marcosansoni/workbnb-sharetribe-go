const CURRENT_URL_PARAMS = () => ({
  'CATEGORY': urlParams.get(URL_PARAMS.CATEGORY),
  'TRANSACTION_TYPE': urlParams.get(URL_PARAMS.TRANSACTION_TYPE),
  'MAX_PRICE': urlParams.get(FILTER.MAX_PRICE) || 250,
  'MIN_PRICE': urlParams.get(FILTER.MIN_PRICE) || 0,
  'MIN_DOWNLOAD': urlParams.get(FILTER.MIN_DOWNLOAD) || 10,
  'MAX_DOWNLOAD': urlParams.get(FILTER.MAX_DOWNLOAD) || 1000,
  'MIN_UPLOAD': urlParams.get(FILTER.MIN_UPLOAD) || 10,
  'MAX_UPLOAD': urlParams.get(FILTER.MAX_UPLOAD) || 1000,
  'COLAZIONE': urlParams.get(FILTER.COLAZIONE) || null,
  'PARCHEGGIO': urlParams.get(FILTER.PARCHEGGIO) || null,
});

let currentCategory = CURRENT_URL_PARAMS().CATEGORY;

let currentListingType = CURRENT_URL_PARAMS().TRANSACTION_TYPE;

let minimumPrice = CURRENT_URL_PARAMS().MIN_PRICE;
let maximumPrice = CURRENT_URL_PARAMS().MAX_PRICE;

let minimumDown = CURRENT_URL_PARAMS().MIN_DOWNLOAD;
let maximumDown = CURRENT_URL_PARAMS().MAX_DOWNLOAD;

let minimumUp = CURRENT_URL_PARAMS().MIN_UPLOAD;
let maximumUp = CURRENT_URL_PARAMS().MAX_UPLOAD;

//List of all amenities
let currentSelectedFilter = [];

let colazione = CURRENT_URL_PARAMS().COLAZIONE;
let parcheggio = CURRENT_URL_PARAMS().PARCHEGGIO;

//
// console.log(minimumDown)
// console.log(maximumDown)
// console.log(minimumUp)
// console.log(maximumUp)

const setFilter = (filter, type) => {

  const hasToBeAdded = currentSelectedFilter.includes(filter);
  console.log(hasToBeAdded)

  const itExists = CURRENT_URL_PARAMS()[type];
  console.log(itExists)

  const key = FILTER[type].split("checkbox_filter_option_")[1];
  console.log(key)

  if (itExists && !hasToBeAdded) {
    urlParams.delete(FILTER[type]);
    return;
  }

  if (!itExists && hasToBeAdded) {
    urlParams.set(FILTER[type], key)
  }
};

const setDefault = (urlParams, id) => {
  if (parcheggio) {
    $("#filter-parking").prop("checked", true);
    $("#filter-parking").attr("checked", true);
  }
}

const selectDefaultItemFromURL = () => {

  //Default category selected
  $("#category-" + currentCategory).prop("checked", true);
  $("#category-" + currentCategory).attr("checked", true);

  //Default Listing Type
  $("#listing-type-" + currentListingType).prop("checked", true);
  $("#listing-type-" + currentListingType).attr("checked", true);

  // Amenities List
  setDefault(parcheggio, 'filter-parking');

};


const appendEventListener = () => {

  $(".category-filter").change((e) => {
    // console.log(e.target.className)
    const idCurrent = e.target.id;
    $(".category-filter").attr('checked', false);
    $(".category-filter").prop('checked', false);
    $("#" + idCurrent).attr('checked', true);
    $("#" + idCurrent).prop('checked', true);
    currentCategory = e.target.name.split("category-")[1];
  });


  $(".listing-type-filter").change((e) => {

    console.log("Here")

    // console.log(e.target.className)
    const idCurrent = e.target.id;

    $(".listing-type-filter").prop('checked', false);
    $(".listing-type-filter").attr('checked', false);

    $("#" + idCurrent).prop('checked', true);
    $("#" + idCurrent).attr('checked', true);
    currentListingType = e.target.name.split("listing-type-")[1];
  });

  $("#removeCategory").click(() => {
    $(".category-filter").prop('checked', false);
    $(".category-filter").attr('checked', false);
    currentCategory = null;
  });

  $("#closeDialog").click(() => {
    console.log("closeDialog")
    removeVisibility('.overlay');
  });


  // Slider price
  const sliderPrice = document.getElementById('slider-price');
  noUiSlider.create(sliderPrice, {
    start: [CURRENT_URL_PARAMS().MIN_PRICE, CURRENT_URL_PARAMS().MAX_PRICE],
    connect: true,
    step: 1,
    tooltips: true,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
      'min': 0,
      'max': 250
    },
    format: wNumb({
      decimals: 0
    })
  });

  sliderPrice.noUiSlider.on('set.one', (values) => {
    minimumPrice = values[0];
    maximumPrice = values[1];
    $("#minPrice").html(minimumPrice);
    $("#maxPrice").html(maximumPrice);
  });

  $("#removePrice").click(() => {
    minimumPrice = 0;
    maximumPrice = 250;
    sliderPrice.noUiSlider.set([0, 250]);
    $("#minPrice").html(0);
    $("#maxPrice").html(250);
  });

  //Slider download
  const sliderDown = document.getElementById('slider-down');
  noUiSlider.create(sliderDown, {
    start: [CURRENT_URL_PARAMS().MIN_DOWNLOAD, CURRENT_URL_PARAMS().MAX_DOWNLOAD],
    connect: true,
    step: 1,
    tooltips: true,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
      'min': 10,
      'max': 1000,
    },
    format: wNumb({
      decimals: 0
    })
  });

  sliderDown.noUiSlider.on('set.one', (values) => {
    minimumDown = values[0];
    maximumDown = values[1];
    $("#minDown").html(minimumDown)
    $("#maxDown").html(maximumDown)
  });

  $("#removeDown").click(() => {
    minimumDown = 10;
    maximumDown = 1000;
    sliderDown.noUiSlider.set([min, max]);
    $("#minDown").html(minimumDown);
    $("#maxDown").html(maximumDown);
  });

  //Upload
  const sliderUp = document.getElementById('slider-up');
  noUiSlider.create(sliderUp, {
    start: [CURRENT_URL_PARAMS().MIN_UPLOAD, CURRENT_URL_PARAMS().MAX_UPLOAD],
    connect: true,
    step: 1,
    tooltips: true,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
      'min': 10,
      'max': 1000
    },
    format: wNumb({
      decimals: 0
    })
  });
  sliderUp.noUiSlider.on('set.one', (values) => {
    minimumUp = values[0];
    maximumUp = values[1];
    $("#minUp").html(minimumUp);
    $("#maxUp").html(maximumUp);
  });

  $("#removeUp").click(() => {
    minimumUp = 10;
    maximumUp = 1000;
    sliderUp.noUiSlider.set([min, max]);
    $("#minUp").html(minimumUp);
    $("#maxUp").html(maximumUp);
  });

  $("input").change((e) => {

    const name = e.target.name;
    const check = e.target.checked;

    if (name.includes("filter-")) {
      if (!check) {
        currentSelectedFilter = currentSelectedFilter.filter(i => i !== name);
      } else {
        currentSelectedFilter = [
          ...currentSelectedFilter,
          name,
        ]
      }
    }

    console.log(currentSelectedFilter)
  });

  const parseAmenitiesForURL = () => {
    setFilter('filter-parking', 'PARCHEGGIO');
  };

  $(".applyButton").click(() => {
    removeVisibility('.overlay');

    urlParams.delete(URL_PARAMS.CATEGORY);
    urlParams.delete(URL_PARAMS.LISTING_SHAPE);

    if (currentCategory) {
      urlParams.set(URL_PARAMS.CATEGORY, currentCategory);
    }

    if (currentListingType) {
      urlParams.set(URL_PARAMS.LISTING_SHAPE, currentListingType);
    }

    // Price
    urlParams.delete(FILTER.MIN_PRICE);
    urlParams.set(FILTER.MIN_PRICE, minimumPrice);
    urlParams.delete(FILTER.MAX_PRICE);
    urlParams.set(FILTER.MAX_PRICE, maximumPrice);

    // Download
    urlParams.delete(FILTER.MIN_DOWNLOAD);
    urlParams.set(FILTER.MIN_DOWNLOAD, minimumDown);
    urlParams.delete(FILTER.MAX_DOWNLOAD);
    urlParams.set(FILTER.MAX_DOWNLOAD, maximumDown);

    // Upload
    urlParams.delete(FILTER.MIN_UPLOAD);
    urlParams.set(FILTER.MIN_UPLOAD, minimumUp);
    urlParams.delete(FILTER.MAX_UPLOAD);
    urlParams.set(FILTER.MAX_UPLOAD, maximumUp);

    parseAmenitiesForURL();

    console.log(urlParams.toString())

    // window.location.href = ROOT + "?" + urlParams.toString();
  });


}

