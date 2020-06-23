const CURRENT_URL_PARAMS = () => ({
  'CATEGORY': urlParams.get(URL_PARAMS.CATEGORY),
  'TRANSACTION_TYPE': urlParams.get(URL_PARAMS.TRANSACTION_TYPE),
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


  // $("#closeDialog").click(() => {
  //   console.log("closeDialog")
  //   removeVisibility('.overlay');
  // });
}

