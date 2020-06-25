const dialogFilterHomePage =
  ({
     minimumPrice = 0,
     maximumPrice = 250,
     minimumDown = 10,
     maximumDown = 1000,
     minimumUp = 10,
     maximumUp = 1000,
   }) => (
    '<div class="overlay">\n' +
    '    <div class="dialog">\n' +
    '        <div id="closeDialog">\n' +
    '            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 630" width="730" height="630"\n' +
    '                 preserveAspectRatio="xMidYMid meet"\n' +
    '                 style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);">\n' +
    '                <defs>\n' +
    '                    <clipPath id="__lottie_element_2">\n' +
    '                        <rect width="730" height="630" x="0" y="0"></rect>\n' +
    '                    </clipPath>\n' +
    '                </defs>\n' +
    '                <g clip-path="url(#__lottie_element_2)">\n' +
    '                    <g transform="matrix(-0.7071067690849304,-0.7071067690849304,0.7071067690849304,-0.7071067690849304,489.8043518066406,189.69564819335938)"\n' +
    '                       opacity="1" style="display: none;">\n' +
    '                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">\n' +
    '                            <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(33,33,33)"\n' +
    '                                  stroke-opacity="1" stroke-width="55"\n' +
    '                                  d=" M-327,-176.5 C-327,-176.5 327,-176.5 327,-176.5"></path>\n' +
    '                        </g>\n' +
    '                    </g>\n' +
    '                    <g transform="matrix(-0.7071067690849304,0.7071067690849304,-0.7071067690849304,-0.7071067690849304,489.8043518066406,438.3043518066406)"\n' +
    '                       opacity="1" style="display: none;">\n' +
    '                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">\n' +
    '                            <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(33,33,33)"\n' +
    '                                  stroke-opacity="1" stroke-width="55"\n' +
    '                                  d=" M-327,176.5 C-327,176.5 327,176.5 327,176.5"></path>\n' +
    '                        </g>\n' +
    '                    </g>\n' +
    '                    <g transform="matrix(-0.7071067690849304,-0.7071067690849304,0.7071067690849304,-0.7071067690849304,489.8043518066406,189.69564819335938)"\n' +
    '                       opacity="1" style="display: block;">\n' +
    '                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">\n' +
    '                            <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(33,33,33)"\n' +
    '                                  stroke-opacity="1" stroke-width="55"\n' +
    '                                  d=" M-327,-176.5 C-327,-176.5 327,-176.5 327,-176.5"></path>\n' +
    '                        </g>\n' +
    '                    </g>\n' +
    '                    <g transform="matrix(-0.7071067690849304,0.7071067690849304,-0.7071067690849304,-0.7071067690849304,489.8043518066406,438.3043518066406)"\n' +
    '                       opacity="1" style="display: block;">\n' +
    '                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">\n' +
    '                            <path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(33,33,33)"\n' +
    '                                  stroke-opacity="1" stroke-width="55"\n' +
    '                                  d=" M-327,176.5 C-327,176.5 327,176.5 327,176.5"></path>\n' +
    '                        </g>\n' +
    '                    </g>\n' +
    '                </g>\n' +
    '            </svg>\n' +
    '        </div>\n' +
    '        <h3 class="headerDialog hiddenOnMobile">\n' +
    '            Più filtri\n' +
    '        </h3>\n' +
    '        <h3 class="headerDialog hiddenOverMobile">\n' +
    '            Filtra tra i risultati\n' +
    '        </h3>\n' +
    '        <div class="content">\n' +
    '            <div class="sectionDialog hiddenOverMobile" style="padding-bottom: 0">\n' +
    '                <div style="display: flex; align-items: center; justify-content: space-between">\n' +
    '                    <h4 style="margin-bottom: 2px; padding-right: 16px">Categoria</h4>\n' +
    '                    <h5 style="cursor: pointer" id="removeCategory">Rimuovi categoria</h5>\n' +
    '                </div>\n' +
    '                <ul>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="category-stanza-privata" id="category-stanza-privata"\n' +
    '                                   class="category-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Stanza Privata\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="category-tutta-la-casa" id="category-tutta-la-casa"\n' +
    '                                   class="category-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Tutta la casa\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="category-studio-condiviso" id="category-studio-condiviso"\n' +
    '                                   class="category-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Studio condiviso\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="category-ufficio" id="category-ufficio"\n' +
    '                                   class="category-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Ufficio\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="category-ufficio-condiviso" id="category-ufficio-condiviso"\n' +
    '                                   class="category-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Ufficio condiviso\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="category-sala-meeting" id="category-meetingRoom"\n' +
    '                                   class="category-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Sala Meeting\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog hiddenOverMobile" style="padding-bottom: 0">\n' +
    '                <div style="display: flex; align-items: center; justify-content: space-between">\n' +
    '                    <h4 style="margin-bottom: 2px; padding-right: 16px">Tipo di prenotazione</h4>\n' +
    '                </div>\n' +
    '                <ul>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="listing-type-disponibilita-per-giorno"\n' +
    '                                   id="listing-type-disponibilita-per-giorno"\n' +
    '                                   class="listing-type-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Per giorno\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="listing-type-disponibilita-per-notte"\n' +
    '                                   id="listing-type-disponibilita-per-notte"\n' +
    '                                   class="listing-type-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Per notte\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="listing-type-disponibilita-per-ora"\n' +
    '                                   id="listing-type-disponibilita-per-ora"\n' +
    '                                   class="listing-type-filter">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 32px">\n' +
    '                                Per ora\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '            </div>\n ' +
    '             <div class="sectionDialog">\n' +
    '                <div style="display: flex; align-items: center; justify-content: space-between">\n' +
    '                    <h4 style="margin-bottom: 2px; padding-right: 16px">Prezzo</h4>\n' +
    '                    <h5 style="cursor: pointer" id="removePrice">Reset</h5>\n' +
    '                </div>\n' +
    '                <div class="container-slider">\n' +
    '                    <div id="slider-price"></div>\n' +
    '                </div>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div class="containerMinimum">\n' +
    '                        <h5>Prezzo minimo: </h5><span id="minPrice">' + minimumPrice + '</span><span>€</span>\n' +
    '                    </div>\n' +
    '                    <div class="containerMaximum">\n' +
    '                        <h5>Prezzo massimo: </h5><span id="maxPrice">' + maximumPrice + '</span><span>€</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog">\n' +
    '                <div style="display: flex; align-items: center; justify-content: space-between">\n' +
    '                    <h4 style="margin-bottom: 2px; padding-right: 16px">Internet Download (Mbps)</h4>\n' +
    '                    <h5 style="cursor: pointer" id="removeDown">Reset</h5>\n' +
    '                </div>\n' +
    '                <div class="container-slider">\n' +
    '                    <div id="slider-down"></div>\n' +
    '                </div>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div class="containerMinimum">\n' +
    '                        <h5>Download minimo: </h5><span id="minDown">' + minimumDown + '</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                    <div class="containerMaximum">\n' +
    '                        <h5>Download massimo: </h5><span id="maxDown">' + maximumDown + '</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog">\n' +
    '                <div style="display: flex; align-items: center; justify-content: space-between">\n' +
    '                    <h4 style="margin-bottom: 2px; padding-right: 16px">Internet Upload (Mbps)</h4>\n' +
    '                    <h5 style="cursor: pointer" id="removeUp">Reset</h5>\n' +
    '                </div>\n' +
    '                <div class="container-slider">\n' +
    '                    <div id="slider-up"></div>\n' +
    '                </div>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div class="containerMinimum">\n' +
    '                        <h5>Upload minimo: </h5><span id="minUp">' + minimumUp + '</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                    <div class="containerMaximum">\n' +
    '                        <h5>Upload massimo: </h5><span id="maxUp">' + maximumUp + '</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>' +
    '<div class="sectionDialog" style="padding-bottom: 0">\n' +
    '                <div style="display: flex; align-items: center; justify-content: space-between">\n' +
    '                    <h4 style="margin-bottom: 2px; padding-right: 16px">Servizi</h4>\n' +
    '                    <h5 style="cursor: pointer" id="removeCategory">Rimuovi servizi</h5>\n' +
    '                </div>\n' +
    '                <ul>\n' +
    '<li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-cancelleria" id="filter-cancelleria"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03d368cf9c42ced82eb32_attach.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Cancelleria\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-pet-friendly" id="filter-pet-friendly"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb02672be784a15015410bd_dog.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Pet Friendly\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-parking" id="filter-parking"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb02811be784a5f39541fe5_car-parking.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Parcheggio\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-monitor" id="filter-monitor"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb0284190c3340d5d766889_pc-monitor.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Monitor\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-stampante" id="filter-stampante"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb0286dbe784a19755422d9_printer.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Stampante\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-self-check-in" id="filter-self-check-in"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb028916c4e21085c38eea0_lock-orientation.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Self Check-in\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-zona-relax" id="filter-zona-relax"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb028c03485d1184acb1d1b_armchair.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Zona Relax\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-sedia-ergonomica" id="filter-sedia-ergonomica"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb028f53d071410f534ea19_chair.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Sedia Ergonomica\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-igienizzazione" id="filter-igienizzazione"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb0291095c521e0c94e6741_spray-2.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Igienizzazione Professionale\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-bevande" id="filter-bevande"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb029c41030ea7701d72846_tea.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Bevande Calde\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-colazione" id="filter-colazione"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb029ec0a8b57fe90df8402_croissant.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Colazione\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-minibar" id="filter-minibar"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb02a5690c334389a7679a5_bottle.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Minibar\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-bici" id="filter-bici"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03df23485d193adcbcf17_bike.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Deposito Bici\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-spazio-esterno" id="filter-spazio-esterno"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03e4dbe784a9b0354ba5e_park.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Spazio Esterno\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-cucina" id="filter-cucina"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://uploads-ssl.webflow.com/5e9ac4e89ba5994a3ffa4d3e/5eb03ec690c33422d17753dc_pan.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Cucina\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-aria" id="filter-aria"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/aria_condizionata.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Aria Condizionata\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-riscaldamento" id="filter-riscaldamento"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/riscaldamento.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Riscaldamento\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-piscina" id="filter-piscina"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/piscina.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Piscina\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-bar" id="filter-bar"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/bar.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Bar\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-fitness" id="filter-fitness"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/centro_fitness.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Centro Fitness\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-honesty" id="filter-honesty"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/honesty_bar.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Honesty Bar\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="filter-elettrici" id="filter-elettrici"\n' +
    '                                   class="filter-general">\n' +
    '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    '                                 style="padding: 8px">\n' +
    '                                <img\n' +
    '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/ricarica_auto_elettriche.svg"\n' +
    '                                        style="margin-right: 8px"\n' +
    '                                />\n' +
    '                                Colonnine di Ricarica\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '<!--                    Da qui iniziano i filtri custom per categoria-->\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-docce" id="filter-docce"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/doccia.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Doccia\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-ristorazione" id="filter-ristorazione"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/sala_ristorazione.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Sala Ristorazione\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-deposito" id="filter-deposito"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/deposito.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Deposito\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-finestrata" id="filter-finestrata"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/Finestra.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Postazione Finestrata\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-audio" id="filter-audio"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/impianto_audio.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Impianto Audio\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-lavagna" id="filter-lavagna"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/lavagna.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Lavagna Interattiva\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-microfono" id="filter-microfono"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/microfono.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Microfono\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-proiettore" id="filter-proiettore"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/proiettore.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Proiettore\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>\n' +
    // '                    <li>\n' +
    // '                        <label>\n' +
    // '                            <input type="checkbox" name="filter-allattamento" id="filter-allattamento"\n' +
    // '                                   class="filter-general">\n' +
    // '                            <div class="button secondary_black small w-inline-block icon-box-text"\n' +
    // '                                 style="padding: 8px">\n' +
    // '                                <img\n' +
    // '                                        src="https://marcosansoni.github.io/workbnb-sharetribe-go/assets/sala_allattamento.svg"\n' +
    // '                                        style="margin-right: 8px"\n' +
    // '                                />\n' +
    // '                                Sala Allattamento\n' +
    // '                            </div>\n' +
    // '                        </label>\n' +
    // '                    </li>' +
    '                </ul>\n' +
    '                <span class="caption" style="padding-bottom: 16px">I servizi differiscono in base alla categoria selezionata</span>\n' +
    '            </div>' +
    '        </div>\n' +
    '        <div class="footerDialog">\n' +
    '            <div\n' +
    '                    class="button secondary_black small w-inline-block cancelButton"\n' +
    '\n' +
    '            >\n' +
    '                Reset\n' +
    '            </div>\n' +
    '            <div\n' +
    '                    class="button secondary_black small w-inline-block applyButton">\n' +
    '                Applica\n' +
    '            </div>\n' +
    '\n' +
    '            <!--            <div class="cancelButton">Cancella Filtri</div>-->\n' +
    '            <!--            <div class="applyButton">Conferma</div>-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'
  );
