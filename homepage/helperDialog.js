const CURRENT_URL_PARAMS = () => ({
  'CATEGORY': urlParams.get(URL_PARAMS.CATEGORY),
  'TRANSACTION_TYPE': urlParams.get(URL_PARAMS.TRANSACTION_TYPE),
});


$(".category-filter").change((e) => {
  // console.log(e.target.className)
  const idCurrent = e.target.id;
  // $(".category-filter").attr('checked', false);
  $(".category-filter").prop('checked', false);
  // $(this).attr('checked', true);
  $("#" + idCurrent).prop('checked', true);
  currentCategory = e.target.name.split("category-");
});

$(".listing-type-filter").change((e) => {
  // console.log(e.target.className)
  const idCurrent = e.target.id;
  // $(".category-filter").attr('checked', false);
  $(".listing-type-filter").prop('checked', false);
  // $(this).attr('checked', true);
  $("#" + idCurrent).prop('checked', true);
  currentListingType = e.target.name.split("listing-type-");
});

$("#removeCategory").click(() => {
  $(".category-filter").prop('checked', false);
  currentCategory = null;
});

$("#closeDialog").click(() => {
  removeVisibility('.overlay');
});

$(".applyButton").click(() => {
  removeVisibility('.overlay');
  console.log("Click on apply")
});

