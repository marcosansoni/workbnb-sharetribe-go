const parsePageListingDetails = (category, reser) => {

  console.log("dettaglio annuncio")

  // Click on the map
  $("#googlemap").click();

  let leftSideContent = "<div class=\"ad-content-wrapper\">\n" +
    "    <div data-animation=\"slide\" data-duration=\"500\" data-infinite=\"1\" class=\"adpage_slider w-slider\">\n" +
    "      <div class=\"w-slider-mask\">";


  const title = $(".listing-title");

  const description = $(".listing-description-content");
  const containerListings = $(".listing-details-container");

  //Dati host
  const linkProfile = $(".listing-author-avatar a").attr("href");
  const imageProfile = $(".listing-author-avatar img").attr("src");
  const nameHost = $(".listing-author-name-link").html();


  //Images
  const images = $("img.listing-image");

  //Set the title and the image of the host
  if(isLogged){
    $(".wrapper").prepend("<div class=\"titolo-annuncio-wrapper\" style='margin-bottom: 24px'>\n" +
      "        <h1 class=\"titolo-annuncio\">"+title[0].innerHTML+"</h1><a href='"+linkProfile+"' class=\"host-pic-wrapper w-inline-block\"><img src='"+imageProfile+"' alt=\"\" class=\"host-pic\"><div class=\"host-name\">"+nameHost+"</div></a></div>")

  }else{
    $(".wrapper").prepend("<div class=\"titolo-annuncio-wrapper\" style='margin-bottom: 24px; padding-top: 0px'>\n" +
      "        <h1 class=\"titolo-annuncio\">"+title[0].innerHTML+"</h1><a href='"+linkProfile+"' class=\"host-pic-wrapper w-inline-block\"><img src='"+imageProfile+"' alt=\"\" class=\"host-pic\"><div class=\"host-name\">"+nameHost+"</div></a></div>")

  }

  $.each(images,(index,value)=> {
    const linkImages = $(value).attr("src");
    if(index === 0){
      leftSideContent += "<div class=\"adpage_slide w-slide\"><img src='"+linkImages+"' alt=\"\" class=\"adpage_slide_image\">\n" +
        "          <div></div>\n" +
        "        </div>";
    }else{
      leftSideContent+="<div class=\"adpage_slide w-slide\"><img src='"+linkImages+"' alt=\"\" class=\"adpage_slide_image\"></div>"
    }
  });

  leftSideContent+="</div><div class=\"adpage_slider_arrow-wrapper w-slider-arrow-left\">\n" +
    "        <div class=\"adpage_slider_arrow\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5e9dc50f71c225594ae0902f_Arrow_Left.svg\" alt=\"\" class=\"arrow\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"adpage_slider_arrow-wrapper w-slider-arrow-right\">\n" +
    "        <div class=\"adpage_slider_arrow\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5e9dc50f71c225104ee0902e_Arrow_Right.svg\" alt=\"\" class=\"arrow\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"slide-nav w-slider-nav w-round\"></div>";

  leftSideContent+="</div>";


  //Add description text
  if(description[0] && description[0].innerHTML){

    let descriptionaa = "<div class=\"ad-descrizione\">";
    descriptionaa+=""+description[0].innerHTML+"</div>";

    leftSideContent += descriptionaa;
  }



  const currentRow = $(".row b");


  // Internet Downlaod Speed
  const internetDownloadElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Internet Download (Mbps):');
  let internetDownloadSpeed = null;
  if(internetDownloadElement && internetDownloadElement.length > 0){
    internetDownloadSpeed = internetDownloadElement[0].nextSibling.data.trim();
  }

  // Internet Upload Speed
  const internetUploadElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Internet Upload (Mbps):');
  let internetUploadSpeed = null;
  if(internetUploadElement && internetUploadElement.length > 0){
    internetUploadSpeed = internetUploadElement[0].nextSibling.data.trim();
  }

  //Add internet Section
  leftSideContent+="<div class=\"wifi-title-wrap\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb1302dbcf8442a98e97ee7_wifi.svg\" alt=\"\" class=\"servizio-icon right-margin\">\n" +
    "      <h4 class=\"h4-ad wifi\">Wi-fi</h4>\n" +
    "    </div>\n" +
    "    <div class=\"wifi-wrapper\">\n";

  if(internetDownloadSpeed){
    leftSideContent+="<div><span class=\"medium\">Download</span>  "+Number(internetDownloadSpeed).toFixed(0)+" Mbps</div>\n";
  }
  if(internetUploadSpeed){
    leftSideContent+="<div><span class=\"medium\">Upload</span>  "+Number(internetUploadSpeed).toFixed(0)+ " Mbps</div>\n";
  }
  leftSideContent+="</div>";


  // Check-in filter
  const checkInElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Orario check-in:');
  let checkInTime = null;
  if(checkInElement && checkInElement.length > 0){
    checkInTime = checkInElement[0].nextSibling.data.trim();
  }

  // check-out filter
  const checkOutElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Orario check-out:');
  let checkOutTime = null;
  if(checkOutElement && checkOutElement.length > 0){
    checkOutTime = checkOutElement[0].nextSibling.data.trim();
  }


  // Min Stay filter
  const minStayElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Soggiorno minimo:');
  let minStay = null;
  if(minStayElement && minStayElement.length > 0){
    minStay = minStayElement[0].nextSibling.data.trim();
  }



  //Prezzi extra
  //Pernottamento
  // const pernottamentoElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Pernottamento:');
  // console.log(pernottamentoElement)
  // let pernottamentoPrice = null;
  // if(pernottamentoElement && pernottamentoElement.length > 0){
  //   console.log(pernottamentoElement)
  //   if(pernottamentoElement[1] &&
  //     pernottamentoElement[1].nextSibling &&
  //     pernottamentoElement[1].nextSibling.data){
  //     pernottamentoPrice = pernottamentoElement[1].nextSibling.data.trim();
  //   }
  // }
  // console.log(pernottamentoPrice)

  //Cucina
  const cucinaElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Cucina:');
  let cucinaPrice = null;
  if(cucinaElement && cucinaElement.length > 0){
    cucinaPrice = cucinaElement[0].nextSibling.data.trim();
  }

  //Colazione
  const colazioneElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Colazione:');
  let colazionePrice = null;
  if(colazioneElement && colazioneElement.length > 0){
    colazionePrice = colazioneElement[0].nextSibling.data.trim();
  }

  //Parcheggio
  const parcheggioElement = currentRow.filter(i=>currentRow[i].innerHTML === 'Parcheggio:');
  let parcheggioPrice = null;
  if(parcheggioElement && parcheggioElement.length > 0){
    parcheggioPrice = parcheggioElement[0].nextSibling.data.trim();
  }


  console.log("Internet down",internetDownloadSpeed)
  console.log("Internet up",internetUploadSpeed)
  console.log("Min stay ",minStay)
  // console.log("Pernottamento ",pernottamentoPrice)
  console.log("Cucina ",cucinaPrice)
  console.log("Colazione ",colazionePrice)
  console.log("Parcheggio ",parcheggioPrice)




  //
  // console.log(imageProfile)
  // console.log(pathname+""+linkProfile)

  const checkBoxGroup = $(".checkbox-group");
  const checkbox = $(".checkbox-group .checkbox-option");

  const selected = [];
  const notSelected =[];

  $.each(checkbox, (index, value) => {
    const current = $(value).find("span")
    // const isAvailableFilter
    const classes = current && current.context && current.context.classList && current.context.classList.value;
    const classesArray = classes && classes.split(' ');
    const isSelected = classesArray && classesArray.length === 2 && classesArray[1] === 'selected';
    const filterName = current && current.length>=2 && current[1] && current[1].innerHTML;

    // Store filter into proper array
    if(isSelected && filterName){
      selected.push(filterName.trim());
    }else if(!isSelected && filterName){
      notSelected.push(filterName.trim())
    }
  })

  console.log(selected);
  console.log(notSelected);

  const CANCELLERIA = "Cancelleria";
  const PET_FRIENDLY = "Pet friendly";
  const PARCHEGGIO = "Parcheggio";
  const MONITOR = "Monitor e tastiera";
  const STAMPANTE = "Stampante";
  const SELF_CHECK = "Self check-in";
  const ZONA_RELAX = "Zona Relax";
  const SEDIA = "Sedia egonomica";
  const IGIENIZZAZIONE = "Igienizzazione professionale";
  const BEVANDE = "Set per bevande calde";
  const COLAZIONE = "Colazione";
  const MINIBAR = "Minibar";
  const DEPOSITO_BICI = "Deposito Bici";
  const SPAZIO_ESTERNO = "Spazio Esterno";
  const CUCINA = "Cucina";
  // const PERNOTTAMENTO = 'Incluso nel prezzo'; // se il pernottamento è disponibile nel prezzo ha settato incluso nel prezzo
  const DOCCE = "Docce";
  const ARIA_CONDIZIONATA = "Aria Condizionata";
  const RISCALDAMENTO = "Riscaldamento";
  const PISCINA = "Piscina";
  const IMPIANTO = "Impianto Audio";
  const LAVAGNA = "Lavagna interattiva";
  const MICROFONO = "Microfono";
  const PROIETTORE = "Proiettore";
  const SALA_ALLATTAMENTO = "Sala allattamento";
  const BAR = "Bar";
  const CENTRO_FITNESS = "Centro Fitness";
  const HONESTLY = "Honestly Bar";
  const SALA_RISTORAZIONE = "Sala Ristorazione";
  const RICARICA = "Colonnine di ricarica per veicoli elettrici";
  const DEPOSITO = "Deposito";
  const FINESTRATA = "Postazione Finestrata";

  //Add servizi inclusi
  leftSideContent+="<h4 class=\"h4-ad\">Servizi Inclusi</h4>\n" +
    "    <div class=\"w-layout-grid servizi-grid\">";

  // if(selected.includes(PERNOTTAMENTO)){
  //   leftSideContent+="<div class=\"servizio-wrapper\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb072a9a315e244c26ab845_bed-09.svg\" alt=\"\" class=\"servizio-icon\">\n" +
  //     "        <div class=\"servizio-text\">Pernottamento</div>\n" +
  //     "      </div>"
  // }


  const addIncludedAmenities = (text, urlImage) => {
    if(selected.includes(text)){
      return "<div class=\"servizio-wrapper\"><img src='"+urlImage+"' alt=\"\" class=\"servizio-icon\">\n" +
        "        <div class=\"servizio-text\">"+text+"</div>\n" +
        "      </div>"
    }
    return "";
  };

  if(selected.includes(PARCHEGGIO) && (parcheggioPrice === null || parcheggioPrice === undefined || Number(parcheggioPrice) === 0)){
    leftSideContent+="<div class=\"servizio-wrapper\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb02811be784a5f39541fe5_car-parking.svg\" alt=\"\" class=\"servizio-icon\">\n" +
      "        <div class=\"servizio-text\">Parcheggio</div>\n" +
      "      </div>";
  }
  if(selected.includes(COLAZIONE) && (colazionePrice === null || colazionePrice === undefined || Number(colazionePrice) === 0) ){
    leftSideContent+="<div class=\"servizio-wrapper\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb029ec0a8b57fe90df8402_croissant.svg\" alt=\"\" class=\"servizio-icon\">\n" +
      "        <div class=\"servizio-text\">Colazione</div>\n" +
      "      </div>";
  }
  if(selected.includes(CUCINA) && (cucinaPrice === null || cucinaPrice === undefined || Number(cucinaPrice) === 0) ){
    leftSideContent+="<div class=\"servizio-wrapper\"><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03ec690c33422d17753dc_pan.svg\" alt=\"\" class=\"servizio-icon\">\n" +
      "        <div class=\"servizio-text\">Cucina</div>\n" +
      "      </div>";
  }
  leftSideContent+= addIncludedAmenities(CANCELLERIA, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03d368cf9c42ced82eb32_attach.svg")
  leftSideContent+= addIncludedAmenities(PET_FRIENDLY, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb02672be784a15015410bd_dog.svg")
  leftSideContent+= addIncludedAmenities(MONITOR, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb0284190c3340d5d766889_pc-monitor.svg")
  leftSideContent+= addIncludedAmenities(STAMPANTE, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb0286dbe784a19755422d9_printer.svg")
  leftSideContent+= addIncludedAmenities(SELF_CHECK, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb028916c4e21085c38eea0_lock-orientation.svg")
  leftSideContent+= addIncludedAmenities(ZONA_RELAX, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb028c03485d1184acb1d1b_armchair.svg")
  leftSideContent+= addIncludedAmenities(SEDIA, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb028f53d071410f534ea19_chair.svg")
  leftSideContent+= addIncludedAmenities(IGIENIZZAZIONE, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb0291095c521e0c94e6741_spray-2.svg")
  leftSideContent+= addIncludedAmenities(BEVANDE, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb029c41030ea7701d72846_tea.svg")
  leftSideContent+= addIncludedAmenities(DEPOSITO_BICI, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03df23485d193adcbcf17_bike.svg")
  leftSideContent+= addIncludedAmenities(SPAZIO_ESTERNO, "https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03e4dbe784a9b0354ba5e_park.svg")
  leftSideContent+= addIncludedAmenities(DOCCE, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/doccia.svg")
  leftSideContent+= addIncludedAmenities(ARIA_CONDIZIONATA, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/aria_condizionata.svg")
  leftSideContent+= addIncludedAmenities(RISCALDAMENTO, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/riscaldamento.svg")
  leftSideContent+= addIncludedAmenities(PISCINA, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/piscina.svg")
  leftSideContent+= addIncludedAmenities(IMPIANTO, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/impianto_audio.svg")
  leftSideContent+= addIncludedAmenities(LAVAGNA, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/lavagna.svg")
  leftSideContent+= addIncludedAmenities(MICROFONO, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/microfono.svg")
  leftSideContent+= addIncludedAmenities(PROIETTORE, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/proiettore.svg")
  leftSideContent+= addIncludedAmenities(SALA_ALLATTAMENTO, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/sala_allattamento.svg")
  leftSideContent+= addIncludedAmenities(BAR, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/bar.svg")
  leftSideContent+= addIncludedAmenities(CENTRO_FITNESS, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/centro_fitness.svg")
  leftSideContent+= addIncludedAmenities(HONESTLY, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/honesty_bar.svg")
  leftSideContent+= addIncludedAmenities(SALA_RISTORAZIONE, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/sala_ristorazione.svg")
  leftSideContent+= addIncludedAmenities(RICARICA, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/ricarica_auto_elettriche.svg")
  leftSideContent+= addIncludedAmenities(DEPOSITO, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/deposito.svg")
  leftSideContent+= addIncludedAmenities(FINESTRATA, "https://marcosansoni.github.io/workbnb-sharetribe-go/assets/Finestra.svg")



  leftSideContent+="</div>";


  //Servizi extra
  // const pernottamentoExtra = selected.includes("Non incluso nel prezzo") && pernottamentoPrice && Number(pernottamentoPrice)!==0;
  const colazioneExtra = selected.includes(COLAZIONE) && colazionePrice && Number(colazionePrice)!==0;
  const parcheggioExtra = selected.includes(PARCHEGGIO) && parcheggioPrice && Number(parcheggioPrice)!==0;
  const cucinaExtra = selected.includes(CUCINA) && cucinaPrice && Number(cucinaPrice)!==0;
  const minibarExtra = selected.includes(MINIBAR);

  if(colazioneExtra || parcheggioExtra || cucinaExtra || minibarExtra){
    leftSideContent+="<h4>Servizi Extra</h4>\n" +
      "    <p class=\"caption\">Per questi servizi serve accordarsi direttamente con l&#x27;host. </p>\n" +
      "    <div class=\"w-layout-grid servizi-extra-grid\">";

    if(cucinaExtra){
      leftSideContent+="<div class=\"servizio-extra-wrapper\">\n" +
        "        <div><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03ec690c33422d17753dc_pan.svg\" alt=\"\" class=\"servizio-icon\">\n" +
        "          <div class=\"servizio-text\">Cucina</div>\n" +
        "        </div>\n" +
        "        <div class=\"servizio-price\">€"+Number(cucinaPrice)+"</div>\n" +
        "      </div>";
    }

    if(colazioneExtra){
      leftSideContent+="<div class=\"servizio-extra-wrapper\">\n" +
        "        <div><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb029ec0a8b57fe90df8402_croissant.svg\" alt=\"\" class=\"servizio-icon\">\n" +
        "          <div class=\"servizio-text\">Colazione</div>\n" +
        "        </div>\n" +
        "        <div class=\"servizio-price\">€"+Number(colazionePrice)+"</div>\n" +
        "      </div>";
    }

    if(parcheggioExtra){
      leftSideContent+="<div class=\"servizio-extra-wrapper\">\n" +
        "        <div><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb02811be784a5f39541fe5_car-parking.svg\" alt=\"\" class=\"servizio-icon\">\n" +
        "          <div class=\"servizio-text\">Parcheggio</div>\n" +
        "        </div>\n" +
        "        <div class=\"servizio-price\">€"+Number(parcheggioPrice)+"</div>\n" +
        "      </div>";
    }

    if(minibarExtra){
      leftSideContent+="<div class=\"servizio-extra-wrapper\">\n" +
        "        <div><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb02a5690c334389a7679a5_bottle.svg\" alt=\"\" class=\"servizio-icon\">\n" +
        "          <div class=\"servizio-text\">Minibar</div>\n" +
        "        </div>\n" +
        "        <div class=\"servizio-price\"></div>\n" +
        "      </div>";
    }
    leftSideContent+="</div>"

  }

  //Informazioni sulla struttura
  // if(checkInTime || checkOutTime){
  //   leftSideContent+="<h4 class=\"h4-ad\">Informazioni</h4><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb12fbbb4659e0af4f87c79_clock.svg\" alt=\"\" class=\"servizio-icon\">\n";
  //   if(checkInTime){
  //     leftSideContent+="<div><span class=\"medium\">Check–in</span> dalle "+checkInTime+"  </div>\n";
  //   }
  //
  //   if(checkInTime){
  //     leftSideContent+="<div><span class=\"medium\">Check–out</span> entro le "+checkOutTime+" </div>\n";
  //   }
  // }
  //
  //
  // if(minStay){
  //   leftSideContent+="    <div class=\"spacing_24\"></div><img src=\"https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb12fcec8c08ba1f23cc74e_calendar-date-2.svg\" alt=\"\" class=\"servizio-icon\">\n" +
  //     "    <div><span class=\"medium\">Soggiorno minimo</span> "+(Number(minStay)===1? "1 giorno":Number(minStay)+" giorni")+" </div>";
  // }


  //Add the map
  const map = $("#googlemap");

  leftSideContent+="<div style='margin-top: 64px'>";


  $(".listing-details-container").html("");
  $(".listing-details-container").append(leftSideContent);
  $(".listing-details-container").append(map);
  $(".listing-details-container").append("<div class=\"caption\" style='margin-top:16px'>I dati sulla posizione esatta sono forniti dopo la conferma della prenotazione.</div>")

  // Fix proper class name

  $(".wrapper .row").addClass("ad-page-wrapper")
  $(".col-8").addClass("ad-content-wrapper");
  $(".col-8").removeClass("col-8");

  $(".col-4").addClass("adpage_card-wrapper");
  $(".col-4").removeClass("col-4");
  //
  //Remove second divider
  const divider_price = $(".row-with-divider");
  if(divider_price && divider_price.length === 2){
    $(divider_price[1]).css("display","none")
  }
  //
  //Removed stripe payment card
  $("#listing-message-links .ad-page-wrapper").css("display","none")

  //clean unused div into price
  // const ad_page = $(".adpage_card-wrapper .ad-page-wrapper").css("display","none");
  //
  //
  // const priceAppartamento = $(".listing-price-amount") && $(".listing-price-amount").length > 0 && $(".listing-price-amount")[0].innerText && $(".listing-price-amount")[0].innerText.trim();
  //
  //Cambio lo stile dentro il button
  $("#booking-dates button").html("<a class=\"button-prenota w-button\" style='width: 100% !important;'>Prenota</a>")
  //
  //
  // //Text input style
  // $(".input-daterange").addClass("date-wrapper");
  // $("#booking-dates input").addClass("date-form-field-important");
  //
  // //Rimuovo il da e il per sopra il box delle date
  // $("#booking-dates label").css("display","none")
  //
  // let prependToTitle = "<span id='closeDialog' class='backToAnnuncioMobile'>Torna all'annuncio</span><h3 class=\"price\">"+priceAppartamento+" <span class=\"day-note\">per notte</span></h3>";
  //
  // if($(".input-daterange").length > 0){
  //   prependToTitle += "<div class=\"titleDate\">Date</div>";
  // }
  //
  //
  // // $(".adpage_card-wrapper").prepend("<span id='closeDialog' class='backToAnnuncioMobile'>Torna all'annuncio</span><h3 class=\"price\">"+priceAppartamento+" <span class=\"day-note\">per notte</span></h3>" +
  // //   "<div class=\"titleDate\">Date</div>")
  //
  // $(".adpage_card-wrapper").prepend(prependToTitle)
  //
  //
  //
  // //Wrappo il contenuto della card prezzo per essere mostrata solo da desktop
  // $('.adpage_card-wrapper').children().wrapAll("<div class='desktop_price'></div>");
  //
  // //Add text showed on mobile
  // $('.adpage_card-wrapper').append("<div class='mobile_footer_price'>" +
  //   "<h3 class=\"price\">"+priceAppartamento+" <span class=\"day-note\">per notte</span></h3>" +
  //   "<a id=\"prenotaButton\" class=\"button-prenota w-button\">Prenota</a>" +
  //   "</div>");
  //
  //
  // $("#prenotaButton").click(()=>{
  //   console.log("Prenota Button clicked");
  //   $(".desktop_price").css("display","block")
  //   $("body").css("overflow","hidden")
  //   $(".mobile_footer_price").css("display","none")
  //   $("#closeDialog").css("display","block");
  //   $(".ad-content-wrapper").addClass("removeOnMobile")
  // })
  //
  //
  // $("#closeDialog").click(()=>{
  //   console.log("Prenota Button clicked");
  //   $(".desktop_price").css("display","none")
  //   $("body").css("overflow","auto")
  //   $(".mobile_footer_price").css("display","flex")
  //   $("#closeDialog").css("display","none")
  //   $(".ad-content-wrapper").removeClass("removeOnMobile")
  // })

  $(".listing-details-container").css("visibility","visible");
  $("aside").css("visibility","visible");

};
