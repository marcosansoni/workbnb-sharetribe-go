const createDialogWithMoreFilterIntoHomePage = () => {
  let minimumPrice = undefined;
  let maximumPrice = undefined;
  let minimumDownload = undefined;
  let maximumDownload = undefined;
  let minimumUpload = undefined;
  let maximumUpload = undefined;
  let currentSelectedFilter = [];


  //Append to body
  $("body").append('<div class="overlay">\n' +
    '    <div class="dialog">\n' +
    '        <div id="closeDialog">X</div>\n' +
    '        <div class="headerDialog">\n' +
    '            Più filtri\n' +
    '        </div>\n' +
    '        <div class="content">\n' +
    '            <div class="sectionDialog">\n' +
    '                <h4>Prezzo</h4>\n' +
    '                <input type="text" class="js-range-slider" id="priceSelector" name="my_range" value=""/>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Prezzo minimo: </p><span id="minPrice">0</span><span>€</span>\n' +
    '                    </div>\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Prezzo massimo: </p><span id="maxPrice">250</span><span>€</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog">\n' +
    '                <h4>Servizi</h4>\n' +
    '                <ul>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="house">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-home" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="phone">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-phone" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="plane">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-plane" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="snow">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-snowflake-o" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="battery">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-battery-full" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                    <li>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" name="code">\n' +
    '                            <div class="icon-box">\n' +
    '                                <i class="fa fa-code" aria-hidden="true"></i>\n' +
    '                            </div>\n' +
    '                        </label>\n' +
    '                    </li>\n' +
    '                </ul>\n' +
    '                <div>Servizi selezionati: <span id="selectedFilter"></span></div>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog">\n' +
    '                <h4>Velocità Internet Download</h4>\n' +
    '                <input type="text" class="js-range-slider" id="downloadInternet" name="my_range" value=""/>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Minimo Download: </p><span id="minDown">10</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Massimo Download: </p><span id="maxDown">1000</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div class="sectionDialog">\n' +
    '                <h4>Velocità Internet Upload</h4>\n' +
    '                <input type="text" class="js-range-slider" id="uploadInternet" name="my_range" value=""/>\n' +
    '                <div class="containerResultSection">\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Minimo Upload: </p><span id="minUp">10</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                    <div style="display: flex">\n' +
    '                        <p>Massimo Upload: </p><span id="maxUp">1000</span><span>Mbps</span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="footerDialog">\n' +
    '            <div class="cancelButton">Cancella Filtri</div>\n' +
    '            <div class="applyButton">Conferma</div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');

  $("#closeDialog").click(() => {
    removeVisibility('.overlay');
  });

  console.log($("#downloadInternet"))
  console.log(provaVar)
  // console.log(IonRangeSlider)

  $("#downloadInternet").ionRangeSlider({
    values: [10, 20, 30, 50, 100, 200, 300, 500, 1000],
    type: "range",
    from: 0,
    to: 2,
    grid: true,
    grid_snap: true,
    onChange: (data) => {
      // console.log(data)
      const fromDownload = data.from_value;
      const toDownload = data.to_value;
      $("#minDown").html(fromDownload);
      $("#maxDown").html(toDownload);
    },
    onFinish: (data) => {
      minimumDownload = Number(data.from_value) !== 10 ? data.from_value : undefined;
      maximumDownload = Number(data.to_value) !== 1000 ? data.to_value : undefined;
    }
  });
  //
  // $("#priceSelector").ionRangeSlider({
  //   min: 0,
  //   max: 250,
  //   type: "range",
  //   grid: true,
  //   onChange: (data) => {
  //     const fromPrice = data.from_pretty;
  //     const toPrice = data.to_pretty;
  //     $("#minPrice").html(fromPrice);
  //     $("#maxPrice").html(toPrice);
  //   },
  //   onFinish: (data) => {
  //     minimumPrice = Number(data.from_pretty) !== 0 ? data.from_pretty : undefined;
  //     maximumPrice = Number(data.to_pretty) !== 250 ? data.to_pretty : undefined;
  //   }
  // });
  //
  // $("#uploadInternet").ionRangeSlider({
  //   values: [10, 20, 30, 50, 100, 200, 300, 500, 1000],
  //   type: "range",
  //   grid: true,
  //   onChange: (data) => {
  //     // console.log(data)
  //     const fromPrice = data.from_value;
  //     const toPrice = data.to_value;
  //     $("#minPrice").html(fromPrice);
  //     $("#maxPrice").html(toPrice);
  //   },
  //   onFinish: (data) => {
  //     minimumUpload = Number(data.from_value) !== 10 ? data.from_value : undefined;
  //     maximumUpload = Number(data.to_value) !== 1000 ? data.to_value : undefined;
  //   }
  // });

  $("input").change((e) => {
    // console.log("changed");
    const name = e.target.name;
    const check = e.target.checked;
    // console.log(e.target.checked)
    // console.log(e.target.name);
    if (!check) {
      currentSelectedFilter = currentSelectedFilter.filter(i => i !== name);
    } else {
      currentSelectedFilter = [
        ...currentSelectedFilter,
        name,
      ]
    }
    // console.log(currentSelectedFilter);
    $("#selectedFilter").html(currentSelectedFilter.join(', '));
  });

  $(".applyButton").click(() => {
    console.log("minDownload", minimumDownload)
    console.log("maxDownload", maximumDownload)
    console.log("minUp", minimumUpload)
    console.log("maxUp", maximumUpload)
    console.log("minPrice", minimumPrice)
    console.log("maxPrice", maximumPrice)
  })
};



