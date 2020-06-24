const CURRENT_URL_PARAMS = () => ({
  'CATEGORY': urlParams.get(URL_PARAMS.CATEGORY),
  'TRANSACTION_TYPE': urlParams.get(URL_PARAMS.TRANSACTION_TYPE),
  'MAX_PRICE': 250,
  'MIN_PRICE': 0,
  'MIN_DOWNLOAD': 10,
  'MAX_DOWNLOAD': 1000,
  'MIN_UPLOAD': 10,
  'MAX_UPLOAD': 1000,
});

const appendEventListener = () => {

  $(".category-filter").change((e) => {
    // console.log(e.target.className)
    const idCurrent = e.target.id;
    $(".category-filter").attr('checked', false);
    $(".category-filter").prop('checked', false);
    $("#" + idCurrent).attr('checked', true);
    $("#" + idCurrent).prop('checked', true);
    currentCategory = e.target.name.split("category-");
  });

  console.log("Caricato")

  $(".listing-type-filter").change((e) => {

    console.log("Here")

    // console.log(e.target.className)
    const idCurrent = e.target.id;

    $(".listing-type-filter").prop('checked', false);
    $(".listing-type-filter").attr('checked', false);

    $("#" + idCurrent).prop('checked', true);
    $("#" + idCurrent).attr('checked', true);
    currentListingType = e.target.name.split("listing-type-");
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

  $(".applyButton").click(() => {
    removeVisibility('.overlay');
    console.log("Click on apply")
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
    console.log(values)
    const minimumPrice = values[0];
    const maximumPrice = values[1];
    $("#minPrice").html(minimumPrice);
    $("#maxPrice").html(maximumPrice);
  });

  $("#removePrice").click(() => {
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
    const min = values[0];
    const max = values[1];
    $("#minDown").html(min)
    $("#maxDown").html(max)
  });

  $("#removeDown").click(() => {
    const min = 10;
    const max = 1000;
    sliderDown.noUiSlider.set([min, max]);
    $("#minDown").html(min);
    $("#maxDown").html(max);
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
    const min = values[0];
    const max = values[1];
    $("#minUp").html(min)
    $("#maxUp").html(max)
  });

  $("#removeUp").click(() => {
    const min = 10;
    const max = 1000;
    sliderUp.noUiSlider.set([min, max]);
    $("#minUp").html(min);
    $("#maxUp").html(max);
  });
}

