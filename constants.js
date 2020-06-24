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

const FILTER = {
  MIN_PRICE: 'price_min',
  MAX_PRICE: 'price_max',
  MIN_DOWNLOAD: 'nf_min_145035',
  MAX_DOWNLOAD: 'nf_max_145035',
  MIN_UPLOAD: 'nf_min_145036',
  MAX_UPLOAD: 'nf_max_145036',
};
