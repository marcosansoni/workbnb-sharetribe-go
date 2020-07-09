const ROOT = 'https://devworkbnb1.sharetribe.com/';

const PAGES = {
  HOME: 'Home',
  LISTING_LIST: 'ListingList',
  LISTING_DETAILS: 'ListingDetails',
  NEW_LISTING: 'NewListing',
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
  [CATEGORY.MEETING_ROOM]: 531929,
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

const FILTER = {
  MIN_PRICE: 'price_min',
  MAX_PRICE: 'price_max',
  MIN_DOWNLOAD: 'nf_min_145035',
  MAX_DOWNLOAD: 'nf_max_145035',
  MIN_UPLOAD: 'nf_min_145036',
  MAX_UPLOAD: 'nf_max_145036',
  COLAZIONE: 'checkbox_filter_option_527729',
  PARCHEGGIO: 'checkbox_filter_option_527728',
  CANCELLERIA:'checkbox_filter_option_527728',
  PET_FRIENDLY:'checkbox_filter_option_527728',
  MONITOR:'checkbox_filter_option_527728',
  STAMPANTE:'checkbox_filter_option_527728',
  SELF:'checkbox_filter_option_527728',
  ZONA_RELAX:'checkbox_filter_option_527728',
  SEDIA_ERGONOMICA:'checkbox_filter_option_527728',
  IGIENIZZAZIONE:'checkbox_filter_option_527728',
  BEVANDE:'checkbox_filter_option_527728',
  MINIBAR:'checkbox_filter_option_527728',
  BICI:'checkbox_filter_option_527728',
  SPAZIO_ESTERNO:'checkbox_filter_option_527728',
  CUCINA:'checkbox_filter_option_527728',
  ARIA:'checkbox_filter_option_527728',
  RISCALDAMENTO:'checkbox_filter_option_527728',
  PISCINA:'checkbox_filter_option_527728',
  BAR:'checkbox_filter_option_527728',
  FITNESS:'checkbox_filter_option_527728',
  HONESTY_BAR:'checkbox_filter_option_527728',
  RICARICA:'checkbox_filter_option_527728',
  DOCCIA:'checkbox_filter_option_527728',
  RISTORAZIONE:'checkbox_filter_option_527728',
  DEPOSITO:'checkbox_filter_option_527728',
  POSTAZIONE_FINESTRATA:'checkbox_filter_option_527728',
  IMPIANTO:'checkbox_filter_option_527728',
  LAVAGNA:'checkbox_filter_option_527728',
  MICROFONO:'checkbox_filter_option_527728',
  PROIETTORE:'checkbox_filter_option_527728',
  ALLATTAMENTO:'checkbox_filter_option_527728',
};

