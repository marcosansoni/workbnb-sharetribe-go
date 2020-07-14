// Open the selected tab into new listings
const openNewListing = (tab = 1) => {
  NEW_LISTING_HELPER.resetError(tab);
  switch (tab) {
    case 1:
      // Display Title Text
      displayText('Titolo dell\'inserzione');
      // Display Price Title
      addDisplay('.price-container');
      // Display Description
      displayText("Descrizione dettagliata");
      addDisplay("textarea");
      return;
    case 2:
      displayText('Internet Download');
      displayText('Internet Upload');
      displayText('Servizi inclusi');
      displayText('Capienza');
      // addDisplay(".checkbox-group-container label", 'inline-block');
      const selectorCucina = $('label:contains("Cucina")')[1];
      addDisplay(selectorCucina);
      addDisplay($(selectorCucina).next());
      const selectorParcehggio = $('label:contains("Parcheggio")')[1];
      addDisplay(selectorParcehggio);
      addDisplay($(selectorParcehggio).next());
      const selectorColazione = $('label:contains("Colazione")')[1];
      addDisplay(selectorColazione);
      addDisplay($(selectorColazione).next());
      return;
    case 3:
      // addDisplay(".checkbox-group-container label", 'inline-block');
      displayText('Min stay');
      displayText('Min hour');
      displayText('Orario check-in');
      displayText('Orario apertura');
      displayText('Orario check-out');
      displayText('Orario chiusura');
      displayText('Festivi');
      return;
    case 4:
      // const selectorCucina = $('label:contains("Cucina")')[1];
      // addDisplay(selectorCucina);
      // addDisplay($(selectorCucina).next());
      // const selectorParcehggio = $('label:contains("Parcheggio")')[1];
      // addDisplay(selectorParcehggio);
      // addDisplay($(selectorParcehggio).next());
      // const selectorColazione = $('label:contains("Colazione")')[1];
      // addDisplay(selectorColazione);
      // addDisplay($(selectorColazione).next());
      return;
    case 5:
      displayText('Località', 2);
      addDisplay('.jsmap');
      return;
    case 6:
      displayText('Immagine');
      addDisplay('.listing-images');
      return;
    default:
      return;
  }
};

const resetErrorNewListing = (tab) => {
  switch (tab) {
    case 1:
      resetError('Titolo dell\'inserzione');
      resetError('Prezzo', 6);
      return;
    case 2:
      // Error
      resetError('Internet Download');
      resetError('Internet Upload');
      return;
    case 3:
      //Reset error previously hidden
      resetError('Orario check-in');
      resetError('Orario check-out');
      resetError('Min stay');
      resetError('Orario apertura');
      resetError('Orario chiusura');
      resetError('Min hour');
      return;
    // No errors into this tab
    case 4:
    case 5:
    case 6:
    default:
      return;
  }
};

// Open the selected tab into new listings
const closeNewListing = (tab = 1) => {
  switch (tab) {
    case 1:
      removeDisplayText('Titolo dell\'inserzione');
      removeDisplay('.price-container');
      removeDisplayText("Descrizione dettagliata");
      removeDisplay("textarea");
      // Hide error
      hideError('Titolo dell\'inserzione');
      hideError('Prezzo', 6);
    case 2:
      removeDisplayText('Internet Download');
      removeDisplayText('Internet Upload');
      removeDisplayText('Servizi inclusi');
      removeDisplayText('Capienza');
      // removeDisplay(".checkbox-group-container label");
      // Error
      hideError('Internet Download');
      hideError('Internet Upload');

      const selectorCucina = $('label:contains("Cucina")')[1];
      removeDisplay(selectorCucina);
      removeDisplay($(selectorCucina).next());
      const selectorParcehggio = $('label:contains("Parcheggio")')[1];
      removeDisplay(selectorParcehggio);
      removeDisplay($(selectorParcehggio).next());
      const selectorColazione = $('label:contains("Colazione")')[1];
      removeDisplay(selectorColazione);
      removeDisplay($(selectorColazione).next());
      return;
    case 3:
      // removeDisplay(".checkbox-group-container label");

      removeDisplayText('Min stay');
      removeDisplayText('Min hour');

      // Check-In
      removeDisplayText('Orario check-in');
      removeDisplayText('Orario apertura');

      // Check-out
      removeDisplayText('Orario check-out');
      removeDisplayText('Orario chiusura');

      removeDisplayText('Festivi');
      // Error
      hideError('Orario check-out');
      hideError('Orario chiusura');
      hideError('Orario check-in');
      hideError('Orario apertura');
      hideError('Min stay');
      hideError('Min hour');
      return;
    case 4:
      // const selectorCucina = $('label:contains("Cucina")')[1];
      // removeDisplay(selectorCucina);
      // removeDisplay($(selectorCucina).next());
      // const selectorParcehggio = $('label:contains("Parcheggio")')[1];
      // removeDisplay(selectorParcehggio);
      // removeDisplay($(selectorParcehggio).next());
      // const selectorColazione = $('label:contains("Colazione")')[1];
      // removeDisplay(selectorColazione);
      // removeDisplay($(selectorColazione).next());
      return;
    case 5:
      removeDisplayText('Località', 2);
      removeDisplay('.jsmap');
      return;
    case 6:
      removeDisplayText('Immagine');
      removeDisplay('.listing-images');
      return;
    default:
      return;
  }
};

const toggleNewListing = (tab = 1) =>
  isShowNewListing(tab) ? closeNewListing(tab) : openNewListing(tab);


const checkIfLabelIsShown = (title) => {
  const selector = $('label:contains(' + title + ')');
  if (selector.length > 0) {
    return selector.css("display") !== "none";
  }
  return false;
};

const isShowNewListing = (tab = 1) => {
  switch (tab) {
    case 1:
      // Check if titolo dell'inserzione is shown
      return checkIfLabelIsShown('Titolo dell\'inserzione');
    case 2:
      // Check if filter is shown
      return checkIfLabelIsShown('Internet Download');
    case 3:
      //Check if some extra is shown
      return checkIfLabelIsShown('Orario check-in') || checkIfLabelIsShown('Orario apertura');

    case 4:
      const selector = $('label:contains("Cucina")')[1];
      console.log("isShow 4", $(selector).css("display") !== "none")
      return $(selector).css("display") !== "none";
    case 5:
      //Check if some extra is shown
      return checkIfLabelIsShown('Località');
    case 6:
      //Check if some extra is shown
      return checkIfLabelIsShown('Immagine');
    default:
      return;
  }
};

const isErrorNewListing = (tab = 1) => {
  switch (tab) {
    case 1:
      //Check if title is error
      const isErrorTitle = detectIfTextIsError("Titolo dell'inserzione");
      // Check if price is valid
      const priceErrorSelector = $("#listing_price-error");
      const isErrorPrice = priceErrorSelector && priceErrorSelector.length > 0 && priceErrorSelector[0] && priceErrorSelector.css("display") !== 'none';
      console.log("error title ", isErrorTitle, "error price", isErrorPrice);
      return isErrorPrice || isErrorTitle;
    // No error state into this tab
    case 2:
      //Check if title is error
      const isDownloadError = detectIfTextIsError("Internet Download");
      const isUploadError = detectIfTextIsError("Internet Upload");
      return isDownloadError || isUploadError;
    case 3:
      const isMinHourError = detectIfTextIsError("Min hour");
      const isMinStayError = detectIfTextIsError("Min stay");
      const isCheckInError = detectIfTextIsError("Orario check-in");
      const isAperturaError = detectIfTextIsError("Orario apertura");
      const isCheckOutError = detectIfTextIsError("Orario check-out");
      const isChiusuraError = detectIfTextIsError("Orario chiusura");
      return isMinHourError || isMinStayError || isCheckInError || isCheckOutError || isAperturaError || isChiusuraError;
    case 4:
    case 5:
    case 6:
    default:
      return false;
    // return isValidTitle && isErrorPrice
  }
};

const NEW_LISTING_HELPER = {
  open: openNewListing,
  toggle: toggleNewListing,
  error: isErrorNewListing,
  isShow: isShowNewListing,
  close: closeNewListing,
  resetError: resetErrorNewListing,
};
