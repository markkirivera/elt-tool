<template>
  <div class="admin-wrapper">
    <!-- home -->
    <div v-if="isAdminHome" class="admin-home">
      <div class="container-fluid admin-banner"></div>
      <div class="container-fluid admin-container">
        <div class="container">
          <div class="row pt-5">
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div @click="handleUser()" class="card">
                <div class="icon-wrapper">
                  <span
                    class="appkiticon icon-person-fill a-text-white a-font-24"
                  ></span>
                </div>
                <p class="mb-1 small">User management</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div @click="handleCircumstances()" class="card">
                <div class="icon-wrapper">
                  <span
                    class="appkiticon icon-survey-fill a-text-white a-font-24"
                  ></span>
                </div>
                <p class="mb-1 small">Manage circumstances</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div @click="handleOtherTools()" class="card">
                <div class="icon-wrapper">
                  <span
                    class="appkiticon icon-setting-fill a-text-white a-font-24"
                  ></span>
                </div>
                <p class="mb-1 small">Other admin tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- user managements -->
    <div v-if="isUserManagement" class="components-wrapper">
      <div class="a-bg-white a-gray-bread a-p-20 d-table w-100">
        <div
          aria-label="breadcrumb"
          class="a-breadcrumbs m-0 a-breadcrumb-secondary p-0"
        >
          <div class="a-bread-item text-decoration-none me-2">
            <a
              aria-current="page"
              href="/admin"
              class="router-link-active router-link-exact-active other-link"
              >Admin home</a
            >
          </div>
          <span class="appkiticon icon-right-chevron-fill smaller me-2"></span>
          <div class="a-bread-item active">
            <span>User management</span
            ><!----><!---->
          </div>
        </div>
      </div>
      <div class="container-fluid pink-banner">
        <div class="container ms-3 me-3">
          <h5 class="mb-0 a-text-white fw-bold">User Management</h5>
        </div>
      </div>
      <div class="container-fluid mt-4 mb-3 a-px-20 admin-container">
        <div
          class="a-tab-container a-overflow-visible m-auto pt-0 pb-4 ps-0 pe-0"
        >
          <ul class="a-tab-fun a-tab">
            <li
              @click="toggleTabs($event, 'los')"
              class="a-tab-item active"
              tabindex="0"
              data-target="los"
            >
              LoS Risk Management
            </li>
            <li
              @click="toggleTabs($event, 'rq')"
              class="a-tab-item"
              tabindex="0"
              data-target="rq"
            >
              Risk and Quality
            </li>
            <li
              @click="toggleTabs($event, 'elt')"
              class="a-tab-item"
              tabindex="0"
              data-target="elt"
            >
              Executive Leadership Team
            </li>
            <li
              @click="toggleTabs($event, 'ea')"
              class="a-tab-item"
              tabindex="0"
              data-target="ea"
            >
              Executive Assistant
            </li>
            <li
              @click="toggleTabs($event, 'admin')"
              class="a-tab-item"
              tabindex="0"
              data-target="admin"
            >
              Administrator
            </li>
            <li class="ms-auto me-2 mt-n5">
              <button class="a-btn a-btn-md a-btn-secondary">
                <span class="appkiticon icon-time-outline me-2"></span> Admin
                logs
              </button>
            </li>
          </ul>
          <div class="a-tab-targets a-bg-white pt-3 p-3 pb-4">
            <div class="a-tab-target-item active" id="los">
              <div class="d-flex justify-content-end mb-3">
                <div class="a-dropdown filter-los">
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
                  <div class="a-dropdown-menu">
                    <div class="a-dropdown-item">All</div>
                    <div class="a-dropdown-item">Assurance</div>
                    <div class="a-dropdown-item">BSP</div>
                    <div class="a-dropdown-item">Consulting</div>
                    <div class="a-dropdown-item">Deals</div>
                    <div class="a-dropdown-item">Tax</div>
                  </div>
                </div>
              </div>
              <div class="row m-0">
                <div class="col-lg-5 col-md-12 bordered-right">
                  <div class="d-flex justify-content-between">
                    <p class="a-h4 fw-bold mb-0">Reviewer</p>
                    <button class="a-btn a-btn-md a-btn-rose">
                      <span class="appkiticon icon-plus-fill me-2"></span> Add
                      reviewer
                    </button>
                  </div>
                  <div class="a-table-wrapper mt-3" id="reviewers-table">
                    <div class="a-table-scroller a-mb-10 table-responsive">
                      <table class="a-table a-md min-w-1024 table sortable">
                        <thead class="a-thead a-bg-dark-grey">
                          <tr>
                            <th>Line of service</th>
                            <th>Employee name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody class="a-tbody list tbody-customize tbody-hover">
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Assurance</span
                              ><span class="a-badge a-badge-secondary me-1"
                                >Tax</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Assurance</span
                              ><span class="a-badge a-badge-secondary me-1"
                                >Tax</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Tax</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Assurance</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Assurance</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="page-container a-bg-white">
                    <div class="left">
                      <p class="mb-0 a-text-grey small">Showing 1 to 5 of 5</p>
                    </div>
                    <div class="right page-controls">
                      <span
                        class="a-disabled appkiticon icon-left-chevron-circle-outline"
                      ></span
                      ><span class="current-page">1</span
                      ><span
                        class="a-disabled appkiticon icon-right-chevron-circle-outline"
                      ></span>
                    </div>
                  </div>
                  <!----><!---->
                </div>
                <div class="col-lg-7 col-md-12">
                  <p class="a-h4 fw-bold mb-3">Approver</p>
                  <div class="a-table-wrapper mt-3">
                    <div class="a-table-scroller a-mb-10 table-responsive">
                      <table class="a-table a-md min-w-1024 table sortable">
                        <thead class="a-thead a-bg-dark-grey">
                          <tr>
                            <th>Line of service</th>
                            <th>Primary approver</th>
                            <th>Alternative approver</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody class="a-tbody list tbody-customize tbody-hover">
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary"
                                >Consulting</span
                              >
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary"
                                >Deals</span
                              >
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary">Tax</span>
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary"
                                >Assurance</span
                              >
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary">BSP</span>
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="page-container a-bg-white">
                    <div class="left">
                      <p class="mb-0 a-text-grey small">Showing 1 to 5 of 5</p>
                    </div>
                    <div class="right page-controls">
                      <span
                        class="a-disabled appkiticon icon-left-chevron-circle-outline"
                      ></span
                      ><span class="current-page">1</span
                      ><span
                        class="a-disabled appkiticon icon-right-chevron-circle-outline"
                      ></span>
                    </div>
                  </div>
                  <!----><!---->
                </div>
              </div>
            </div>
            <div class="a-tab-target-item" id="rq">
              <div class="d-flex justify-content-end mb-3">
                <div class="a-dropdown filter-rq">
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
                  <div class="a-dropdown-menu">
                    <div class="a-dropdown-item">All</div>
                    <div class="a-dropdown-item">
                      Office of the General Counsel
                    </div>
                    <div class="a-dropdown-item">Risk Management</div>
                    <div class="a-dropdown-item">Data Privacy Office</div>
                  </div>
                </div>
              </div>
              <div class="row m-0">
                <div class="col-lg-5 col-md-12 bordered-right">
                  <div class="d-flex justify-content-between">
                    <p class="a-h4 fw-bold mb-0">Reviewer</p>
                    <button class="a-btn a-btn-md a-btn-rose">
                      <span class="appkiticon icon-plus-fill me-2"></span> Add
                      reviewer
                    </button>
                  </div>
                  <div class="a-table-wrapper mt-3" id="rq-reviewers-table">
                    <div class="a-table-scroller a-mb-10 table-responsive">
                      <table class="a-table a-md min-w-1024 table sortable">
                        <thead class="a-thead a-bg-dark-grey">
                          <tr>
                            <th>Risk and quality</th>
                            <th>Employee name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody class="a-tbody list tbody-customize tbody-hover">
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Assurance</span
                              ><span class="a-badge a-badge-secondary me-1"
                                >Tax</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Assurance</span
                              ><span class="a-badge a-badge-secondary me-1"
                                >Tax</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Tax</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Assurance</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary me-1"
                                >Assurance</span
                              >
                            </td>
                            <td class="text-left">Reviewer Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span
                              ><span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="page-container a-bg-white">
                    <div class="left">
                      <p class="mb-0 a-text-grey small">
                        Showing 1 to 11 of 11
                      </p>
                    </div>
                    <div class="right page-controls">
                      <span
                        class="a-disabled appkiticon icon-left-chevron-circle-outline"
                      ></span
                      ><span class="current-page">1</span
                      ><span
                        class="a-disabled appkiticon icon-right-chevron-circle-outline"
                      ></span>
                    </div>
                  </div>
                  <!----><!---->
                </div>
                <div class="col-lg-7 col-md-12">
                  <p class="a-h4 fw-bold mb-3">Approver</p>
                  <div class="a-table-wrapper mt-3">
                    <div class="a-table-scroller a-mb-10 table-responsive">
                      <table class="a-table a-md min-w-1024 table sortable">
                        <thead class="a-thead a-bg-dark-grey">
                          <tr>
                            <th>Risk and Quality</th>
                            <th>Primary approver</th>
                            <th>Alternative approver</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody class="a-tbody list tbody-customize tbody-hover">
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary"
                                >Consulting</span
                              >
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary"
                                >Deals</span
                              >
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary">Tax</span>
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary"
                                >Assurance</span
                              >
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="tags-wrapper">
                              <span class="a-badge a-badge-secondary">BSP</span>
                            </td>
                            <td class="text-left">Approver Name</td>
                            <td class="text-left">Approver Name</td>
                            <td class="actions">
                              <span
                                title="Edit"
                                class="appkiticon icon-pencil-fill"
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="page-container a-bg-white">
                    <div class="left">
                      <p class="mb-0 a-text-grey small">Showing 1 to 3 of 3</p>
                    </div>
                    <div class="right page-controls">
                      <span
                        class="a-disabled appkiticon icon-left-chevron-circle-outline"
                      ></span
                      ><span class="current-page">1</span
                      ><span
                        class="a-disabled appkiticon icon-right-chevron-circle-outline"
                      ></span>
                    </div>
                  </div>
                  <!----><!---->
                </div>
              </div>
            </div>
            <div class="a-tab-target-item" id="elt">
              <div class="row">
                <div class="col-lg-6 col-md-12 m-auto mt-2">
                  <div class="d-flex justify-content-end">
                    <button class="a-btn a-btn-md a-btn-rose">
                      <span class="appkiticon icon-plus-fill me-2"></span> Add
                      ELT member
                    </button>
                  </div>
                  <div class="a-table-wrapper mt-3">
                    <div class="a-table-scroller a-mb-10 table-responsive">
                      <table class="a-table a-md min-w-1024 table sortable">
                        <thead class="a-thead a-bg-dark-grey">
                          <tr>
                            <th>ELT members</th>
                            <th>Designation</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody class="a-tbody list tbody-customize tbody-hover">
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">
                              Territory Assurance Leader
                            </td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">Chairman Emeritus</td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">
                              Digital and Solutions Development Leader
                            </td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">Human Capital Leader</td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">
                              Territory Risk Management Partner
                            </td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">Finance Partner</td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">
                              Vice Chairman and Tax Managing Partner
                            </td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">
                              Deals and Corporate Finance Managing Partner
                            </td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">SRT Partner for Tax</td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">SRT Partner for Deals</td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">
                              Chairman and Senior Partner
                            </td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-left">Partner Name</td>
                            <td class="text-left">Consulting Lead Partner</td>
                            <td class="actions">
                              <span
                                title="Remove"
                                class="appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="page-container a-bg-white">
                    <div class="left">
                      <p class="mb-0 a-text-grey small">
                        Showing 1 to 12 of 12
                      </p>
                    </div>
                    <div class="right page-controls">
                      <span
                        class="a-disabled appkiticon icon-left-chevron-circle-outline"
                      ></span
                      ><span class="current-page">1</span
                      ><span
                        class="a-disabled appkiticon icon-right-chevron-circle-outline"
                      ></span>
                    </div>
                  </div>
                  <!----><!---->
                </div>
              </div>
            </div>
            <div class="a-tab-target-item" id="ea">
              <div class="row">
                <div class="col-lg-8 col-md-12 m-auto mt-2">
                  <div
                    class="a-input-with-icon a-input-md search-client search-assistant"
                  >
                    <input
                      aria-label="Search"
                      class="a-text-input a-input-secondary"
                      placeholder="Search partner's or executive assistant's name"
                    /><span
                      title="Search"
                      class="a-icon appkiticon icon-search-outline"
                    ></span
                    ><!---->
                  </div>
                  <div class="a-table-wrapper mt-4 mb-4">
                    <div class="a-table-scroller table-responsive">
                      <table
                        class="a-table a-table-striped a-md min-w-1024 table sortable"
                      >
                        <thead class="a-thead a-bg-dark-grey">
                          <tr>
                            <th>Partner</th>
                            <th>Executive assistant</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody class="a-tbody list tbody-customize tbody-hover">
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span></span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span class="appkiticon icon-delete-fill"></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td title="Partner Name">Partner Name</td>
                            <td><span>-</span></td>
                            <td class="actions">
                              <span class="appkiticon icon-pencil-fill"></span
                              ><span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="page-container a-bg-white">
                        <div class="left">
                          <p class="mb-0 a-text-grey small">
                            Showing 1 to 15 of 57
                          </p>
                        </div>
                        <div class="right page-controls">
                          <span
                            class="a-disabled appkiticon icon-left-chevron-circle-outline"
                          ></span
                          ><span class="current-page">1</span
                          ><span
                            class="appkiticon icon-right-chevron-circle-outline"
                          ></span>
                        </div>
                      </div>
                      <!----><!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="a-tab-target-item" id="admin">
              <div class="row">
                <div class="col-lg-6 col-md-12 m-auto mt-2">
                  <div class="d-flex justify-content-end">
                    <button class="a-btn a-btn-md a-btn-rose">
                      <span class="appkiticon icon-plus-fill me-2"></span> Add
                      administrator
                    </button>
                  </div>
                  <div class="a-table-wrapper mt-3" id="admin-table">
                    <div class="a-table-scroller a-mb-10 table-responsive">
                      <table class="a-table a-md min-w-1024 table sortable">
                        <thead class="a-thead a-bg-dark-grey">
                          <tr>
                            <th>Employee name</th>
                            <th>Date added</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody class="a-tbody list tbody-customize tbody-hover">
                          <tr>
                            <td class="tags-wrapper">Jeffrey Doe</td>
                            <td class="date">
                              <span class="a-badge a-badge-secondary me-1"
                                >1 January 1970</span
                              >
                            </td>
                            <td
                              title="You cannot remove yourself as administrator"
                              class="actions"
                            >
                              <span
                                class="a-disabled appkiticon icon-delete-fill"
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="page-container a-bg-white">
                    <div class="left">
                      <p class="mb-0 a-text-grey small">Showing 1 of 1</p>
                    </div>
                    <div class="right page-controls">
                      <span
                        class="a-disabled appkiticon icon-left-chevron-circle-outline"
                      ></span
                      ><span class="current-page">1</span
                      ><span
                        class="a-disabled appkiticon icon-right-chevron-circle-outline"
                      ></span>
                    </div>
                  </div>
                  <!----><!---->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!----><!---->
    </div>

    <!-- manage circumstances -->
    <div v-if="isCircumstances" class="components-wrapper">
      <div
        data-v-f0407f8e=""
        class="a-bg-white a-gray-bread a-p-20 d-table w-100"
      >
        <div
          data-v-f0407f8e=""
          aria-label="breadcrumb"
          class="a-breadcrumbs m-0 a-breadcrumb-secondary p-0"
        >
          <div
            data-v-f0407f8e=""
            class="a-bread-item text-decoration-none me-2"
          >
            <a
              data-v-f0407f8e=""
              aria-current="page"
              href="/admin"
              class="router-link-active router-link-exact-active other-link"
              >Admin home</a
            >
          </div>
          <span
            data-v-f0407f8e=""
            class="appkiticon icon-right-chevron-fill smaller me-2"
          ></span>
          <div data-v-f0407f8e="" class="a-bread-item active">
            <!----><!----><span data-v-f0407f8e="">Manage circumstances</span>
          </div>
        </div>
      </div>
      <!----><!---->
      <div data-v-2f29a71c="" class="container-fluid pink-banner">
        <div class="container ms-3 me-3">
          <h5 class="mb-0 a-text-white fw-bold">Manage circumstances</h5>
        </div>
      </div>
      <div
        data-v-2f29a71c=""
        class="container-fluid mt-4 mb-3 a-px-20 admin-container"
      >
        <div data-v-2f29a71c="" class="row a-bg-white m-1">
          <div data-v-2f29a71c="" class="col-lg-12 ms-auto me-auto p-4">
            <div data-v-2f29a71c="" class="d-flex justify-content-between">
              <p data-v-2f29a71c="" class="mb-0 fw-bold">
                Executive Leadership Team
              </p>
              <div data-v-2f29a71c="" class="right">
                <button
                  data-v-2f29a71c=""
                  class="me-2 a-btn a-btn-rose a-btn-md"
                >
                  Add circumstance</button
                ><button
                  data-v-2f29a71c=""
                  class="a-btn a-btn-md a-btn-secondary"
                >
                  <span
                    data-v-2f29a71c=""
                    class="appkiticon icon-plus-fill"
                  ></span>
                  Admin logs
                </button>
              </div>
            </div>
            <div data-v-2f29a71c="" class="a-table-wrapper mt-3">
              <div
                data-v-2f29a71c=""
                class="a-table-scroller a-mb-10 table-responsive"
              >
                <table
                  data-v-2f29a71c=""
                  class="a-table a-md min-w-1024 table sortable"
                  id="circs-table"
                >
                  <thead data-v-2f29a71c="" class="a-thead a-bg-dark-grey">
                    <tr data-v-2f29a71c="">
                      <th data-v-2f29a71c="" rowspan="2" colspan="2">
                        Circumstance
                      </th>
                      <th data-v-2f29a71c="" colspan="3">Risk and Quality</th>
                      <th data-v-2f29a71c="" rowspan="2">Actions</th>
                    </tr>
                    <tr data-v-2f29a71c="">
                      <th data-v-2f29a71c="">
                        Data Privacy Office <br data-v-2f29a71c="" />
                        Approver
                      </th>
                      <th data-v-2f29a71c="">
                        Office of the General Counsel <br data-v-2f29a71c="" />
                        Approver
                      </th>
                      <th data-v-2f29a71c="">
                        Risk Management <br data-v-2f29a71c="" />
                        Approver
                      </th>
                    </tr>
                  </thead>
                  <tbody data-v-2f29a71c="">
                    <tr data-v-2f29a71c="">
                      <td data-v-2f29a71c="" class="tags-wrapper" colspan="2">
                        <p data-v-2f29a71c="" class="mb-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          title="Edit"
                          class="appkiticon icon-pencil-fill"
                        ></span
                        ><span
                          data-v-2f29a71c=""
                          title="Remove"
                          class="appkiticon icon-delete-fill"
                        ></span>
                      </td>
                    </tr>
                    <tr data-v-2f29a71c="">
                      <td data-v-2f29a71c="" class="tags-wrapper" colspan="2">
                        <p data-v-2f29a71c="" class="mb-1">
                          Nam aliquet ultricies elit ut commodo. Curabitur
                          rutrum ultricies consequat. Phasellus a nibh velit.
                          Curabitur sagittis purus feugiat viverra pulvinar.
                        </p>
                      </td>
                      <td data-v-2f29a71c="" class="actions"><!----></td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          title="Edit"
                          class="appkiticon icon-pencil-fill"
                        ></span
                        ><span
                          data-v-2f29a71c=""
                          title="Remove"
                          class="appkiticon icon-delete-fill"
                        ></span>
                      </td>
                    </tr>
                    <tr data-v-2f29a71c="">
                      <td data-v-2f29a71c="" class="tags-wrapper" colspan="2">
                        <p data-v-2f29a71c="" class="mb-1">
                          Aenean erat ligula, facilisis vel sapien id, lacinia
                          tempor elit. Nunc tortor magna, dictum nec metus at,
                          pellentesque auctor leo.
                        </p>
                      </td>
                      <td data-v-2f29a71c="" class="actions"><!----></td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          title="Edit"
                          class="appkiticon icon-pencil-fill"
                        ></span
                        ><span
                          data-v-2f29a71c=""
                          title="Remove"
                          class="appkiticon icon-delete-fill"
                        ></span>
                      </td>
                    </tr>
                    <tr data-v-2f29a71c="">
                      <td data-v-2f29a71c="" class="tags-wrapper" colspan="2">
                        <p data-v-2f29a71c="" class="mb-1">
                          Etiam pulvinar bibendum eros, sed pellentesque diam
                          lobortis in. Nunc interdum odio vel enim hendrerit
                          fermentum. Donec sed erat sed mi consectetur consequat
                          non non lorem.
                        </p>
                      </td>
                      <td data-v-2f29a71c="" class="actions"><!----></td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          class="appkiticon icon-circle-checkmark-fill"
                        ></span>
                      </td>
                      <td data-v-2f29a71c="" class="actions">
                        <span
                          data-v-2f29a71c=""
                          title="Edit"
                          class="appkiticon icon-pencil-fill"
                        ></span
                        ><span
                          data-v-2f29a71c=""
                          title="Remove"
                          class="appkiticon icon-delete-fill"
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div data-v-2f29a71c="" class="page-container a-bg-white">
              <div data-v-2f29a71c="" class="left">
                <p data-v-2f29a71c="" class="mb-0 a-text-grey small">
                  Showing 1 to 4 of 4
                </p>
              </div>
              <div data-v-2f29a71c="" class="right page-controls">
                <span
                  data-v-2f29a71c=""
                  class="a-disabled appkiticon icon-left-chevron-circle-outline"
                ></span
                ><span data-v-2f29a71c="" class="current-page">1</span
                ><span
                  data-v-2f29a71c=""
                  class="a-disabled appkiticon icon-right-chevron-circle-outline"
                ></span>
              </div>
            </div>
            <!----><!---->
          </div>
        </div>
      </div>
    </div>

    <!-- other tools -->
    <div v-if="isOther" data-v-f0407f8e="" class="components-wrapper">
      <div
        data-v-f0407f8e=""
        class="a-bg-white a-gray-bread a-p-20 d-table w-100"
      >
        <div
          data-v-f0407f8e=""
          aria-label="breadcrumb"
          class="a-breadcrumbs m-0 a-breadcrumb-secondary p-0"
        >
          <div
            data-v-f0407f8e=""
            class="a-bread-item text-decoration-none me-2"
          >
            <a
              data-v-f0407f8e=""
              aria-current="page"
              href="/admin"
              class="router-link-active router-link-exact-active other-link"
              >Admin home</a
            >
          </div>
          <span
            data-v-f0407f8e=""
            class="appkiticon icon-right-chevron-fill smaller me-2"
          ></span>
          <div data-v-f0407f8e="" class="a-bread-item active">
            <!----><span data-v-f0407f8e="">Other admin tools</span
            ><!---->
          </div>
        </div>
      </div>
      <!---->
      <div data-v-28d3b7a6="" class="container-fluid pink-banner">
        <div class="container ms-3 me-3">
          <h5 class="mb-0 a-text-white fw-bold">Other admin tools</h5>
        </div>
      </div>
      <div
        data-v-28d3b7a6=""
        class="container-fluid mt-4 mb-3 a-px-20 admin-container"
      >
        <div
          data-v-28d3b7a6=""
          class="a-tab-container a-overflow-visible m-auto pt-0 pb-4 ps-0 pe-0"
        >
          <ul data-v-28d3b7a6="" class="a-tab-fun a-tab">
            <li
              data-v-28d3b7a6=""
              class="a-tab-item active"
              tabindex="0"
              data-target="los"
            >
              Update file size
            </li>
          </ul>
          <div
            data-v-28d3b7a6=""
            class="a-tab-targets a-bg-white pt-3 p-3 pb-4"
          >
            <div data-v-28d3b7a6="" class="a-tab-target-item active" id="tools">
              <div data-v-28d3b7a6="" class="row">
                <div data-v-28d3b7a6="" class="col-lg-6 col-md-12 m-auto mt-5">
                  <p data-v-28d3b7a6="" class="mb-1 small">
                    Current file size limit that can be attached in a request is
                    <b data-v-28d3b7a6="">100MB</b>.
                  </p>
                  <div data-v-28d3b7a6="" class="d-flex">
                    <p data-v-28d3b7a6="" class="mb-2 small fw-bold me-3">
                      Update file size (MB):
                    </p>
                    <div
                      data-v-28d3b7a6=""
                      class="a-input-number-box a-type-one a-input-number-secondary a-stepper-fun"
                    >
                      <div
                        data-v-28d3b7a6=""
                        class="a-input-container mt-3 mb-3"
                        id="file-size"
                      >
                        <input
                          data-v-28d3b7a6=""
                          class="a-text-input a-disabled"
                          type="number"
                          min="25"
                        /><button data-v-28d3b7a6="" class="a-icon a-icon-up">
                          <span
                            data-v-28d3b7a6=""
                            class="appkiticon icon-plus-fill"
                          ></span></button
                        ><button data-v-28d3b7a6="" class="a-icon a-icon-down">
                          <span
                            data-v-28d3b7a6=""
                            class="appkiticon icon-minus-fill"
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div data-v-28d3b7a6="" class="flex-center mt-3">
                    <button
                      data-v-28d3b7a6=""
                      class="a-disabled a-btn a-btn-md a-btn-rose"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AdminView",
  setup() {
    //   refs
    const isAdminHome = ref(true);
    const isUserManagement = ref(false);
    const isCircumstances = ref(false);
    const isOther = ref(false);

    // functions
    const handleUser = () => {
      isAdminHome.value = false;
      isUserManagement.value = true;
    };

    const handleCircumstances = () => {
      isAdminHome.value = false;
      isCircumstances.value = true;
    };

    const handleOtherTools = () => {
      isAdminHome.value = false;
      isOther.value = true;
    };

    // toggle tabs
    const toggleTabs = (event, target) => {
      // toggle tab header
      let tabItems = document.querySelectorAll(".a-tab-item");

      tabItems.forEach((e) => {
        e.classList.remove("active");
      });

      let targetHeader = document.querySelector(`[data-target='${target}']`);
      targetHeader.classList.add("active");

      // toggle tab target
      let mainTabs = document.querySelectorAll(".a-tab-target-item");
      mainTabs.forEach((e) => {
        e.classList.remove("active");
      });

      let targetTab = document.querySelector(`.a-tab-target-item#${target}`);
      targetTab.classList.add("active");
    };

    return {
      //   refs
      isAdminHome,
      isUserManagement,
      isCircumstances,
      isOther,
      // functions
      toggleTabs,
      handleUser,
      handleCircumstances,
      handleOtherTools,
    };
  },
};
</script>

<style></style>
