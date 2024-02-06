<template>
  <BannerImageSigned />
  <div class="home">
    <div class="home container-fluid pt-4 pb-4">
      <div class="container-fluid ps-3 pe-3">
        <div
          class="a-tab-container a-bg-white a-overflow-visible m-auto pt-4 pb-0 ps-0 pe-0"
        >
          <ul class="a-tab-fun main-tabs a-tab ps-4">
            <!-- tab groups -->
            <li
              @click="toggleTabs($event, 'your-requests')"
              class="a-tab-item"
              tabindex="0"
              data-target="your-requests"
            >
              Your requests
            </li>
            <li
              @click="toggleTabs($event, 'for-review')"
              class="a-tab-item"
              tabindex="0"
              data-target="for-review"
            >
              For review
            </li>
            <li
              @click="toggleTabs($event, 'action')"
              class="a-tab-item"
              tabindex="0"
              data-target="action"
            >
              Action required
            </li>
            <li
              @click="toggleTabs($event, 'active')"
              class="a-tab-item"
              tabindex="0"
              data-target="active"
            >
              Active requests
            </li>
            <li
              @click="toggleTabs($event, 'archive')"
              class="a-tab-item"
              tabindex="0"
              data-target="archive"
            >
              Archive
            </li>
            <li class="ms-auto me-2 mt-n5">
              <button
                class="a-btn a-btn-sm a-btn-rose me-2 pt-2 pb-2"
                @click="isRequestModal = true"
              >
                <span class="appkiticon icon-plus-fill me-2"></span> New request
              </button>
            </li>
          </ul>
          <div class="a-tab-targets pt-2">
            <!-- Your requests -->
            <div
              class="main-target a-tab-target-item active"
              id="your-requests"
            >
              <div class="d-flex ps-5 pe-3 mt-2">
                <!-- client search -->
                <div class="a-input-with-icon a-input-md search-client">
                  <input
                    aria-label="Search"
                    class="a-text-input a-input-secondary"
                    placeholder="Search Client/Account name"
                  /><span class="a-icon appkiticon icon-search-outline"></span
                  ><!--v-if-->
                </div>
                <!-- fiscal year -->
                <div class="fy-container ms-auto">
                  <p class="mb-0 fw-bold me-2">Fiscal Year:</p>
                  <div class="a-dropdown">
                    <button
                      aria-expanded="false"
                      class="a-dropdown-toggle"
                      role="button"
                      tabindex="0"
                    >
                      <div class="a-choosen-text">All</div>
                      <span
                        class="a-icon appkiticon icon-down-chevron-fill"
                      ></span>
                    </button>
                    <div class="a-dropdown-menu" style="left: 0px">
                      <div class="a-dropdown-item">All</div>
                      <div class="a-dropdown-item hidden">2021</div>
                      <div class="a-dropdown-item">2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- request table -->
              <div class="a-table-wrapper mt-3" id="your-requests-table">
                <div class="a-table-scroller a-mb-10 table-responsive">
                  <table
                    class="a-table a-table-striped a-md min-w-1024 table sortable table-fixed"
                  >
                    <thead class="a-thead">
                      <tr>
                        <th>Client/Account name</th>
                        <th>Opportunity name</th>
                        <th>Opportunity amount</th>
                        <th>Engagement partner</th>
                        <th>Target date of proposal</th>
                        <th class="status">Stage</th>
                        <th>Date requested</th>
                      </tr>
                    </thead>
                    <tbody
                      @click="handleOverview()"
                      class="a-tbody list tbody-customize tbody-hover"
                    >
                      <tr>
                        <td title="Joll" class="wrap-td">Joll</td>
                        <td title="Joll" class="wrap-td">Joll</td>
                        <td class="amount">
                          <div class="d-flex">
                            <span class="currency">AFN</span
                            ><span>100,000</span>
                          </div>
                        </td>
                        <td title="Carly Smiths">Carly Smiths</td>
                        <td class="date">10 October 2023</td>
                        <td class="status" title="LoS Risk Management review">
                          LoS Risk Management review
                        </td>
                        <td class="date">23 August 2023</td>
                      </tr>
                      <tr>
                        <td title="Joll" class="wrap-td">Joll</td>
                        <td title="Joll" class="wrap-td">Joll</td>
                        <td class="amount">
                          <div class="d-flex">
                            <span class="currency">AFN</span
                            ><span>100,000</span>
                          </div>
                        </td>
                        <td title="Carly Smiths">Carly Smiths</td>
                        <td class="date">10 October 2023</td>
                        <td class="status" title="LoS Risk Management review">
                          LoS Risk Management review
                        </td>
                        <td class="date">23 August 2023</td>
                      </tr>
                      <tr>
                        <td title="Joll" class="wrap-td">Joll</td>
                        <td title="Joll" class="wrap-td">Joll</td>
                        <td class="amount">
                          <div class="d-flex">
                            <span class="currency">AFN</span
                            ><span>100,000</span>
                          </div>
                        </td>
                        <td title="Carly Smiths">Carly Smiths</td>
                        <td class="date">10 October 2023</td>
                        <td class="status" title="LoS Risk Management review">
                          LoS Risk Management review
                        </td>
                        <td class="date">23 August 2023</td>
                      </tr>
                    </tbody>
                  </table>
                  <!--v-if-->
                </div>
              </div>
              <!-- pagination -->
              <div class="page-container pt-5">
                <div class="left">
                  <p class="mb-0 a-text-grey small">Showing 1-3 of 3</p>
                </div>
                <div class="right page-controls">
                  <span
                    class="a-disabled appkiticon icon-left-chevron-circle-outline a-bg-white"
                  ></span
                  ><span class="current-page">1</span
                  ><span
                    class="a-disabled appkiticon icon-right-chevron-circle-outline a-bg-white"
                  ></span>
                </div>
              </div>
            </div>
            <!-- For review -->
            <div class="main-target a-tab-target-item" id="for-review">
              <div class="d-flex ps-5 pe-3 mt-3">
                <!-- client search -->
                <div class="left d-flex">
                  <div class="a-input-with-icon a-input-md search-client">
                    <input
                      aria-label="Search"
                      class="a-text-input a-input-secondary"
                      placeholder="Search Client/Account name"
                    /><span class="a-icon appkiticon icon-search-outline"></span
                    ><!--v-if-->
                  </div>
                </div>
                <!-- fiscal year -->
                <div class="fy-container ms-auto">
                  <p class="mb-0 fw-bold me-2">Fiscal Year:</p>
                  <div class="a-dropdown">
                    <button
                      aria-expanded="false"
                      class="a-dropdown-toggle"
                      role="button"
                      tabindex="0"
                    >
                      <div class="a-choosen-text">All</div>
                      <span
                        class="a-icon appkiticon icon-down-chevron-fill"
                      ></span>
                    </button>
                    <div class="a-dropdown-menu" style="left: 0px">
                      <div class="a-dropdown-item">All</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- for review -->
              <div class="a-table-wrapper mt-3" id="los-forreview-table">
                <div class="a-table-scroller a-mb-10 table-responsive">
                  <table
                    class="a-table a-table-striped a-md min-w-1024 table sortable table-fixed"
                  >
                    <thead class="a-thead">
                      <tr>
                        <th>Client/Account name</th>
                        <th>Opportunity name</th>
                        <th>Opportunity amount</th>
                        <th>Engagement manager</th>
                        <th>Target date of proposal</th>
                        <th>Date requested</th>
                        <th>Days outstanding</th>
                        <th>Stage</th>
                        <th>Assigned to</th>
                      </tr>
                    </thead>
                    <tbody
                      class="a-tbody list tbody-customize tbody-hover"
                    ></tbody>
                  </table>
                  <!--v-if-->
                </div>
              </div>
              <div class="no-data-wrapper">
                <p class="mb-0 fw-bold a-text-grey">No requests yet.</p>
              </div>
              <!-- pagination --><!--v-if-->
            </div>
            <!-- Action required -->
            <div class="main-target a-tab-target-item" id="action">
              <div class="d-flex ps-5 pe-3 mt-2">
                <!-- client search -->
                <div class="a-input-with-icon a-input-md search-client">
                  <input
                    aria-label="Search"
                    class="a-text-input a-input-secondary"
                    placeholder="Search Client/Account name"
                  /><span class="a-icon appkiticon icon-search-outline"></span
                  ><!--v-if-->
                </div>
                <!-- fiscal year -->
                <div class="fy-container ms-auto">
                  <p class="mb-0 fw-bold me-2">Fiscal Year:</p>
                  <div class="a-dropdown">
                    <button
                      aria-expanded="false"
                      class="a-dropdown-toggle"
                      role="button"
                      tabindex="0"
                    >
                      <div class="a-choosen-text">All</div>
                      <span
                        class="a-icon appkiticon icon-down-chevron-fill"
                      ></span>
                    </button>
                    <div class="a-dropdown-menu" style="left: 0px">
                      <div class="a-dropdown-item">All</div>
                      <div class="a-dropdown-item">2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- request table -->
              <div class="a-table-wrapper mt-3">
                <div class="a-table-scroller a-mb-10 table-responsive">
                  <table
                    class="a-table a-table-striped a-md min-w-1024 table sortable table-fixed"
                  >
                    <thead class="a-thead">
                      <tr>
                        <th>Client/Account name</th>
                        <th>Opportunity name</th>
                        <th>Opportunity amount</th>
                        <th>Engagement partner</th>
                        <th>Target date of proposal</th>
                        <th class="status">Stage</th>
                        <th>Date requested</th>
                      </tr>
                    </thead>
                    <tbody
                      @click="handleOverview()"
                      class="a-tbody list tbody-customize tbody-hover"
                    >
                      <tr>
                        <td title="Seth Global Logistics GmbH" class="wrap-td">
                          Seth Global Logistics GmbH
                        </td>
                        <td title="sample" class="wrap-td">sample</td>
                        <td class="amount">
                          <div class="d-flex">
                            <span class="currency">PHP</span><span>45,000</span>
                          </div>
                        </td>
                        <td title="Jane Doe">Jane Doe</td>
                        <td class="date">26 August 2023</td>
                        <td class="status" title="LoS Risk Management review">
                          LoS Risk Management review
                        </td>
                        <td class="date">23 August 2023</td>
                      </tr>
                      <tr>
                        <td title="Jolibee12" class="wrap-td">Jolibee12</td>
                        <td title="Jolibee corp1" class="wrap-td">
                          Jolibee corp1
                        </td>
                        <td class="amount">
                          <div class="d-flex">
                            <span class="currency">AFN</span
                            ><span>100,000</span>
                          </div>
                        </td>
                        <td title="Carlo Doe">Carlo Doe</td>
                        <td class="date">10 October 2023</td>
                        <td class="status" title="LoS Risk Management review">
                          LoS Risk Management review
                        </td>
                        <td class="date">23 August 2023</td>
                      </tr>
                      <tr>
                        <td title="Jolibee12" class="wrap-td">Jolibee12</td>
                        <td title="Jolibee corp1" class="wrap-td">
                          Jolibee corp1
                        </td>
                        <td class="amount">
                          <div class="d-flex">
                            <span class="currency">AFN</span
                            ><span>100,000</span>
                          </div>
                        </td>
                        <td title="Carlo Doe">Carlo Doe</td>
                        <td class="date">10 October 2023</td>
                        <td class="status" title="Engagement partner approval">
                          Engagement partner approval
                        </td>
                        <td class="date">23 August 2023</td>
                      </tr>
                    </tbody>
                  </table>
                  <!--v-if-->
                </div>
              </div>
              <!-- pagination -->
              <div class="page-container pt-5">
                <div class="left">
                  <p class="mb-0 a-text-grey small">Showing 1-3 of 3</p>
                </div>
                <div class="right page-controls">
                  <span
                    class="a-disabled appkiticon icon-left-chevron-circle-outline a-bg-white"
                  ></span
                  ><span class="current-page">1</span
                  ><span
                    class="a-disabled appkiticon icon-right-chevron-circle-outline a-bg-white"
                  ></span>
                </div>
              </div>
            </div>
            <div class="main-target a-tab-target-item" id="active">
              <div class="d-flex ps-5 pe-3 mt-3">
                <!-- client search -->
                <div class="left d-flex">
                  <div class="a-input-with-icon a-input-md search-client">
                    <input
                      aria-label="Search"
                      class="a-text-input a-input-secondary"
                      placeholder="Search Client/Account name"
                    /><span class="a-icon appkiticon icon-search-outline"></span
                    ><!--v-if-->
                  </div>
                </div>
                <!-- fiscal year -->
                <div class="fy-container ms-auto">
                  <p class="mb-0 fw-bold me-2">Fiscal Year:</p>
                  <div class="a-dropdown">
                    <button
                      aria-expanded="false"
                      class="a-dropdown-toggle"
                      role="button"
                      tabindex="0"
                    >
                      <div class="a-choosen-text">All</div>
                      <span
                        class="a-icon appkiticon icon-down-chevron-fill"
                      ></span>
                    </button>
                    <div class="a-dropdown-menu" style="left: 0px">
                      <div class="a-dropdown-item">All</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- for review -->
              <div class="a-table-wrapper mt-3" id="los-forreview-table">
                <div class="a-table-scroller a-mb-10 table-responsive">
                  <table
                    class="a-table a-table-striped a-md min-w-1024 table sortable table-fixed"
                  >
                    <thead class="a-thead">
                      <tr>
                        <th>Client/Account name</th>
                        <th>Opportunity name</th>
                        <th>Opportunity amount</th>
                        <th>Engagement manager</th>
                        <th>Target date of proposal</th>
                        <th>Date requested</th>
                        <th>Days outstanding</th>
                        <th>Stage</th>
                        <th>Assigned to</th>
                      </tr>
                    </thead>
                    <tbody
                      class="a-tbody list tbody-customize tbody-hover"
                    ></tbody>
                  </table>
                  <!--v-if-->
                </div>
              </div>
              <div class="no-data-wrapper">
                <p class="mb-0 fw-bold a-text-grey">No requests yet.</p>
              </div>
              <!-- pagination --><!--v-if-->
            </div>
            <!-- Active requests --><!--v-if--><!-- Archive -->
            <div class="main-target a-tab-target-item" id="archive">
              <div class="d-flex flex-wrapper ps-5 pe-3 mt-2">
                <!-- client search -->
                <div class="left d-flex">
                  <div class="a-input-with-icon a-input-md search-client">
                    <input
                      aria-label="Search"
                      class="a-text-input a-input-secondary"
                      placeholder="Search Client/Account name"
                    /><span class="a-icon appkiticon icon-search-outline"></span
                    ><!--v-if-->
                  </div>
                  <!-- filter archive -->
                  <div class="a-dropdown filter-archive ms-2">
                    <button
                      aria-expanded="false"
                      class="a-dropdown-toggle"
                      role="button"
                      tabindex="0"
                    >
                      <div class="a-choosen-text">All</div>
                      <span
                        class="a-icon appkiticon icon-down-chevron-fill"
                      ></span>
                    </button>
                    <div class="a-dropdown-menu archive-fy" style="left: 0px">
                      <div class="a-dropdown-item">All</div>
                      <div class="a-dropdown-item">Won</div>
                      <div class="a-dropdown-item">Lost</div>
                      <div class="a-dropdown-item">Disapproved</div>
                      <div class="a-dropdown-item">Withdrawn</div>
                    </div>
                  </div>
                </div>
                <!-- fiscal year -->
                <div class="fy-container ms-auto">
                  <p class="mb-0 fw-bold me-2">Fiscal Year:</p>
                  <div class="a-dropdown">
                    <button
                      aria-expanded="false"
                      class="a-dropdown-toggle"
                      role="button"
                      tabindex="0"
                    >
                      <div class="a-choosen-text">All</div>
                      <span
                        class="a-icon appkiticon icon-down-chevron-fill"
                      ></span>
                    </button>
                    <div class="a-dropdown-menu" style="left: 0px">
                      <div class="a-dropdown-item">All</div>
                      <div class="a-dropdown-item">2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="a-table-wrapper mt-3" id="archive-table">
                <div class="a-table-scroller a-mb-10 table-responsive">
                  <table
                    class="a-table a-table-striped a-md min-w-1024 table sortable table-fixed"
                  >
                    <thead class="a-thead">
                      <tr>
                        <th>Client/Account name</th>
                        <th>Opportunity name</th>
                        <th>Opportunity amount</th>
                        <th>
                          <!-- requestor -->
                          Engagement partner
                        </th>
                        <th>Actual date of proposal</th>
                        <th>Status</th>
                        <th>Date closed</th>
                      </tr>
                    </thead>
                    <tbody
                      @click="handleOverview()"
                      class="a-tbody list tbody-customize tbody-hover"
                    >
                      <tr>
                        <td
                          title="Lorem International Development Limited (LIDL)"
                          class="wrap-td"
                        >
                          Lorem International Development Limited (LIDL)
                        </td>
                        <td title="Landing" class="wrap-td">Landing</td>
                        <td class="amount">
                          <div class="d-flex">
                            <span class="currency">PHP</span
                            ><span>560,000</span>
                          </div>
                        </td>
                        <td title="Jane Doe">Jane Doe</td>
                        <td class="date">24 August 2023</td>
                        <td title="Disapproved" class="status">Disapproved</td>
                        <td class="date">24 August 2023</td>
                      </tr>
                    </tbody>
                  </table>
                  <!--v-if-->
                </div>
                <!-- pagination -->
                <div class="page-container pt-5">
                  <div class="left">
                    <p class="mb-0 a-text-grey small">Showing 1 of 1</p>
                  </div>
                  <div class="right page-controls">
                    <span
                      class="a-disabled appkiticon icon-left-chevron-circle-outline a-bg-white"
                    ></span
                    ><span class="current-page">1</span
                    ><span
                      class="a-disabled appkiticon icon-right-chevron-circle-outline a-bg-white"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modals -->
  <!-- Modal -->
  <Teleport to="#modal">
    <Transition name="modal">
      <div class="modal-bg" v-if="isRequestModal">
        <div ref="modal" class="modal" id="request-modal">
          <!-- Header -->
          <div class="modal-header ps-4 pe-4 pt-4">
            <h6 class="a-h4 mb-3 fw-bold">Select appropriate approval</h6>
          </div>

          <!-- Body -->
          <div class="modal-body p-2 pb-2">
            <!-- elt -->
            <div class="choice-container">
              <label class="a-radio a-mx-10">
                <input
                  @click="handleSelectELT"
                  name="radio-group-1"
                  type="radio"
                />
                <span class="a-radio-mark">
                  <span class="a-radio-inner"></span>
                </span>
                <span class="a-radio-text"
                  >Executive Leadership Team (ELT)</span
                >
              </label>
              <div class="circ-container">
                <p class="mb-1 fw-bold small">
                  Circumstances requiring approval of all members:
                </p>
                <ol>
                  <li class="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    aliquet ultricies elit ut commodo.
                  </li>
                  <li class="mb-1">
                    Curabitur rutrum ultricies consequat. Phasellus a nibh
                    velit.
                  </li>
                  <li class="mb-1">
                    Curabitur sagittis purus feugiat viverra pulvinar. Aenean
                    erat ligula, facilisis vel sapien id, lacinia tempor elit.
                  </li>
                  <li class="mb-1">
                    Nunc tortor magna, dictum nec metus at, pellentesque auctor
                    leo.
                  </li>
                  <li class="mb-1">
                    Etiam pulvinar bibendum eros, sed pellentesque diam lobortis
                    in. Nunc interdum odio vel enim hendrerit fermentum.
                  </li>
                </ol>
                <p class="mb-1 fw-bold small">
                  This will require the approval of all the members below:
                </p>
                <div class="stages-cont">
                  <div class="stage">
                    <div class="num">1</div>
                    <p class="mb-1 fw-bold small">Engagement Partner</p>
                    <span class="appkiticon icon-right-chevron-outline"></span>
                  </div>
                  <div class="stage">
                    <div class="num">2</div>
                    <p class="mb-1 fw-bold small">LoS Risk Management</p>
                    <span class="appkiticon icon-right-chevron-outline"></span>
                  </div>
                  <div class="stage">
                    <div class="num">3</div>
                    <p class="mb-1 fw-bold small">Risk and Quality</p>
                    <p class="mb-1">
                      (Office of the General Council, Risk Management & Data
                      Privacy Office)
                    </p>
                    <span class="appkiticon icon-right-chevron-outline"></span>
                  </div>
                  <div class="stage">
                    <div class="num">4</div>
                    <p class="mb-1 fw-bold small">Executive Leadership Team</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- tsp -->
            <div class="choice-container">
              <label class="a-radio a-mx-10 a-btn-negative">
                <input name="radio-group-1" type="radio" />
                <span class="a-radio-mark">
                  <span class="a-radio-inner"></span>
                </span>
                <span class="a-radio-text">Territory Senior Partner (TSP)</span>
              </label>
              <div class="circ-container">
                <p class="mb-1 fw-bold small">
                  Circumstances requiring approval of members:
                </p>
                <ol>
                  <li class="mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    aliquet ultricies elit ut commodo.
                  </li>
                  <li class="mb-1">
                    Curabitur rutrum ultricies consequat. Phasellus a nibh
                    velit.
                  </li>
                  <li class="mb-1">
                    Curabitur sagittis purus feugiat viverra pulvinar. Aenean
                    erat ligula, facilisis vel sapien id, lacinia tempor elit.
                  </li>
                  <li class="mb-1">
                    Nunc tortor magna, dictum nec metus at, pellentesque auctor
                    leo.
                  </li>
                  <li class="mb-1">
                    Etiam pulvinar bibendum eros, sed pellentesque diam lobortis
                    in. Nunc interdum odio vel enim hendrerit fermentum.
                  </li>
                </ol>
                <p class="mb-1 fw-bold small">
                  This will require the approval of all the members below:
                </p>
                <div class="stages-cont">
                  <div class="stage">
                    <div class="num">1</div>
                    <p class="mb-1 fw-bold small">Engagement Partner</p>
                    <span class="appkiticon icon-right-chevron-outline"></span>
                  </div>
                  <div class="stage">
                    <div class="num">2</div>
                    <p class="mb-1 fw-bold small">LoS Risk Management</p>
                    <span class="appkiticon icon-right-chevron-outline"></span>
                  </div>
                  <div class="stage">
                    <div class="num">3</div>
                    <p class="mb-1 fw-bold small">Risk and Quality</p>
                    <p class="mb-1">
                      (Office of the General Council, Risk Management & Data
                      Privacy Office)
                    </p>
                    <span class="appkiticon icon-right-chevron-outline"></span>
                  </div>
                  <div class="stage">
                    <div class="num">4</div>
                    <p class="mb-1 fw-bold small">LoS Leader</p>
                    <span class="appkiticon icon-right-chevron-outline"></span>
                  </div>
                  <div class="stage">
                    <div class="num">5</div>
                    <p class="mb-1 fw-bold small">Territory Senior Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="modal-footer justify-content-between">
            <button
              @click="isRequestModal = false"
              class="me-1 a-btn a-btn-grey a-btn-md"
            >
              Cancel
            </button>
            <button
              @click="handleConfirmApproval"
              class="me-1 a-btn a-btn-rose a-btn-md"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import BannerImageSigned from "@/components/BannerImageSigned.vue";
import { onMounted, ref } from "vue";
import router from "@/router";

export default {
  name: "home",
  components: { BannerImageSigned },
  setup() {
    // refs
    const isRequestModal = ref(false);

    const handleConfirmApproval = () => {
      isRequestModal.value = false;

      router.push("/form");
    };

    const toggleTabs = (event, target) => {
      // toggle tab header
      let tabItems = document.querySelectorAll(".main-tabs .a-tab-item");

      tabItems.forEach((e) => {
        e.classList.remove("active");
      });

      let targetHeader = document.querySelector(`[data-target='${target}']`);
      targetHeader.classList.add("active");

      // toggle tab target
      let mainTabs = document.querySelectorAll(
        ".main-target.a-tab-target-item"
      );
      mainTabs.forEach((e) => {
        e.classList.remove("active");
      });

      let targetTab = document.querySelector(`.a-tab-target-item#${target}`);
      targetTab.classList.add("active");
    };

    const handleOverview = () => {
      router.push("/overview");
    };

    onMounted(() => {
      setTimeout(() => {
        let tab = document.querySelector(".main-tabs .a-tab-item");
        tab.click();
      }, 500);
    });

    return {
      // refs
      isRequestModal,
      // fns
      toggleTabs,
      handleConfirmApproval,
      handleOverview,
    };
  },
};
</script>
