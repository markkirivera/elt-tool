<template>
  <div class="container-fluid pink-banner">
    <div class="container ms-3 me-3">
      <h5 class="mb-0 a-text-white fw-bold">Request Form</h5>
    </div>
  </div>

  <div class="container-fluid mt-4 mb-3 a-px-20">
    <div class="is-expanded row request-form">
      <div class="left">
        <div class="card quick-nav p-4">
          <p class="fw-bold a-text-grey small">QUICK NAVIGATION</p>
          <ul class="main-list">
            <li data-v-677b0dee="">
              <div class="a-accordion a-accordion-fun">
                <div
                  data-v-677b0dee=""
                  aria-expanded="false"
                  class="a-accordion-title a-bg-white p-0 fw-bold"
                  role="button"
                  tabindex="0"
                >
                  <span
                    data-v-677b0dee=""
                    class="appkiticon icon-partership-outline"
                  ></span>
                  Client details
                  <!-- expanded icon --><span
                    data-v-677b0dee=""
                    class="appkiticon expanded-icon icon-minus-outline"
                  ></span>
                </div>
                <div
                  data-v-677b0dee=""
                  class="a-accordion-content a-bg-white"
                  style="display: block"
                >
                  <div data-v-677b0dee="">
                    <ul class="sub-list">
                      <li data-v-677b0dee="">
                        <a class="a-link">Client/Account name</a>
                      </li>
                      <li data-v-677b0dee="">
                        <a class="a-link">Party Reference ID (PRID)</a>
                      </li>
                      <li data-v-677b0dee="">
                        <a class="a-link">Opportunity name</a>
                      </li>
                      <li data-v-677b0dee="">
                        <a class="a-link">Opportunity amount</a>
                      </li>
                      <li data-v-677b0dee="">
                        <a class="a-link">Engagement team</a>
                      </li>
                      <li data-v-677b0dee="">
                        <a class="a-link">Target date of proposal</a>
                      </li>
                      <li data-v-677b0dee="">
                        <a class="a-link">Expected engagement period</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-677b0dee="">
              <span
                data-v-677b0dee=""
                class="appkiticon icon-survey-outline"
              ></span
              ><a class="small fw-bold a-link">Circumstances</a>
            </li>
            <li data-v-677b0dee="">
              <span
                data-v-677b0dee=""
                class="appkiticon icon-edit-outline"
              ></span
              ><a class="small fw-bold a-link">Scope of service</a>
            </li>
            <li data-v-677b0dee="">
              <span
                data-v-677b0dee=""
                class="appkiticon icon-edit-outline"
              ></span
              ><a class="small fw-bold a-link"
                >Brief description of the change/s</a
              >
            </li>
            <li data-v-677b0dee="">
              <span
                data-v-677b0dee=""
                class="appkiticon icon-edit-outline"
              ></span
              ><a class="small fw-bold a-link">Risks involved</a>
            </li>
            <li data-v-677b0dee="">
              <span
                data-v-677b0dee=""
                class="appkiticon icon-edit-outline"
              ></span
              ><a class="small fw-bold a-link"
                >Steps/safeguards to be put in place</a
              >
            </li>
            <li data-v-677b0dee="">
              <span
                data-v-677b0dee=""
                class="appkiticon icon-folder-opened-outline"
              ></span
              ><a class="small fw-bold a-link">Attachment/s</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="card main-card p-5">
          <div class="input-group mt-3" id="client">
            <p class="a-text-green hidden">Editing: false</p>
            <div class="d-flex justify-content-evenly w-100">
              <!-- Client/Account name -->
              <div class="left">
                <p class="small fw-bold mb-2">
                  Client/Account name
                  <span class="required">*</span>
                </p>
                <div
                  data-v-677b0dee=""
                  class="a-input-with-icon a-input-md search-client w-95"
                >
                  <input
                    data-v-677b0dee=""
                    aria-label="Search"
                    class="a-text-input a-input-secondary"
                    placeholder="Client/Account name"
                  /><span
                    data-v-677b0dee=""
                    class="a-icon appkiticon icon-search-outline"
                  ></span
                  ><!-- clear text --><!--v-if--><!-- client results --><!--v-if-->
                </div>
                <!--v-if-->
              </div>
              <!-- PRID -->
              <div class="right">
                <p class="small fw-bold mb-2">
                  Party Reference ID (PRID)
                  <span class="required">*</span>
                </p>
                <div
                  data-v-677b0dee=""
                  class="a-input-with-icon a-input-md search-client w-100"
                >
                  <input
                    data-v-677b0dee=""
                    aria-label="Search"
                    type="number"
                    min="0"
                    step="1"
                    class="a-text-input a-input-secondary"
                    placeholder="Party Reference ID (PRID)"
                  /><span
                    data-v-677b0dee=""
                    class="a-icon appkiticon icon-search-outline"
                  ></span
                  ><!-- clear PRID --><!--v-if--><!-- prid results --><!--v-if-->
                </div>
                <!--v-if-->
              </div>
            </div>
          </div>
          <!-- Opportunity details -->
          <div class="input-group mt-3" id="opportunity">
            <div class="d-flex justify-content-evenly w-100">
              <div class="left">
                <p class="small fw-bold mb-2">
                  Opportunity name<span class="required">*</span>
                </p>
                <input
                  data-v-677b0dee=""
                  class="a-text-input w-95"
                  placeholder="Opportunity name as recorded in Salesforce"
                />
              </div>
              <div class="right">
                <p class="small fw-bold mb-2">
                  Opportunity amount<span class="required">*</span>
                </p>
                <div class="d-flex">
                  <div class="a-dropdown">
                    <button
                      data-v-677b0dee=""
                      aria-expanded="false"
                      class="a-dropdown-toggle"
                      role="button"
                      tabindex="0"
                    >
                      <div class="a-choosen-text">PHP</div>
                      <span
                        data-v-677b0dee=""
                        class="a-icon appkiticon icon-down-chevron-fill"
                      ></span>
                    </button>
                    <div
                      data-v-677b0dee=""
                      class="a-dropdown-menu currency-dropdown"
                      style="left: 0px"
                    >
                      <div class="a-dropdown-item">AED</div>
                      <div class="a-dropdown-item">AFN</div>
                      <div class="a-dropdown-item">ALL</div>
                      <div class="a-dropdown-item">AMD</div>
                      <div class="a-dropdown-item">ANG</div>
                      <div class="a-dropdown-item">AOA</div>
                      <div class="a-dropdown-item">ARS</div>
                      <div class="a-dropdown-item">AUD</div>
                      <div class="a-dropdown-item">AWG</div>
                      <div class="a-dropdown-item">AZN</div>
                      <div class="a-dropdown-item">BAM</div>
                      <div class="a-dropdown-item">BBD</div>
                      <div class="a-dropdown-item">BDT</div>
                      <div class="a-dropdown-item">BGN</div>
                      <div class="a-dropdown-item">BHD</div>
                      <div class="a-dropdown-item">BIF</div>
                      <div class="a-dropdown-item">BMD</div>
                      <div class="a-dropdown-item">BND</div>
                      <div class="a-dropdown-item">BOB</div>
                      <div class="a-dropdown-item">BOV</div>
                      <div class="a-dropdown-item">BRL</div>
                      <div class="a-dropdown-item">BSD</div>
                      <div class="a-dropdown-item">BTN</div>
                      <div class="a-dropdown-item">BWP</div>
                      <div class="a-dropdown-item">BYN</div>
                      <div class="a-dropdown-item">BZD</div>
                      <div class="a-dropdown-item">CAD</div>
                      <div class="a-dropdown-item">CDF</div>
                      <div class="a-dropdown-item">CHE</div>
                      <div class="a-dropdown-item">CHF</div>
                      <div class="a-dropdown-item">CHW</div>
                      <div class="a-dropdown-item">CLF</div>
                      <div class="a-dropdown-item">CLP</div>
                      <div class="a-dropdown-item">CNY</div>
                      <div class="a-dropdown-item">COP</div>
                      <div class="a-dropdown-item">COU</div>
                      <div class="a-dropdown-item">CRC</div>
                      <div class="a-dropdown-item">CUC</div>
                      <div class="a-dropdown-item">CUP</div>
                      <div class="a-dropdown-item">CVE</div>
                      <div class="a-dropdown-item">CZK</div>
                      <div class="a-dropdown-item">DJF</div>
                      <div class="a-dropdown-item">DKK</div>
                      <div class="a-dropdown-item">DOP</div>
                      <div class="a-dropdown-item">DZD</div>
                      <div class="a-dropdown-item">EGP</div>
                      <div class="a-dropdown-item">ERN</div>
                      <div class="a-dropdown-item">ETB</div>
                      <div class="a-dropdown-item">EUR</div>
                      <div class="a-dropdown-item">FJD</div>
                      <div class="a-dropdown-item">FKP</div>
                      <div class="a-dropdown-item">GBP</div>
                      <div class="a-dropdown-item">GEL</div>
                      <div class="a-dropdown-item">GHS</div>
                      <div class="a-dropdown-item">GIP</div>
                      <div class="a-dropdown-item">GMD</div>
                      <div class="a-dropdown-item">GNF</div>
                      <div class="a-dropdown-item">GTQ</div>
                      <div class="a-dropdown-item">GYD</div>
                      <div class="a-dropdown-item">HKD</div>
                      <div class="a-dropdown-item">HNL</div>
                      <div class="a-dropdown-item">HTG</div>
                      <div class="a-dropdown-item">HUF</div>
                      <div class="a-dropdown-item">IDR</div>
                      <div class="a-dropdown-item">ILS</div>
                      <div class="a-dropdown-item">INR</div>
                      <div class="a-dropdown-item">IQD</div>
                      <div class="a-dropdown-item">IRR</div>
                      <div class="a-dropdown-item">ISK</div>
                      <div class="a-dropdown-item">JMD</div>
                      <div class="a-dropdown-item">JOD</div>
                      <div class="a-dropdown-item">JPY</div>
                      <div class="a-dropdown-item">KES</div>
                      <div class="a-dropdown-item">KGS</div>
                      <div class="a-dropdown-item">KHR</div>
                      <div class="a-dropdown-item">KMF</div>
                      <div class="a-dropdown-item">KPW</div>
                      <div class="a-dropdown-item">KRW</div>
                      <div class="a-dropdown-item">KWD</div>
                      <div class="a-dropdown-item">KYD</div>
                      <div class="a-dropdown-item">KZT</div>
                      <div class="a-dropdown-item">LAK</div>
                      <div class="a-dropdown-item">LBP</div>
                      <div class="a-dropdown-item">LKR</div>
                      <div class="a-dropdown-item">LRD</div>
                      <div class="a-dropdown-item">LSL</div>
                      <div class="a-dropdown-item">LYD</div>
                      <div class="a-dropdown-item">MAD</div>
                      <div class="a-dropdown-item">MDL</div>
                      <div class="a-dropdown-item">MGA</div>
                      <div class="a-dropdown-item">MKD</div>
                      <div class="a-dropdown-item">MMK</div>
                      <div class="a-dropdown-item">MNT</div>
                      <div class="a-dropdown-item">MOP</div>
                      <div class="a-dropdown-item">MRU</div>
                      <div class="a-dropdown-item">MUR</div>
                      <div class="a-dropdown-item">MVR</div>
                      <div class="a-dropdown-item">MWK</div>
                      <div class="a-dropdown-item">MXN</div>
                      <div class="a-dropdown-item">MXV</div>
                      <div class="a-dropdown-item">MYR</div>
                      <div class="a-dropdown-item">MZN</div>
                      <div class="a-dropdown-item">NAD</div>
                      <div class="a-dropdown-item">NGN</div>
                      <div class="a-dropdown-item">NIO</div>
                      <div class="a-dropdown-item">NOK</div>
                      <div class="a-dropdown-item">NPR</div>
                      <div class="a-dropdown-item">NZD</div>
                      <div class="a-dropdown-item">OMR</div>
                      <div class="a-dropdown-item">PAB</div>
                      <div class="a-dropdown-item">PEN</div>
                      <div class="a-dropdown-item">PGK</div>
                      <div class="a-dropdown-item">PHP</div>
                      <div class="a-dropdown-item">PKR</div>
                      <div class="a-dropdown-item">PLN</div>
                      <div class="a-dropdown-item">PYG</div>
                      <div class="a-dropdown-item">QAR</div>
                      <div class="a-dropdown-item">RON</div>
                      <div class="a-dropdown-item">RSD</div>
                      <div class="a-dropdown-item">RUB</div>
                      <div class="a-dropdown-item">RWF</div>
                      <div class="a-dropdown-item">SAR</div>
                      <div class="a-dropdown-item">SBD</div>
                      <div class="a-dropdown-item">SCR</div>
                      <div class="a-dropdown-item">SDG</div>
                      <div class="a-dropdown-item">SEK</div>
                      <div class="a-dropdown-item">SGD</div>
                      <div class="a-dropdown-item">SHP</div>
                      <div class="a-dropdown-item">SLE</div>
                      <div class="a-dropdown-item">SLL</div>
                      <div class="a-dropdown-item">SOS</div>
                      <div class="a-dropdown-item">SRD</div>
                      <div class="a-dropdown-item">SSP</div>
                      <div class="a-dropdown-item">STN</div>
                      <div class="a-dropdown-item">SVC</div>
                      <div class="a-dropdown-item">SYP</div>
                      <div class="a-dropdown-item">SZL</div>
                      <div class="a-dropdown-item">THB</div>
                      <div class="a-dropdown-item">TJS</div>
                      <div class="a-dropdown-item">TMT</div>
                      <div class="a-dropdown-item">TND</div>
                      <div class="a-dropdown-item">TOP</div>
                      <div class="a-dropdown-item">TRY</div>
                      <div class="a-dropdown-item">TTD</div>
                      <div class="a-dropdown-item">TWD</div>
                      <div class="a-dropdown-item">TZS</div>
                      <div class="a-dropdown-item">UAH</div>
                      <div class="a-dropdown-item">UGX</div>
                      <div class="a-dropdown-item">USD</div>
                      <div class="a-dropdown-item">USN</div>
                      <div class="a-dropdown-item">UYI</div>
                      <div class="a-dropdown-item">UYU</div>
                      <div class="a-dropdown-item">UYW</div>
                      <div class="a-dropdown-item">UZS</div>
                      <div class="a-dropdown-item">VED</div>
                      <div class="a-dropdown-item">VES</div>
                      <div class="a-dropdown-item">VND</div>
                      <div class="a-dropdown-item">VUV</div>
                      <div class="a-dropdown-item">WST</div>
                      <div class="a-dropdown-item">XAF</div>
                      <div class="a-dropdown-item">XCD</div>
                      <div class="a-dropdown-item">XDR</div>
                      <div class="a-dropdown-item">XOF</div>
                      <div class="a-dropdown-item">XPF</div>
                      <div class="a-dropdown-item">XSU</div>
                      <div class="a-dropdown-item">XUA</div>
                      <div class="a-dropdown-item">YER</div>
                      <div class="a-dropdown-item">ZAR</div>
                      <div class="a-dropdown-item">ZMW</div>
                      <div class="a-dropdown-item">ZWL</div>
                    </div>
                  </div>
                  <input
                    data-v-677b0dee=""
                    class="a-text-input"
                    onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 &amp;&amp; event.charCode <= 57"
                    placeholder="Opportunity amount"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Engagement details -->
          <div class="input-group mt-3" id="engagement">
            <div class="d-flex justify-content-evenly w-100">
              <div class="left">
                <p class="small fw-bold mb-2">
                  Engagement partner<span class="required">*</span>
                </p>
                <div
                  data-v-677b0dee=""
                  class="a-input-with-icon a-input-md partner-client w-95"
                >
                  <input
                    data-v-677b0dee=""
                    class="a-text-input"
                    type="text"
                    placeholder="Engagement partner"
                  /><span
                    data-v-677b0dee=""
                    class="a-icon appkiticon icon-search-outline"
                  ></span
                  ><!-- clear partner --><!--v-if--><!-- partners results --><!--v-if-->
                </div>
                <!--v-if-->
              </div>
              <div class="right">
                <p class="small fw-bold mb-2">
                  Engagement manager<span class="required">*</span>
                </p>
                <input
                  data-v-677b0dee=""
                  class="a-text-input is-disabled eng-manager"
                  disabled=""
                  value="John Doe"
                />
              </div>
            </div>
          </div>
          <div class="input-group mt-3">
            <p class="small fw-bold mb-2">
              Line of service risk management<span
                data-v-677b0dee=""
                class="required"
                >*</span
              >
            </p>
            <p class="smaller mb-2">
              The line of service risk management selected will determine where
              the request will undergo review and approval in the LoS risk
              management stage.
            </p>
            <div class="d-flex justify-content-evenly w-100">
              <div class="left">
                <div class="a-dropdown w-95 los">
                  <button
                    data-v-677b0dee=""
                    aria-expanded="true"
                    class="a-dropdown-toggle"
                    role="button"
                    tabindex="0"
                  >
                    <!--v-if-->
                    <div class="a-choosen-text">LoS One</div>
                    <span
                      data-v-677b0dee=""
                      class="a-icon appkiticon icon-down-chevron-fill"
                    ></span>
                  </button>
                  <div
                    data-v-677b0dee=""
                    class="a-dropdown-menu los-dropdown"
                    style="left: 0px"
                  >
                    <div class="a-dropdown-item">LoS Two</div>
                    <div class="a-dropdown-item">LoS Three</div>
                    <div class="a-dropdown-item active">LoS Four</div>
                    <div class="a-dropdown-item">LoS Five</div>
                    <div class="a-dropdown-item">LoS Six</div>
                  </div>
                </div>
              </div>
              <div class="right"></div>
            </div>
          </div>
          <!-- Dates -->
          <div class="input-group mt-3 mb-3" id="dates">
            <div class="d-flex justify-content-evenly w-100">
              <div class="left">
                <p class="small fw-bold mb-2">
                  Target date of proposal<span
                    data-v-677b0dee=""
                    class="required"
                    >*</span
                  >
                </p>
                <div class="date-wrapper">
                  <div class="v3dp__datepicker">
                    <div class="v3dp__input_wrapper">
                      <input
                        type="text"
                        readonly=""
                        class="a-datepicker-input a-text-input w-95 target-date"
                        placeholder="DD/MM/YYYY"
                        tabindex="0"
                      />
                      <div class="v3dp__clearable" style="display: none">
                        <i>x</i>
                      </div>
                    </div>
                    <div
                      data-v-2e128338=""
                      class="v3dp__popout"
                      style="
                        --popout-column-definition: repeat(3, 1fr);
                        display: none;
                      "
                    >
                      <div data-v-2e128338="" class="v3dp__heading">
                        <button
                          data-v-2e128338=""
                          class="v3dp__heading__button"
                          disabled=""
                        >
                          <svg
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class="v3dp__heading__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 8"
                          >
                            <g
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke="none"
                                d="M-9 16V-8h24v24z"
                              ></path>
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 0L1 4l4 4"
                              ></path>
                            </g>
                          </svg></button
                        ><span data-v-2e128338="" class="v3dp__heading__center"
                          >2020 - 2029</span
                        ><button
                          data-v-2e128338=""
                          class="v3dp__heading__button"
                        >
                          <svg
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class="v3dp__heading__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 8"
                          >
                            <g
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke="none"
                                d="M15-8v24H-9V-8z"
                              ></path>
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M1 8l4-4-4-4"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div data-v-2e128338="" class="v3dp__body">
                        <!--v-if-->
                        <div data-v-2e128338="" class="v3dp__elements">
                          <button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2020</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2021</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2022</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2023</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2024</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2025</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2026</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2027</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2028</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >2029</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-2e128338=""
                      class="v3dp__popout"
                      headingformat="LLLL yyyy"
                      style="
                        --popout-column-definition: repeat(3, 1fr);
                        display: none;
                      "
                    >
                      <div data-v-2e128338="" class="v3dp__heading">
                        <button
                          data-v-2e128338=""
                          class="v3dp__heading__button"
                          disabled=""
                        >
                          <svg
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class="v3dp__heading__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 8"
                          >
                            <g
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke="none"
                                d="M-9 16V-8h24v24z"
                              ></path>
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 0L1 4l4 4"
                              ></path>
                            </g>
                          </svg></button
                        ><button
                          data-v-2e128338=""
                          class="v3dp__heading__center"
                        >
                          2023</button
                        ><button
                          data-v-2e128338=""
                          class="v3dp__heading__button"
                        >
                          <svg
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class="v3dp__heading__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 8"
                          >
                            <g
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke="none"
                                d="M15-8v24H-9V-8z"
                              ></path>
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M1 8l4-4-4-4"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div data-v-2e128338="" class="v3dp__body">
                        <!--v-if-->
                        <div data-v-2e128338="" class="v3dp__elements">
                          <button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Jan</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Feb</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Mar</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Apr</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >May</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Jun</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Jul</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Aug</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Sep</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Oct</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Nov</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >Dec</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-2e128338=""
                      class="v3dp__popout"
                      style="
                        --popout-column-definition: repeat(7, 1fr);
                        display: none;
                      "
                    >
                      <div data-v-2e128338="" class="v3dp__heading">
                        <button
                          data-v-2e128338=""
                          class="v3dp__heading__button"
                          disabled=""
                        >
                          <svg
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class="v3dp__heading__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 8"
                          >
                            <g
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke="none"
                                d="M-9 16V-8h24v24z"
                              ></path>
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 0L1 4l4 4"
                              ></path>
                            </g>
                          </svg></button
                        ><button
                          data-v-2e128338=""
                          class="v3dp__heading__center"
                        >
                          September 2023</button
                        ><button
                          data-v-2e128338=""
                          class="v3dp__heading__button"
                        >
                          <svg
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class="v3dp__heading__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 8"
                          >
                            <g
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke="none"
                                d="M15-8v24H-9V-8z"
                              ></path>
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M1 8l4-4-4-4"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div data-v-2e128338="" class="v3dp__body">
                        <div data-v-2e128338="" class="v3dp__subheading">
                          <span data-v-2e128338-s="">Mon</span
                          ><span data-v-2e128338-s="">Tue</span
                          ><span data-v-2e128338-s="">Wed</span
                          ><span data-v-2e128338-s="">Thu</span
                          ><span data-v-2e128338-s="">Fri</span
                          ><span data-v-2e128338-s="">Sat</span
                          ><span data-v-2e128338-s="">Sun</span>
                        </div>
                        <hr data-v-2e128338="" class="v3dp__divider" />
                        <div data-v-2e128338="" class="v3dp__elements">
                          <button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >28</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >29</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >30</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >31</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >01</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >02</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >03</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >04</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >05</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >06</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >07</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >08</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >09</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >10</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >11</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >12</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >13</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >14</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >15</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >16</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >17</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >18</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >19</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >20</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >21</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >22</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >23</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >24</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >25</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >26</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >27</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >28</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >29</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >30</span
                            ></button
                          ><button
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            disabled=""
                            class=""
                          >
                            <span data-v-2e128338="" data-v-2e128338-s=""
                              >01</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-2e128338=""
                      data-v-e1b37236=""
                      class="v3dp__popout"
                      style="
                        --popout-column-definition: repeat(2, 1fr);
                        display: none;
                      "
                    >
                      <div data-v-2e128338="" class="v3dp__heading">
                        <button
                          data-v-2e128338=""
                          class="v3dp__heading__button"
                          disabled=""
                        >
                          <svg
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class="v3dp__heading__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 8"
                          >
                            <g
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke="none"
                                d="M-9 16V-8h24v24z"
                              ></path>
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 0L1 4l4 4"
                              ></path>
                            </g>
                          </svg></button
                        ><button
                          data-v-2e128338=""
                          class="v3dp__heading__center"
                        >
                          16:51</button
                        ><button
                          data-v-2e128338=""
                          class="v3dp__heading__button"
                          disabled=""
                        >
                          <svg
                            data-v-2e128338=""
                            data-v-2e128338-s=""
                            class="v3dp__heading__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 6 8"
                          >
                            <g
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke="none"
                                d="M15-8v24H-9V-8z"
                              ></path>
                              <path
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M1 8l4-4-4-4"
                              ></path>
                            </g>
                          </svg>
                        </button>
                      </div>
                      <div data-v-2e128338="" class="v3dp__body">
                        <!--v-if-->
                        <div data-v-2e128338="" class="v3dp__elements">
                          <div
                            data-v-e1b37236=""
                            data-v-2e128338-s=""
                            class="v3dp__column"
                          >
                            <button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >00</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >01</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >02</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >03</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >04</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >05</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >06</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >07</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >08</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >09</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >10</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >11</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >12</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >13</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >14</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >15</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class="selected"
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >16</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >17</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >18</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >19</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >20</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >21</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >22</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >23</span
                              >
                            </button>
                          </div>
                          <div
                            data-v-e1b37236=""
                            data-v-2e128338-s=""
                            class="v3dp__column"
                          >
                            <button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >00</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >01</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >02</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >03</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >04</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >05</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >06</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >07</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >08</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >09</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >10</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >11</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >12</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >13</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >14</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >15</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >16</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >17</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >18</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >19</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >20</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >21</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >22</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >23</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >24</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >25</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >26</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >27</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >28</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >29</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >30</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >31</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >32</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >33</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >34</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >35</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >36</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >37</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >38</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >39</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >40</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >41</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >42</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >43</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >44</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >45</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >46</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >47</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >48</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >49</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >50</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class="selected"
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >51</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >52</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >53</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >54</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >55</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >56</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >57</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >58</span
                              ></button
                            ><button
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-e1b37236="" data-v-2e128338-s=""
                                >59</span
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    data-v-677b0dee=""
                    class="appkiticon icon-calendar-fill a-text-pink"
                  ></span>
                </div>
              </div>
              <div class="right">
                <p class="small fw-bold mb-2">
                  Expected engagement period<span
                    data-v-677b0dee=""
                    class="required"
                    >*</span
                  >
                </p>
                <div class="d-flex expected-dates">
                  <div class="date-wrapper">
                    <div class="v3dp__datepicker">
                      <div class="v3dp__input_wrapper">
                        <input
                          type="text"
                          readonly=""
                          class="is-disabled a-datepicker-input a-text-input start-date"
                          placeholder="DD/MM/YYYY"
                          tabindex="0"
                        />
                        <div class="v3dp__clearable" style="display: none">
                          <i>x</i>
                        </div>
                      </div>
                      <div
                        data-v-2e128338=""
                        class="v3dp__popout"
                        style="
                          --popout-column-definition: repeat(3, 1fr);
                          display: none;
                        "
                      >
                        <div data-v-2e128338="" class="v3dp__heading">
                          <button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M-9 16V-8h24v24z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 0L1 4l4 4"
                                ></path>
                              </g>
                            </svg></button
                          ><span
                            data-v-2e128338=""
                            class="v3dp__heading__center"
                            >2020 - 2029</span
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M15-8v24H-9V-8z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M1 8l4-4-4-4"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div data-v-2e128338="" class="v3dp__body">
                          <!--v-if-->
                          <div data-v-2e128338="" class="v3dp__elements">
                            <button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2020</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2021</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2022</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2023</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2024</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2025</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2026</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2027</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2028</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2029</span
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-2e128338=""
                        class="v3dp__popout"
                        headingformat="LLLL yyyy"
                        style="
                          --popout-column-definition: repeat(3, 1fr);
                          display: none;
                        "
                      >
                        <div data-v-2e128338="" class="v3dp__heading">
                          <button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M-9 16V-8h24v24z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 0L1 4l4 4"
                                ></path>
                              </g>
                            </svg></button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__center"
                          >
                            2023</button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M15-8v24H-9V-8z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M1 8l4-4-4-4"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div data-v-2e128338="" class="v3dp__body">
                          <!--v-if-->
                          <div data-v-2e128338="" class="v3dp__elements">
                            <button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Jan</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Feb</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Mar</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Apr</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >May</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Jun</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Jul</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Aug</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Sep</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Oct</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Nov</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Dec</span
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-2e128338=""
                        class="v3dp__popout"
                        style="
                          --popout-column-definition: repeat(7, 1fr);
                          display: none;
                        "
                      >
                        <div data-v-2e128338="" class="v3dp__heading">
                          <button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M-9 16V-8h24v24z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 0L1 4l4 4"
                                ></path>
                              </g>
                            </svg></button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__center"
                          >
                            September 2023</button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M15-8v24H-9V-8z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M1 8l4-4-4-4"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div data-v-2e128338="" class="v3dp__body">
                          <div data-v-2e128338="" class="v3dp__subheading">
                            <span data-v-2e128338-s="">Mon</span
                            ><span data-v-2e128338-s="">Tue</span
                            ><span data-v-2e128338-s="">Wed</span
                            ><span data-v-2e128338-s="">Thu</span
                            ><span data-v-2e128338-s="">Fri</span
                            ><span data-v-2e128338-s="">Sat</span
                            ><span data-v-2e128338-s="">Sun</span>
                          </div>
                          <hr data-v-2e128338="" class="v3dp__divider" />
                          <div data-v-2e128338="" class="v3dp__elements">
                            <button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >28</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >29</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >30</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >31</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >01</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >02</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >03</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >04</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >05</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >06</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >07</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >08</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >09</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >10</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >11</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >12</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >13</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >14</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >15</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >16</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >17</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >18</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >19</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >20</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >21</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >22</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >23</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >24</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >25</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >26</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >27</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >28</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >29</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >30</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >01</span
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-2e128338=""
                        data-v-e1b37236=""
                        class="v3dp__popout"
                        style="
                          --popout-column-definition: repeat(2, 1fr);
                          display: none;
                        "
                      >
                        <div data-v-2e128338="" class="v3dp__heading">
                          <button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                            disabled=""
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M-9 16V-8h24v24z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 0L1 4l4 4"
                                ></path>
                              </g>
                            </svg></button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__center"
                          >
                            16:51</button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                            disabled=""
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M15-8v24H-9V-8z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M1 8l4-4-4-4"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div data-v-2e128338="" class="v3dp__body">
                          <!--v-if-->
                          <div data-v-2e128338="" class="v3dp__elements">
                            <div
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class="v3dp__column"
                            >
                              <button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >00</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >01</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >02</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >03</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >04</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >05</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >06</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >07</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >08</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >09</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >10</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >11</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >12</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >13</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >14</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >15</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class="selected"
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >16</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >17</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >18</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >19</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >20</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >21</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >22</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >23</span
                                >
                              </button>
                            </div>
                            <div
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class="v3dp__column"
                            >
                              <button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >00</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >01</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >02</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >03</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >04</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >05</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >06</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >07</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >08</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >09</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >10</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >11</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >12</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >13</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >14</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >15</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >16</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >17</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >18</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >19</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >20</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >21</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >22</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >23</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >24</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >25</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >26</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >27</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >28</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >29</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >30</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >31</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >32</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >33</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >34</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >35</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >36</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >37</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >38</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >39</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >40</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >41</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >42</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >43</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >44</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >45</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >46</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >47</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >48</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >49</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >50</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class="selected"
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >51</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >52</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >53</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >54</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >55</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >56</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >57</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >58</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >59</span
                                >
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      data-v-677b0dee=""
                      class="appkiticon icon-calendar-fill a-text-pink"
                    ></span>
                  </div>
                  <div class="date-wrapper">
                    <div class="v3dp__datepicker">
                      <div class="v3dp__input_wrapper">
                        <input
                          type="text"
                          readonly=""
                          class="is-disabled a-datepicker-input a-text-input end-date"
                          placeholder="DD/MM/YYYY"
                          tabindex="0"
                        />
                        <div class="v3dp__clearable" style="display: none">
                          <i>x</i>
                        </div>
                      </div>
                      <div
                        data-v-2e128338=""
                        class="v3dp__popout"
                        style="
                          --popout-column-definition: repeat(3, 1fr);
                          display: none;
                        "
                      >
                        <div data-v-2e128338="" class="v3dp__heading">
                          <button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M-9 16V-8h24v24z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 0L1 4l4 4"
                                ></path>
                              </g>
                            </svg></button
                          ><span
                            data-v-2e128338=""
                            class="v3dp__heading__center"
                            >2020 - 2029</span
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M15-8v24H-9V-8z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M1 8l4-4-4-4"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div data-v-2e128338="" class="v3dp__body">
                          <!--v-if-->
                          <div data-v-2e128338="" class="v3dp__elements">
                            <button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2020</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2021</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2022</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2023</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2024</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2025</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2026</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2027</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2028</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >2029</span
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-2e128338=""
                        class="v3dp__popout"
                        headingformat="LLLL yyyy"
                        style="
                          --popout-column-definition: repeat(3, 1fr);
                          display: none;
                        "
                      >
                        <div data-v-2e128338="" class="v3dp__heading">
                          <button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M-9 16V-8h24v24z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 0L1 4l4 4"
                                ></path>
                              </g>
                            </svg></button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__center"
                          >
                            2023</button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M15-8v24H-9V-8z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M1 8l4-4-4-4"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div data-v-2e128338="" class="v3dp__body">
                          <!--v-if-->
                          <div data-v-2e128338="" class="v3dp__elements">
                            <button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Jan</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Feb</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Mar</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Apr</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >May</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Jun</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Jul</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Aug</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Sep</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Oct</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Nov</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >Dec</span
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-2e128338=""
                        class="v3dp__popout"
                        style="
                          --popout-column-definition: repeat(7, 1fr);
                          display: none;
                        "
                      >
                        <div data-v-2e128338="" class="v3dp__heading">
                          <button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M-9 16V-8h24v24z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 0L1 4l4 4"
                                ></path>
                              </g>
                            </svg></button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__center"
                          >
                            September 2023</button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M15-8v24H-9V-8z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M1 8l4-4-4-4"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div data-v-2e128338="" class="v3dp__body">
                          <div data-v-2e128338="" class="v3dp__subheading">
                            <span data-v-2e128338-s="">Mon</span
                            ><span data-v-2e128338-s="">Tue</span
                            ><span data-v-2e128338-s="">Wed</span
                            ><span data-v-2e128338-s="">Thu</span
                            ><span data-v-2e128338-s="">Fri</span
                            ><span data-v-2e128338-s="">Sat</span
                            ><span data-v-2e128338-s="">Sun</span>
                          </div>
                          <hr data-v-2e128338="" class="v3dp__divider" />
                          <div data-v-2e128338="" class="v3dp__elements">
                            <button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >28</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >29</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >30</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >31</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >01</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >02</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >03</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >04</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >05</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >06</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >07</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >08</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >09</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >10</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >11</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >12</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >13</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >14</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >15</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >16</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >17</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >18</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >19</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >20</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >21</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >22</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >23</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >24</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >25</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >26</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >27</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >28</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >29</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >30</span
                              ></button
                            ><button
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              disabled=""
                              class=""
                            >
                              <span data-v-2e128338="" data-v-2e128338-s=""
                                >01</span
                              >
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-2e128338=""
                        data-v-e1b37236=""
                        class="v3dp__popout"
                        style="
                          --popout-column-definition: repeat(2, 1fr);
                          display: none;
                        "
                      >
                        <div data-v-2e128338="" class="v3dp__heading">
                          <button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                            disabled=""
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M-9 16V-8h24v24z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M5 0L1 4l4 4"
                                ></path>
                              </g>
                            </svg></button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__center"
                          >
                            16:51</button
                          ><button
                            data-v-2e128338=""
                            class="v3dp__heading__button"
                            disabled=""
                          >
                            <svg
                              data-v-2e128338=""
                              data-v-2e128338-s=""
                              class="v3dp__heading__icon"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 6 8"
                            >
                              <g
                                data-v-2e128338=""
                                data-v-2e128338-s=""
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke="none"
                                  d="M15-8v24H-9V-8z"
                                ></path>
                                <path
                                  data-v-2e128338=""
                                  data-v-2e128338-s=""
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M1 8l4-4-4-4"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                        <div data-v-2e128338="" class="v3dp__body">
                          <!--v-if-->
                          <div data-v-2e128338="" class="v3dp__elements">
                            <div
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class="v3dp__column"
                            >
                              <button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >00</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >01</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >02</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >03</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >04</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >05</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >06</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >07</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >08</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >09</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >10</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >11</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >12</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >13</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >14</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >15</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class="selected"
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >16</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >17</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >18</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >19</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >20</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >21</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >22</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >23</span
                                >
                              </button>
                            </div>
                            <div
                              data-v-e1b37236=""
                              data-v-2e128338-s=""
                              class="v3dp__column"
                            >
                              <button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >00</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >01</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >02</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >03</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >04</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >05</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >06</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >07</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >08</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >09</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >10</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >11</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >12</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >13</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >14</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >15</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >16</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >17</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >18</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >19</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >20</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >21</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >22</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >23</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >24</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >25</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >26</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >27</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >28</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >29</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >30</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >31</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >32</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >33</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >34</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >35</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >36</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >37</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >38</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >39</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >40</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >41</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >42</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >43</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >44</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >45</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >46</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >47</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >48</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >49</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >50</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class="selected"
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >51</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >52</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >53</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >54</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >55</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >56</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >57</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >58</span
                                ></button
                              ><button
                                data-v-e1b37236=""
                                data-v-2e128338-s=""
                                class=""
                              >
                                <span data-v-e1b37236="" data-v-2e128338-s=""
                                  >59</span
                                >
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span
                      data-v-677b0dee=""
                      class="appkiticon icon-calendar-fill a-text-pink"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <!-- Circumstances -->
          <div class="input-group mb-3" id="circumstances">
            <p class="fw-bold small a-text-pink">
              Please select which of these circumstances apply to your request
              <span class="required">*</span>
            </p>
            <!-- circumstances -->
            <div class="circs-wrapper">
              <label class="a-checkbox w-100"
                ><input type="checkbox" /><span
                  data-v-677b0dee=""
                  class="a-checkbox-mark"
                  ><span
                    data-v-677b0dee=""
                    class="appkiticon icon-check-mark-fill"
                  ></span></span
                ><span class="a-checkbox-text"
                  >Lorem ipsum dolor sit amet</span
                ></label
              ><label class="a-checkbox w-100"
                ><input type="checkbox" /><span
                  data-v-677b0dee=""
                  class="a-checkbox-mark"
                  ><span
                    data-v-677b0dee=""
                    class="appkiticon icon-check-mark-fill"
                  ></span></span
                ><span class="a-checkbox-text"
                  >Sed ut perspiciatis unde omnis iste.</span
                ></label
              ><label class="a-checkbox w-100"
                ><input type="checkbox" /><span
                  data-v-677b0dee=""
                  class="a-checkbox-mark"
                  ><span
                    data-v-677b0dee=""
                    class="appkiticon icon-check-mark-fill"
                  ></span></span
                ><span class="a-checkbox-text"
                  >Nemo enim ipsam voluptatem quia.</span
                ></label
              ><label class="a-checkbox w-100"
                ><input type="checkbox" /><span
                  data-v-677b0dee=""
                  class="a-checkbox-mark"
                  ><span
                    data-v-677b0dee=""
                    class="appkiticon icon-check-mark-fill"
                  ></span></span
                ><span class="a-checkbox-text"
                  >Ut enim ad minima veniam.</span
                ></label
              >
            </div>
          </div>
          <hr />
          <!-- Scope of service -->
          <div class="input-group mb-3" id="scope">
            <p class="small fw-bold mb-0">
              Scope of service<span class="required">*</span>
            </p>
            <div class="mt-3 form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
            </div>
            <!-- limit reached message --><!--v-if-->
          </div>
          <!-- Brief description of the change/s -->
          <div class="input-group mb-3" id="description">
            <p class="small fw-bold mb-0">
              Brief description of the change/s<span
                data-v-677b0dee=""
                class="required"
                >*</span
              >
            </p>
            <div class="mt-3 form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
            </div>
            <!-- limit reached message --><!--v-if-->
          </div>
          <!-- Risk/s involved -->
          <div class="input-group mb-3" id="risks">
            <p class="small fw-bold mb-0">
              Risk/s involved<span class="required">*</span>
            </p>
            <div class="mt-3 form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
            </div>
            <!-- limit reached message --><!--v-if-->
          </div>
          <!-- Steps/safeguards to be put in place -->
          <div class="input-group mb-3" id="steps">
            <p class="small fw-bold mb-0">
              Steps/safeguards to be put in place<span
                data-v-677b0dee=""
                class="required"
                >*</span
              >
            </p>
            <div class="mt-3 form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
            </div>
            <!-- limit reached message --><!--v-if-->
          </div>
          <hr />
          <!-- Attachments -->
          <div class="input-group mb-3" id="attachments">
            <p class="small fw-bold mb-2">Attachment/s</p>
            <p class="small mb-2">
              You can only upload a total of <b data-v-677b0dee="">25MB</b> for
              all files.
            </p>
            <p class="small mb-2 a-text-pink hidden">0KB</p>
            <p class="small mb-3" data-v-677b0dee="">
              File format:
              <span class="a-badge a-badge-light me-1" data-v-677b0dee=""
                >.doc</span
              ><span class="a-badge a-badge-light me-1" data-v-677b0dee=""
                >.docx</span
              ><span class="a-badge a-badge-light me-1" data-v-677b0dee=""
                >.ppt</span
              ><span class="a-badge a-badge-light me-1" data-v-677b0dee=""
                >.pptx</span
              ><span class="a-badge a-badge-light" data-v-677b0dee=""
                >.pdf</span
              >
            </p>
            <div class="attachments-container mt-4 mb-4">
              <div class="left">
                <p class="small fw-bold mb-3">Engagement letter</p>
                <div class="file-container">
                  <!-- Engagement letter --><input
                    data-v-677b0dee=""
                    type="file"
                    name=""
                    id="engagement-file"
                    accept=".doc, .docx,.ppt, .pptx, .pdf"
                  /><span
                    data-v-677b0dee=""
                    class="appkiticon icon-image-fill a-text-rose"
                  ></span>
                  <p class="mb-0 small fw-bold">
                    Drag and drop, or
                    <span class="a-text-rose">Browse</span>
                  </p>
                </div>
                <!--v-if-->
              </div>
              <div class="right">
                <p class="small fw-bold mb-3">Terms of business</p>
                <div class="file-container">
                  <!-- Terms --><input
                    data-v-677b0dee=""
                    type="file"
                    name=""
                    id="terms-file"
                    accept=".doc, .docx,.ppt, .pptx, .pdf"
                  /><span
                    data-v-677b0dee=""
                    class="appkiticon icon-image-fill a-text-rose"
                  ></span>
                  <p class="mb-0 small fw-bold">
                    Drag and drop, or
                    <span class="a-text-rose">Browse</span>
                  </p>
                </div>
                <!--v-if-->
              </div>
            </div>
            <div class="attachments-container">
              <div class="left">
                <p class="small fw-bold mb-3">Data sharing agreement</p>
                <div class="file-container">
                  <!-- Data sharing --><input
                    data-v-677b0dee=""
                    type="file"
                    name=""
                    id="data-sharing-file"
                    accept=".doc, .docx,.ppt, .pptx, .pdf"
                  /><span
                    data-v-677b0dee=""
                    class="appkiticon icon-image-fill a-text-rose"
                  ></span>
                  <p class="mb-0 small fw-bold">
                    Drag and drop, or
                    <span class="a-text-rose">Browse</span>
                  </p>
                </div>
                <!--v-if-->
              </div>
              <div class="right">
                <p class="small fw-bold mb-3">Other files</p>
                <div class="file-container">
                  <!-- Other files --><input
                    data-v-677b0dee=""
                    type="file"
                    name=""
                    id="other-file"
                    accept=".doc, .docx,.ppt, .pptx, .pdf"
                    multiple=""
                  /><span
                    data-v-677b0dee=""
                    class="appkiticon icon-image-fill a-text-rose"
                  ></span>
                  <p class="mb-0 small fw-bold">
                    Drag and drop, or
                    <span class="a-text-rose">Browse</span>
                  </p>
                </div>
                <!--v-if-->
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <button class="me-1 a-btn a-btn-grey a-btn-md">
              <span data-v-677b0dee="">Cancel</span></button
            ><button class="a-btn a-btn-grey hidden">Check fields</button>
            <div class="wrapper me-1">
              <button
                data-v-677b0dee=""
                class="a-btn a-btn-rose a-btn-md a-disabled"
              >
                <span @click="isValidatingModal = true" data-v-677b0dee="">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <Teleport to="#modal">
    <Transition name="modal">
      <div class="modal-bg" v-if="isValidatingModal">
        <div ref="modal" class="modal" id="validating-modal">
          <!-- Header -->
          <div class="modal-header ps-4 pe-4 pt-4">
            <h6 class="a-h4 mb-1 fw-bold">Are you sure you want to submit?</h6>
          </div>

          <!-- Body -->
          <div class="modal-body ps-4 pe-4 pt-2 pb-2"></div>

          <!-- Footer -->
          <div class="modal-footer justify-content-between">
            <button
              @click="isValidatingModal = false"
              class="me-1 a-btn a-btn-grey a-btn-md"
            >
              No
            </button>

            <button @click="handleSubmit" class="a-btn a-btn-rose a-btn-md">
              Yes
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import router from "@/router";
import { ref } from "vue";
export default {
  name: "form",
  setup() {
    const isValidatingModal = ref(false);

    const handleSubmit = () => {
      isValidatingModal.value = false;
      router.push("/overview");
    };

    return { handleSubmit, isValidatingModal };
  },
};
</script>

<style></style>
