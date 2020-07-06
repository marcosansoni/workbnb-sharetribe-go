const CURRENT_URL_PARAMS = () => ({
  CATEGORY: urlParams.get(URL_PARAMS.CATEGORY),
  TRANSACTION_TYPE: urlParams.get(URL_PARAMS.TRANSACTION_TYPE),
  MAX_PRICE: urlParams.get(FILTER.MAX_PRICE) || 250,
  MIN_PRICE: urlParams.get(FILTER.MIN_PRICE) || 0,
  MIN_DOWNLOAD: urlParams.get(FILTER.MIN_DOWNLOAD) || 10,
  MAX_DOWNLOAD: urlParams.get(FILTER.MAX_DOWNLOAD) || 1000,
  MIN_UPLOAD: urlParams.get(FILTER.MIN_UPLOAD) || 10,
  MAX_UPLOAD: urlParams.get(FILTER.MAX_UPLOAD) || 1000,
  COLAZIONE: urlParams.get(FILTER.COLAZIONE) || null,
  PARCHEGGIO: urlParams.get(FILTER.PARCHEGGIO) || null,
  CANCELLERIA: urlParams.get(FILTER.CANCELLERIA) || null,
  PARCHEGGIO: urlParams.get(FILTER.PARCHEGGIO) || null,
  PET_FRIENDLY: urlParams.get(FILTER.PET_FRIENDLY) || null,
  MONITOR: urlParams.get(FILTER.MONITOR) || null,
  STAMPANTE: urlParams.get(FILTER.STAMPANTE) || null,
  SELF: urlParams.get(FILTER.SELF) || null,
  ZONA_RELAX: urlParams.get(FILTER.ZONA_RELAX) || null,
  SEDIA_ERGONOMICA: urlParams.get(FILTER.SEDIA_ERGONOMICA) || null,
  IGIENIZZAZIONE: urlParams.get(FILTER.IGIENIZZAZIONE) || null,
  BEVANDE: urlParams.get(FILTER.BEVANDE) || null,
  MINIBAR: urlParams.get(FILTER.MINIBAR) || null,
  BICI: urlParams.get(FILTER.BICI) || null,
  SPAZIO_ESTERNO: urlParams.get(FILTER.SPAZIO_ESTERNO) || null,
  CUCINA: urlParams.get(FILTER.CUCINA) || null,
  ARIA: urlParams.get(FILTER.ARIA) || null,
  RISCALDAMENTO: urlParams.get(FILTER.RISCALDAMENTO) || null,
  PISCINA: urlParams.get(FILTER.PISCINA) || null,
  BAR: urlParams.get(FILTER.BAR) || null,
  FITNESS: urlParams.get(FILTER.FITNESS) || null,
  HONESTY_BAR: urlParams.get(FILTER.HONESTY_BAR) || null,
  RICARICA: urlParams.get(FILTER.RICARICA) || null,
  DOCCIA: urlParams.get(FILTER.DOCCIA) || null,
  RISTORAZIONE: urlParams.get(FILTER.RISTORAZIONE) || null,
  DEPOSITO: urlParams.get(FILTER.DEPOSITO) || null,
  POSTAZIONE_FINESTRATA: urlParams.get(FILTER.POSTAZIONE_FINESTRATA) || null,
  IMPIANTO: urlParams.get(FILTER.IMPIANTO) || null,
  LAVAGNA: urlParams.get(FILTER.LAVAGNA) || null,
  MICROFONO: urlParams.get(FILTER.MICROFONO) || null,
  PROIETTORE: urlParams.get(FILTER.PROIETTORE) || null,
  ALLATTAMENTO: urlParams.get(FILTER.ALLATTAMENTO) || null,
});

console.log(CURRENT_URL_PARAMS)
console.log(CURRENT_URL_PARAMS().CATEGORY)

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
let cancelleria = CURRENT_URL_PARAMS().CANCELLERIA;
let pet = CURRENT_URL_PARAMS().PET_FRIENDLY;
let monitor = CURRENT_URL_PARAMS().MONITOR;
let stampante = CURRENT_URL_PARAMS().STAMPANTE;
let self = CURRENT_URL_PARAMS().SELF;
let zona_relax = CURRENT_URL_PARAMS().ZONA_RELAX;
let sedia = CURRENT_URL_PARAMS().SEDIA_ERGONOMICA;
let igienizzazione = CURRENT_URL_PARAMS().IGIENIZZAZIONE;
let bevande = CURRENT_URL_PARAMS().BEVANDE;
let minibar = CURRENT_URL_PARAMS().MINIBAR;
let bici = CURRENT_URL_PARAMS().BICI;
// let spazio_esterno = CURRENT_URL_PARAMS().SPAZIO_ESTERNO;
// let cucina = CURRENT_URL_PARAMS().CUCINA;
// let aria = CURRENT_URL_PARAMS().ARIA;
// let riscaldamento = CURRENT_URL_PARAMS().RISCALDAMENTO;
// let piscina = CURRENT_URL_PARAMS().PISCINA;
// let bar = CURRENT_URL_PARAMS().BAR;
// let fitness = CURRENT_URL_PARAMS().FITNESS;
// let honesty = CURRENT_URL_PARAMS().HONESTY_BAR;
// let ricarica = CURRENT_URL_PARAMS().RICARICA;
// let doccia = CURRENT_URL_PARAMS().DOCCIA;
// let ristorazione = CURRENT_URL_PARAMS().RISTORAZIONE;
// let deposito = CURRENT_URL_PARAMS().DEPOSITO;
// let postazione = CURRENT_URL_PARAMS().POSTAZIONE_FINESTRATA;
// let impianto = CURRENT_URL_PARAMS().IMPIANTO;
// let lavagna = CURRENT_URL_PARAMS().LAVAGNA;
// let microfono = CURRENT_URL_PARAMS().MICROFONO;
// let proiettore = CURRENT_URL_PARAMS().PROIETTORE;
// let allattamento = CURRENT_URL_PARAMS().ALLATTAMENTO;

console.log(maximumUp)
console.log(colazione)
// console.log(sedia)


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

const setDefault = (value, id) => {
  if (value) {
    $("#" + id).prop("checked", true);
    $("#" + id).attr("checked", true);
    currentSelectedFilter = [
      ...currentSelectedFilter,
      id,
    ];
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
  setDefault(cancelleria, 'filter-cancelleria');
  setDefault(pet, 'filter-pet-friendly');
  setDefault(stampante, 'filter-stampante');
  setDefault(self, 'filter-self-check-in');
  setDefault(zona_relax, 'filter-zona-relax');
  setDefault(sedia, 'filter-sedia-ergonomica');
  setDefault(igienizzazione, 'filter-igienizzazione');
  setDefault(bevande, 'filter-bevande');
  setDefault(colazione, 'filter-colazione');
  setDefault(minibar, 'filter-minibar');
  setDefault(bici, 'filter-bici');
  setDefault(spazio_esterno, 'filter-spazio-esterno');
  setDefault(cucina, 'filter-cucina');
  setDefault(aria, 'filter-aria');
  setDefault(riscaldamento, 'filter-riscaldamento');
  setDefault(piscina, 'filter-piscina');
  setDefault(bar, 'filter-bar');
  setDefault(fitness, 'filter-fitness');
  setDefault(honesty, 'filter-honesty');
  setDefault(ricarica, 'filter-elettrici');

};

const parseAmenitiesForURL = () => {
  setFilter('filter-parking', 'PARCHEGGIO');
  setFilter('filter-cancelleria', 'CANCELLERIA');
  setFilter('filter-pet-friendly', 'PET_FRIENDLY');
  setFilter('filter-stampante', 'STAMPANTE');
  setFilter('filter-self-check-in', 'SELF');
  setFilter('filter-zona-relax', 'ZONA_RELAX');
  setFilter('filter-sedia-ergonomica', 'SEDIA_ERGONOMICA');
  setFilter('filter-igienizzazione', 'IGIENIZZAZIONE');
  setFilter('filter-bevande', 'BEVANDE');
  setFilter('filter-colazione', 'COLAZIONE');
  setFilter('filter-minibar', 'MINIBAR');
  setFilter('filter-bici', 'BICI');
  setFilter('filter-spazio-esterno', 'SPAZIO_ESTERNO');
  setFilter('filter-cucina', 'CUCINA');
  setFilter('filter-aria', 'ARIA');
  setFilter('filter-riscaldamento', 'RISCALDAMENTO');
  setFilter('filter-piscina', 'PISCINA');
  setFilter('filter-bar', 'BAR');
  setFilter('filter-fitness', 'FITNESS');
  setFilter('filter-honesty', 'HONESTY_BAR');
  setFilter('filter-elettrici', 'RICARICA');
};

const generateURL = () => {
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
    $("body").css("overflow", "auto");
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

  $("#removeServizi").click(() => {
    console.log("removed servizi")
    $(".filter-general").attr('checked', false);
    currentSelectedFilter = [];
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


  $(".cancelButton").click(() => {
    removeVisibility('.overlay');
    $("body").css("overflow", "auto");
    //servizi
    $(".filter-general").attr('checked', false);
    currentSelectedFilter = [];
    // Upload
    minimumUp = 10;
    maximumUp = 1000;
    sliderUp.noUiSlider.set([min, max]);
    $("#minUp").html(minimumUp);
    $("#maxUp").html(maximumUp);
    // Download
    minimumDown = 10;
    maximumDown = 1000;
    sliderDown.noUiSlider.set([min, max]);
    $("#minDown").html(minimumDown);
    $("#maxDown").html(maximumDown);
    //Price
    minimumPrice = 0;
    maximumPrice = 250;
    sliderPrice.noUiSlider.set([0, 250]);
    $("#minPrice").html(0);
    $("#maxPrice").html(250);

    generateURL();
    window.location.href = ROOT + "?" + urlParams.toString();
  })

  $(".applyButton").click(() => {
    removeVisibility('.overlay');
    $("body").css("overflow", "auto");

    urlParams.delete(URL_PARAMS.CATEGORY);
    urlParams.delete(URL_PARAMS.LISTING_SHAPE);

    if (currentCategory) {
      urlParams.set(URL_PARAMS.CATEGORY, currentCategory);
    }

    if (currentListingType) {
      urlParams.set(URL_PARAMS.LISTING_SHAPE, currentListingType);
    }

    generateURL();

    console.log(urlParams.toString());

    window.location.href = ROOT + "?" + urlParams.toString();
  });
}

