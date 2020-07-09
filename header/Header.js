const addHeader = () => {
  // Search by location dentro header
  $("[class*='SearchBar__form']").css("padding-left", "42px");
  $("[class*='SearchBar__locationInput']").attr("placeholder", "Prova \"Verona\"");

  $("[class*='ProfileDropdown__box']").addClass("avatarDropdown");

  console.log("Header caricato")

// Wrappo header con un container
  $("#topbar-container").wrap("<div class='wrapperHeader'></div>");


// Mobile menu
  $(".MenuItem:first").append("<a class=\"MenuItem_link MenuItem__menuitemLink__2Eedg MenuMobile__menuSectionMenuItemLink__GfyW6\" target=\"_blank\" href=\"https://workbnb.io/lungo-termine\" style=\"color:#222222;\" data-reactid=\"20\">Lungo Termine</a>")
  $(".MenuItem:first").append("<a class=\"MenuItem_link MenuItem__menuitemLink__2Eedg MenuMobile__menuSectionMenuItemLink__GfyW6\" target=\"_blank\" href=\"https://workbnb.io/host\" style=\"color:#222222;\" data-reactid=\"20\">Diventa un host</a>")


  $("a.Logo").replaceWith("<a href=\"https://workbnb.io/\" aria-current=\"page\" class=\"home-logo w-nav-brand w--current\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5e9c61a738205a3d51d4f365_H_Logotype_Black.svg\" alt=\"\"></a>")
  $(".MenuPriority").replaceWith("<span></span>")

  const isLogged = $(".AvatarDropdown").length > 0

  if (isLogged) {
    $("a.AddNewListingButton").replaceWith("<nav role=\"navigation\" class=\"nav-menu w-nav-menu hiddenOnMobile\"><a href=\"https://spazi.workbnb.io/it/listings/new\" class=\"button secondary_black small w-button\">Candida struttura</a></nav>")
    $("a.MenuItem_link:first").attr("href", "https://spazi.workbnb.io");
    $("a.home-logo").attr("href", "https://spazi.workbnb.io");
    $(".MenuItem:first").append("<a class=\"MenuItem_link MenuItem__menuitemLink__2Eedg MenuMobile__menuSectionMenuItemLink__GfyW6\" href=\"https://spazi.workbnb.io/it/listings/new\" style=\"color:#222222;\" data-reactid=\"20\">Candida struttura</a>")
  } else {
    $("a.AddNewListingButton").replaceWith("<nav role=\"navigation\" class=\"nav-menu w-nav-menu hiddenOnMobile\"><a href=\"https://spazi.workbnb.io/it/login\" class=\"nav-link w-nav-link\">Accedi</a><a href=\"https://spazi.workbnb.io/it/signup\"  class=\"button secondary_black small w-button\">Registrati</a></nav>")
    $(".OffScreenMenu_main").append("<div class=\"MenuSection MenuMobile__menuSection__gD-As\" data-reactid=\"13\"><div class=\"MenuSection_title MenuMobile__menuSectionTitle__2HlQg\" data-reactid=\"14\">User</div><div class=\"MenuItem MenuItem__menuitem__3_-l_  MenuMobile__menuSectionMenuItem__2yMLC\" data-reactid=\"15\"><a class=\"MenuItem_link MenuItem__menuitemLink__2Eedg MenuMobile__menuSectionMenuItemLink__GfyW6\" href=\"https://spazi.workbnb.io/it/login\" style=\"color:#222222;\" data-reactid=\"16\">Login</a><a class=\"MenuItem_link MenuItem__menuitemLink__2Eedg MenuMobile__menuSectionMenuItemLink__GfyW6\"  href=\"https://spazi.workbnb.io/it/signup\" style=\"color:#222222;\" data-reactid=\"20\">Registrati</a></div></div>")
  }

  $("<nav role=\"navigation\" style='margin-right:0' class=\"nav-menu w-nav-menu hiddenOnMobile\"><a href=\"https://workbnb.io/lungo-termine\" target=\"_blank\" class=\"nav-link w-nav-link\">Lungo termine</a><a href=\"https://workbnb.io/host\" target=\"_blank\" class=\"nav-link w-nav-link\">Diventa un host</a>").insertAfter($('#topbar-container').find("[class*='Topbar__topbarMenuSpacer']"))

  $("#topbar-container").css("visibility", "visible");

}
