<template>
  <div class="approval-flow-wrapper">
    <div
      data-v-487f158a=""
      class="a-bg-white a-gray-bread a-p-20 d-table w-100"
    >
      <div
        data-v-487f158a=""
        aria-label="breadcrumb"
        class="a-breadcrumbs m-0 a-breadcrumb-secondary p-0"
      >
        <div
          @click="handleOverview()"
          data-v-487f158a=""
          class="a-bread-item text-decoration-none me-2"
        >
          <span data-v-487f158a="" class="other-link">Request overview</span>
        </div>
        <span
          data-v-487f158a=""
          class="appkiticon icon-right-chevron-fill smaller me-2"
        ></span>
        <div data-v-487f158a="" class="a-bread-item active">
          <span data-v-487f158a="">Approval flow</span>
        </div>
      </div>
    </div>
    <div data-v-487f158a="" class="container-fluid pink-banner">
      <div class="container ms-3 me-3">
        <h5 class="mb-0 a-text-white fw-bold">Approval Flow</h5>
      </div>
    </div>
    <div data-v-487f158a="" class="container-fluid mt-4 mb-3 a-px-20">
      <div data-v-487f158a="" class="col-wrapper">
        <div data-v-487f158a="" class="left-clicker"></div>
        <div data-v-487f158a="" class="column et pt-15">
          <div data-v-487f158a="" class="stage-wrapper">
            <p data-v-487f158a="" class="small fw-bold mb-3">Engagement Team</p>
            <div data-v-487f158a="" class="d-flex">
              <div data-v-487f158a="" class="approval-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Requestor
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Requestor</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <p
                    data-v-487f158a=""
                    class="smaller a-text-green fw-bold mb-2"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span>
                    Requested
                  </p>
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                </div>
              </div>
              <div data-v-487f158a="" class="arrow-container">
                <span
                  data-v-487f158a=""
                  class="appkiticon icon-right-chevron-fill a-text-rose"
                ></span>
              </div>
              <div data-v-487f158a="" class="approval-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Approver Name
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Approver</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <div data-v-487f158a="">
                    <p
                      data-v-487f158a=""
                      class="smaller a-text-green fw-bold mb-2"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text"
                        >Approved</span
                      >
                    </p>
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-487f158a="" class="arrow-right">
          <span
            data-v-487f158a=""
            class="appkiticon a-text-rose icon-right-chevron-fill a-font-24"
          ></span>
        </div>
        <div data-v-487f158a="" class="column mt-15">
          <div data-v-487f158a="" class="stage-wrapper">
            <p data-v-487f158a="" class="small fw-bold mb-3">
              Line of Service Risk Management
            </p>
            <div data-v-487f158a="" class="d-flex">
              <div data-v-487f158a="" class="approval-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Reviewer Name
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Reviewer</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <div data-v-487f158a="">
                    <p
                      data-v-487f158a=""
                      class="smaller a-text-green fw-bold mb-2"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text"
                        >Reviewed</span
                      >
                    </p>
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-487f158a="" class="arrow-container">
                <span
                  data-v-487f158a=""
                  class="appkiticon icon-right-chevron-fill a-text-rose"
                ></span>
              </div>
              <div data-v-487f158a="" class="approval-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Approver Name
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Approver</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <div data-v-487f158a="">
                    <p
                      data-v-487f158a=""
                      class="smaller a-text-green fw-bold mb-2"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text"
                        >Approved</span
                      >
                    </p>
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-487f158a="" class="arrow-right">
          <span
            data-v-487f158a=""
            class="appkiticon a-text-rose icon-right-chevron-fill a-font-24"
          ></span>
        </div>
        <div data-v-487f158a="" class="column rq">
          <div data-v-487f158a="" class="solid-border">
            <div data-v-487f158a="" class="mb-5 stage-wrapper">
              <p data-v-487f158a="" class="small fw-bold mb-3">
                Office of the General Counsel
              </p>
              <div data-v-487f158a="" class="d-flex">
                <div data-v-487f158a="" class="approval-stage">
                  <div data-v-487f158a="" class="top ps-3 pe-3">
                    <!---->
                    <p data-v-487f158a="" class="smaller fw-bold mb-2">
                      Reviewer Name
                    </p>
                    <p data-v-487f158a="" class="smaller mb-1">Reviewer</p>
                  </div>
                  <hr data-v-487f158a="" />
                  <div data-v-487f158a="" class="bottom ps-3 pe-3">
                    <p
                      data-v-487f158a=""
                      class="smaller a-text-green fw-bold mb-1"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text">
                        Reviewed</span
                      >
                    </p>
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                  </div>
                </div>
                <div data-v-487f158a="" class="arrow-container">
                  <span
                    data-v-487f158a=""
                    class="appkiticon icon-right-chevron-fill a-text-rose"
                  ></span>
                </div>
                <div data-v-487f158a="" class="approval-stage">
                  <div data-v-487f158a="" class="top ps-3 pe-3">
                    <p data-v-487f158a="" class="smaller fw-bold mb-2">
                      <span data-v-487f158a="">Approver Name</span>
                    </p>
                    <p data-v-487f158a="" class="smaller mb-2">Approver</p>
                  </div>
                  <hr data-v-487f158a="" />
                  <div data-v-487f158a="" class="bottom ps-3 pe-3">
                    <!---->
                    <p
                      data-v-487f158a=""
                      class="smaller stage-approved fw-bold mb-2 a-text-green"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text"
                        >Approved</span
                      >
                    </p>
                    <!---->
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div data-v-487f158a="" class="mb-5 stage-wrapper">
              <p data-v-487f158a="" class="small fw-bold mb-3">
                Risk Management
              </p>
              <div data-v-487f158a="" class="d-flex">
                <div data-v-487f158a="" class="approval-stage">
                  <div data-v-487f158a="" class="top ps-3 pe-3">
                    <p data-v-487f158a="" class="smaller fw-bold mb-2">
                      Reviewer Name
                    </p>
                    <p data-v-487f158a="" class="smaller mb-1">Reviewer</p>
                  </div>
                  <hr data-v-487f158a="" />
                  <div data-v-487f158a="" class="bottom ps-3 pe-3">
                    <p
                      data-v-487f158a=""
                      class="smaller a-text-green fw-bold mb-1"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text">
                        Reviewed</span
                      >
                    </p>
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                  </div>
                </div>
                <div data-v-487f158a="" class="arrow-container">
                  <span
                    data-v-487f158a=""
                    class="appkiticon icon-right-chevron-fill a-text-rose"
                  ></span>
                </div>
                <div data-v-487f158a="" class="approval-stage">
                  <div data-v-487f158a="" class="top ps-3 pe-3">
                    <p data-v-487f158a="" class="smaller fw-bold mb-2">
                      <span data-v-487f158a="">Approver Name</span>
                    </p>
                    <p data-v-487f158a="" class="smaller mb-2">Approver</p>
                  </div>
                  <hr data-v-487f158a="" />
                  <div data-v-487f158a="" class="bottom ps-3 pe-3">
                    <!---->
                    <p
                      data-v-487f158a=""
                      class="smaller stage-approved fw-bold mb-2 a-text-green"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text"
                        >Approved</span
                      >
                    </p>
                    <!---->
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div data-v-487f158a="" class="mb-5 stage-wrapper mb-2">
              <p data-v-487f158a="" class="small fw-bold mb-3">
                Data Privacy Office
              </p>
              <div data-v-487f158a="" class="d-flex">
                <div data-v-487f158a="" class="approval-stage">
                  <div data-v-487f158a="" class="top ps-3 pe-3">
                    <p data-v-487f158a="" class="smaller fw-bold mb-2">
                      Reviewer Name
                    </p>
                    <p data-v-487f158a="" class="smaller mb-1">Reviewer</p>
                  </div>
                  <hr data-v-487f158a="" />
                  <div data-v-487f158a="" class="bottom ps-3 pe-3">
                    <p
                      data-v-487f158a=""
                      class="smaller a-text-green fw-bold mb-1"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text">
                        Reviewed</span
                      >
                    </p>
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                  </div>
                </div>
                <div data-v-487f158a="" class="arrow-container">
                  <span
                    data-v-487f158a=""
                    class="appkiticon icon-right-chevron-fill a-text-rose"
                  ></span>
                </div>
                <div data-v-487f158a="" class="approval-stage">
                  <div data-v-487f158a="" class="top ps-3 pe-3">
                    <p data-v-487f158a="" class="smaller fw-bold mb-2">
                      <span data-v-487f158a="">Approver Name</span>
                    </p>
                    <p data-v-487f158a="" class="smaller mb-2">Approver</p>
                  </div>
                  <hr data-v-487f158a="" />
                  <div data-v-487f158a="" class="bottom ps-3 pe-3">
                    <!---->
                    <p
                      data-v-487f158a=""
                      class="smaller stage-approved fw-bold mb-2 a-text-green"
                    >
                      <span
                        data-v-487f158a=""
                        class="appkiticon appkiticon icon-circle-checkmark-fill"
                      ></span
                      ><span data-v-487f158a="" class="padded-text"
                        >Approved</span
                      >
                    </p>
                    <!---->
                    <div data-v-487f158a="" class="a-badge a-badge-secondary">
                      21 September 2023
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-487f158a="" class="arrow-right">
          <span
            data-v-487f158a=""
            class="appkiticon a-text-rose icon-right-chevron-fill a-font-24"
          ></span>
        </div>
        <div data-v-487f158a="" class="column elt">
          <div data-v-487f158a="" class="stage-wrapper">
            <p data-v-487f158a="" class="small fw-bold mb-3">
              Executive Leadership Team
            </p>
            <div data-v-487f158a="" class="elt-wrapper mb-5">
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Finance Partner
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Consulting Lead Partner
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Chairman Emeritus
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Digital and Solutions Development Leader
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Chairman and Senior Partner
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Territory Assurance Leader
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Human Capital Leader
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Territory Risk Management Partner
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Vice Chairman and Tax Managing Partner
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
              <div data-v-487f158a="" class="elt-stage">
                <div data-v-487f158a="" class="top ps-3 pe-3">
                  <p data-v-487f158a="" class="smaller fw-bold mb-2">
                    Deals and Corporate Finance Managing Partner
                  </p>
                  <p data-v-487f158a="" class="smaller mb-2">Partner Name</p>
                </div>
                <hr data-v-487f158a="" />
                <div data-v-487f158a="" class="bottom ps-3 pe-3">
                  <!---->
                  <p
                    data-v-487f158a=""
                    class="smaller stage-approved fw-bold mb-2 a-text-green"
                  >
                    <span
                      data-v-487f158a=""
                      class="appkiticon icon-circle-checkmark-fill"
                    ></span
                    ><span data-v-487f158a="" class="padded-text">
                      Approved
                    </span>
                  </p>
                  <!---->
                  <div data-v-487f158a="" class="a-badge a-badge-secondary">
                    21 September 2023
                  </div>
                  <!---->
                </div>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div data-v-487f158a="" class="right-clicker"></div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "ApprovalView",
  setup() {
    const handleOverview = () => {
      router.push("/overview");
    };

    return { handleOverview };
  },
};
</script>

<style scoped>
.elt-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  min-width: 500px;
}

.elt-wrapper .elt-stage {
  text-align: left;
  background-color: rgb(255, 255, 255);
  padding: 1rem 0px;
  border-radius: 4px;
  border-width: 3px 1px 1px;
  border-style: solid;
  border-color: rgb(217, 57, 84) rgb(222, 222, 222) rgb(222, 222, 222);
  border-image: initial;
  border-top: 3px solid rgb(217, 57, 84);
}

.col-wrapper {
  position: relative;
}

.left-clicker {
  width: 10rem;
  height: 45%;
  position: fixed;
  left: 0px;
  /* background-color: #e91e6324; */
  cursor: pointer;
  z-index: 2;
  top: 13rem;
}

.right-clicker {
  width: 10rem;
  height: 45%;
  position: fixed;
  right: 0;
  /* background-color: #e91e6324; */
  cursor: pointer;
  z-index: 2;
  top: 13rem;
}

.mt-11 {
  margin-top: 11rem;
}

/* media query */
@media only screen and (max-width: 1024px) {
  .mt-11 {
    margin-top: 0;
  }
}
</style>
