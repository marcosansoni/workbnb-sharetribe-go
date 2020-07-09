const getKeyByValue = (object, value) =>
  Object.keys(object).find(key => object[key] === value);

const isNumber = (value) => !isNaN(value);


//Add and remove visibility and display
const addVisibility = (selector) => $(selector).css("visibility", "visible");
const removeVisibility = (selector) => $(selector).css("visibility", "hidden");
const addDisplay = (selector, displayType = 'block') => $(selector).css("display", displayType);
const removeDisplay = (selector) => $(selector).css("display", "none");
const removeDisplayImportant = (selector) => $(selector).css("display", "none !important");

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



const checkListingDetails = () => {
  return splitPath[splitPath.length - 1].length > 0
    && isNumber(splitPath[splitPath.length - 1].charAt(0))
    && splitPath[splitPath.length - 2] === 'listings'
};


const displayText = (title, nextNumber = 1, displayType) => {
  let textSelector = $('label:contains(' + title + ')');
  addDisplay(textSelector, displayType);
  for (let i = 0; i < nextNumber; i++) {
    textSelector = textSelector.next();
    addDisplay(textSelector);
  }
};

const removeDisplayText = (title, nextNumber = 1) => {
  let textSelector = $('label:contains(' + title + ')');
  removeDisplay(textSelector);
  for (let i = 0; i < nextNumber; i++) {
    textSelector = textSelector.next();
    removeDisplay(textSelector);
  }
};

const toggleDisplayText = (title, nextNumber = 1, displayType) => {
  const isShown = $('label:contains(' + title + ')').css("display") !== "none";
  if (isShown) {
    return removeDisplayText(title, nextNumber);
  }
  return displayText(title, nextNumber, displayType);
};
