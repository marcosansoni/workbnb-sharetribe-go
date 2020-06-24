const dialogFilterHomePage =
  ({
     minimumPrice = 0,
     maximumPrice = 250,
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
    '                            <input type="checkbox" name="category-tutta-la-casa" id="category-tutta-la-casa"\n' +
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
    '                            <input type="checkbox" name="category-studio-condiviso" id="category-studio-condiviso"\n' +
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
    '            <div class="sectionDialog">\n' +
    '                <div style="display: flex; align-items: center; justify-content: space-between">\n' +
    '                    <h4 style="margin-bottom: 2px; padding-right: 16px">Prezzo</h4>\n' +
    '                    <h5 style="cursor: pointer" id="removePrice">Reset</h5>\n' +
    '                </div>\n' +
    '                <div class="container-slider">\n' +
    '                    <div id="slider-price"></div>\n' +
    '                </div>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div style="display: flex">\n' +
    '                        <h4>Prezzo minimo: </h4><span id="minPrice">' + minimumPrice + '</span><span>€</span>\n' +
    '                    </div>\n' +
    '                    <div style="display: flex">\n' +
    '                        <h4>Prezzo massimo: </h4><span id="maxPrice">' + maximumPrice + '</span><span>€</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>' +
    '        <span>Altri filtri</span>\n' +
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
