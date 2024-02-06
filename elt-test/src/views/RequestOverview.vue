<template>
  <div class="wrapper">
    <div class="a-bg-white a-gray-bread a-p-20 d-table w-100">
      <div
        aria-label="breadcrumb"
        class="a-breadcrumbs m-0 a-breadcrumb-secondary p-0"
      >
        <div class="a-bread-item text-decoration-none me-2">
          <a href="/" class="other-link">Home</a>
        </div>
        <span class="appkiticon icon-right-chevron-fill smaller me-2"></span>
        <div class="a-bread-item active"><span>Request overview</span></div>
      </div>
    </div>

    <div class="container-fluid overview-banner">
      <div class="container ms-3 me-3">
        <div class="padded-header"><p>Request overview</p></div>
      </div>
    </div>

    <div v-if="isApproved" class="container-fluid approval-flow mt-3">
      <div class="row">
        <div class="col-12">
          <div class="card request-status won">
            <p class="small pt-2 pb-2 mb-0 a-text-white">
              Request has been tagged as won.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isDisapproved" class="container-fluid approval-flow mt-3">
      <div class="row">
        <div class="col-12">
          <div class="card request-status withdrawn">
            <p class="small pt-2 pb-2 mb-0 a-text-white">
              <span class="appkiticon icon-close-fill a-text-red"></span>
              Request has been disapproved.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="!isApproved && !isDisapproved"
      class="container-fluid a-bg-light-grey p-3 ps-4 pe-4 request-buttons"
    >
      <div class="left">
        <p class="mb-0 fw-bold me-2">
          Target date of proposal: <span>10 October 2023</span>
        </p>
        <span class="small me-auto">116 day/s overdue</span>
      </div>
      <div class="right">
        <button
          v-if="!hideApprovalBtns"
          @click="handleApprove()"
          title="Approve request"
          class="me-2 a-btn a-btn-green a-btn-md"
        >
          Approve request
        </button>
        <button
          v-if="!hideApprovalBtns"
          @click="handleDisapprove()"
          title="Disapprove request"
          class="me-2 a-btn a-btn-rose a-btn-md"
        >
          Disapprove request
        </button>
      </div>
    </div>

    <ApprovalFlow />

    <div class="container-fluid mt-4 mb-3 a-px-20">
      <div class="row ps-4 pe-4">
        <div class="col-lg-4 col-md-12 mb-3">
          <div class="card p-4 request-details">
            <div class="d-flex justify-content-between align-items-center">
              <p class="fw-bold mb-0">Request details</p>
            </div>
            <hr />
            <!----><!---->
            <p class="small fw-bold mb-2">Circumstance/s</p>
            <ol class="mb-3">
              <li class="small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </li>
              <li class="small">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </li>
              <li class="small">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
              <li class="small">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </li>
            </ol>
            <p class="small fw-bold mb-2">Brief description of the change/s</p>
            <div class="changes-wrapper">
              <p class="small">test brief description</p>
            </div>
            <hr />
            <div class="row mb-4">
              <div class="col-md-6 col-sm-12">
                <p class="small fw-bold mb-2">Client/Account name</p>
                <p class="smaller mb-2">Sample</p>
              </div>
              <div class="col-md-6 col-sm-12">
                <p class="small fw-bold mb-2">Party Reference ID (PRID)</p>
                <p class="smaller mb-2">11810223123</p>
              </div>
            </div>
            <button
              @click="isRequestDetails = true"
              class="a-btn a-btn-rose a-btn-lg"
            >
              View more
            </button>
          </div>
          <div class="mt-3 file-cabinet card p-4">
            <p class="fw-bold mb-0">File cabinet</p>
            <hr />
            <!---->
            <div class="files-wrapper">
              <p class="small fw-bold mb-2">Engagement letter</p>
              <div
                class="cabinet-item mb-3"
                title="pwc-ph-tax-calendar-2024.pdf"
              >
                <img
                  class="file-icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABsCAYAAAAfdS4CAAAABHNCSVQICAgIfAhkiAAABPhJREFUeF7tnctPE1EUxpm2jFhfJIaohURUcEHCwriSaCikvFS2+j/4IPHJQhcaE2NQUSMsdOvGuCVKArVRg5HEP8C4UEOMLtSVIr768LuTAaGl2Nv260w7h6RhAvd+58xvPs69M3OZMaqyfEUikVbDMPrx2YsmzalUqgHbNdnau/DnAxMTE7edzMtID97Z2Vnv9/uHAfKQk4kVI3YymTwRjUZvFkMrH40lcHt6epqQ0FOADeUj5sY++Is7Njk5OepEbgtw4dgdgUDgBZKocyIRcsyTKBE3yDEy5C244XC41jTNl9hsKnUCJYxXcsAW3K6urhGUgqMl3FFHQpW6RBi9vb2NqLPvHNlbZ4KWzMEGXDsI115xZj+diVoqBxvd3d0x7GKHM7tZeFSAugdz7NEdL9DvFGYRw4VnkF1BOfc1ktvJDMLUBqQhlLVhzM2n8gBMnaYpuF8AdyMTAFNbwYUDBzFH3wLIz7Ev23Tiof8g+g/p9Mm1rYL7DQmtzbWDC9tdxRz2rMpLnV1irq4c3KiTJwCfBuDrOn1yaVtRcN0GuOLguglwRcJ1C+CKhesGwAruLAa0NbkUaJe2WRjQlsvPyUGu4uE66WBPwHUKsGfgFgIYfS9gLn1Rtyx6Cu4iwNPYbtCEdQ2Az+j08RxcG/BW+0yOClhdFfuOgEGdI+KytivOFrLlilkEHbBn4ZbCwZ6GywbsebhMwALXLsqMGqxmC3M4/V3tskFKJ528BrQsp8pFHeQEbhrlYjpY4C5j4XwB447GCO5oHJ+XFLhZCpANWJ3JbdapUYsBC9wVyNnr59Q9ubwAl/1sYf7ur467dNraKz+nMOhv0umHvCLKuT/KbFFz+j4WbbawwqmyWgGq6+B+gZujHfMoEQI3R7ZWM03AAlcHribg/koY0O5j8LijC6nA9s0+n+/ufzQsuD/RaFWBwaR7JgGBS3SFwBW4RAJEaXEuG+4vBDCJQbwqbTlX4HIOv8DlcLVUBa7AJRIgSotzqXBxPfc3rudWE4N4Vdq6KiZwOYdf4HK42rMFcS4NrziXhlbNc+HcPxjQAsQgXpUWuMQjL3AFLpEAUVqcK3CJBIjS1rWFOAL4iUG8Ki1wiUde4ApcIgGitDiXDTeBAD5iEK9KW84VuJzDL3A5XO3rueJcGl5xLg2tvW5Bai6HsHXhJomL5RlP3efE85SqwCUeboErcIkEiNLiXCpczHNTxABelrbmuQKXYwGBy+H67/RXnMshLM7lcBXnErlWVeG1CgdlQCMhFrgksEpW4ApcIgGitDhX4BIJEKXFuQKXSIAoLc4VuEQCRGlxrsAlEiBKi3MFLpEAUVqcy4ZbAS+bIyIqSLpdLWd6g9VM2wuSkc4ZBMC0WcF9iI39wqd4BPBU1Fk8dX+duhNxBLKjxZMWJcB9ALiHjb6+vrp4PD5T5m85cdURxUyhIxqNPrGWjsK95/HtkqsyLNNk4NpHcO0Blb4FNxwOB6qrq6Nwb3uZ7pMr0gbYj2C4C69T/LQAV22gPKxHeVDvQ2h1Rabll8RnlIN2lINX86kvWVEeiUQ24Fncj/HL3eW3b45m/B7G3BeLxWYWZ5GxXL+lpcUMhUIDcPA5fGodTdnlwVEG1PPeb+EFHZfHx8e/pqeb9X8hUIdrTNNsQ4c2iKiTjHp8vP7gePXPOR9gureJRGI6GAw+Gxsbm8vmgb9mt6C2dnEJwwAAAABJRU5ErkJggg=="
                />
                <div class="file-info">
                  <p class="mb-0 fw-bold smaller file-name">sample_file.pdf</p>
                  <p class="mb-0 a-text-grey smaller">3271 KB</p>
                </div>
                <span class="file-date smaller">24 January 2024</span>
              </div>
            </div>
            <div class="files-wrapper">
              <p class="small fw-bold mb-2">Terms of business</p>
              <div class="cabinet-item mb-3" title="sample_file.pdf">
                <img
                  class="file-icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABsCAYAAAAfdS4CAAAABHNCSVQICAgIfAhkiAAABPhJREFUeF7tnctPE1EUxpm2jFhfJIaohURUcEHCwriSaCikvFS2+j/4IPHJQhcaE2NQUSMsdOvGuCVKArVRg5HEP8C4UEOMLtSVIr768LuTAaGl2Nv260w7h6RhAvd+58xvPs69M3OZMaqyfEUikVbDMPrx2YsmzalUqgHbNdnau/DnAxMTE7edzMtID97Z2Vnv9/uHAfKQk4kVI3YymTwRjUZvFkMrH40lcHt6epqQ0FOADeUj5sY++Is7Njk5OepEbgtw4dgdgUDgBZKocyIRcsyTKBE3yDEy5C244XC41jTNl9hsKnUCJYxXcsAW3K6urhGUgqMl3FFHQpW6RBi9vb2NqLPvHNlbZ4KWzMEGXDsI115xZj+diVoqBxvd3d0x7GKHM7tZeFSAugdz7NEdL9DvFGYRw4VnkF1BOfc1ktvJDMLUBqQhlLVhzM2n8gBMnaYpuF8AdyMTAFNbwYUDBzFH3wLIz7Ev23Tiof8g+g/p9Mm1rYL7DQmtzbWDC9tdxRz2rMpLnV1irq4c3KiTJwCfBuDrOn1yaVtRcN0GuOLguglwRcJ1C+CKhesGwAruLAa0NbkUaJe2WRjQlsvPyUGu4uE66WBPwHUKsGfgFgIYfS9gLn1Rtyx6Cu4iwNPYbtCEdQ2Az+j08RxcG/BW+0yOClhdFfuOgEGdI+KytivOFrLlilkEHbBn4ZbCwZ6GywbsebhMwALXLsqMGqxmC3M4/V3tskFKJ528BrQsp8pFHeQEbhrlYjpY4C5j4XwB447GCO5oHJ+XFLhZCpANWJ3JbdapUYsBC9wVyNnr59Q9ubwAl/1sYf7ur467dNraKz+nMOhv0umHvCLKuT/KbFFz+j4WbbawwqmyWgGq6+B+gZujHfMoEQI3R7ZWM03AAlcHribg/koY0O5j8LijC6nA9s0+n+/ufzQsuD/RaFWBwaR7JgGBS3SFwBW4RAJEaXEuG+4vBDCJQbwqbTlX4HIOv8DlcLVUBa7AJRIgSotzqXBxPfc3rudWE4N4Vdq6KiZwOYdf4HK42rMFcS4NrziXhlbNc+HcPxjQAsQgXpUWuMQjL3AFLpEAUVqcK3CJBIjS1rWFOAL4iUG8Ki1wiUde4ApcIgGitDiXDTeBAD5iEK9KW84VuJzDL3A5XO3rueJcGl5xLg2tvW5Bai6HsHXhJomL5RlP3efE85SqwCUeboErcIkEiNLiXCpczHNTxABelrbmuQKXYwGBy+H67/RXnMshLM7lcBXnErlWVeG1CgdlQCMhFrgksEpW4ApcIgGitDhX4BIJEKXFuQKXSIAoLc4VuEQCRGlxrsAlEiBKi3MFLpEAUVqcy4ZbAS+bIyIqSLpdLWd6g9VM2wuSkc4ZBMC0WcF9iI39wqd4BPBU1Fk8dX+duhNxBLKjxZMWJcB9ALiHjb6+vrp4PD5T5m85cdURxUyhIxqNPrGWjsK95/HtkqsyLNNk4NpHcO0Blb4FNxwOB6qrq6Nwb3uZ7pMr0gbYj2C4C69T/LQAV22gPKxHeVDvQ2h1Rabll8RnlIN2lINX86kvWVEeiUQ24Fncj/HL3eW3b45m/B7G3BeLxWYWZ5GxXL+lpcUMhUIDcPA5fGodTdnlwVEG1PPeb+EFHZfHx8e/pqeb9X8hUIdrTNNsQ4c2iKiTjHp8vP7gePXPOR9gureJRGI6GAw+Gxsbm8vmgb9mt6C2dnEJwwAAAABJRU5ErkJggg=="
                />
                <div class="file-info">
                  <p class="mb-0 fw-bold smaller file-name">sample_file.pdf</p>
                  <p class="mb-0 a-text-grey smaller">3271 KB</p>
                </div>
                <span class="file-date smaller">24 January 2024</span>
              </div>
            </div>
            <!----><!----><button
              @click="isFileCabinetModal = true"
              class="a-btn a-btn-rose a-btn-lg"
            >
              View more
            </button>
          </div>
        </div>
        <div class="col-lg-8 col-md-12 main-stage">
          <!---->
          <div class="a-accordion a-accordion-fun mb-3 engagement-stage">
            <div
              aria-expanded="false"
              class="a-accordion-title p-4 a-show"
              role="button"
              tabindex="0"
            >
              <div class="d-flex">
                <p class="fw-bold mb-0">Engagement team review</p>
                <span class="appkiticon expanded-icon icon-plus-fill"></span>
              </div>
            </div>
            <div
              class="a-accordion-content pt-3 text-start a-bg-white a-bordered-grey"
              style="display: block"
            >
              <div class="p-4 pt-0">
                <div class="row">
                  <div class="col-md-3 col-sm-6">
                    <p class="small fw-bold mb-1">Approver</p>
                    <p class="smaller mb-3">Jake Doe</p>
                  </div>
                  <div class="col-md-9 col-sm-6">
                    <p class="small fw-bold mb-1">Date</p>
                    <p class="smaller mb-3">
                      <span>-</span
                      ><!---->
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 col-sm-6">
                    <p class="small fw-bold mb-1">Line of Service</p>
                    <p class="smaller mb-3">Tax</p>
                  </div>
                  <div class="col-md-9 col-sm-6">
                    <p class="small fw-bold mb-1">Remarks</p>
                    <p class="smaller mb-3">
                      <span>-</span
                      ><!---->
                    </p>
                  </div>
                  <div class="col-md-12">
                    <p class="small fw-bold mb-1">Status</p>
                    <p class="smaller fw-bold a-text-rose mb-3">
                      <span class="appkiticon icon-time-fill"></span
                      ><span>Pending approval</span
                      ><!----><!---->
                    </p>
                    <p class="small fw-bold mb-1">Days outstanding</p>
                    <p class="smaller mb-3">158 day(s)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="scroll-top">
            <span
              @click="scrollToTop"
              class="appkiticon icon-arrow-up-fill"
            ></span>
          </div>

          <div v-if="!isApproved" class="card card-disabled p-4 mb-3 mt-3">
            <p class="fw-bold small mb-0">
              LoS Risk Management review
              <span
                class="appkiticon icon-lockclosed-locked-fill a-font-24 ms-auto"
              ></span>
            </p>
          </div>
          <div v-else class="a-accordion a-accordion-fun mb-3 los-stage">
            <div
              aria-expanded="false"
              class="a-accordion-title p-4"
              role="button"
              tabindex="0"
            >
              <div class="d-flex">
                <p class="fw-bold mb-0">LoS Risk Management review</p>
                <span class="appkiticon expanded-icon icon-minus-fill"></span>
              </div>
            </div>
            <div
              class="a-accordion-content text-start a-bg-white"
              style="display: block"
            >
              <div class="p-0">
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12 p-2p35">
                    <div class="row">
                      <div class="col-5">
                        <p class="small fw-bold mb-1">Reviewer</p>
                        <p class="smaller mb-3">
                          <span>Reviewer Name</span>
                        </p>
                        <p class="small fw-bold mb-1">Line of service</p>
                        <p class="smaller mb-3"><span>LoS Name</span></p>
                        <p class="small fw-bold mb-1">Status</p>
                        <p class="smaller fw-bold a-text-rose mb-3">
                          <span class="a-text-rose"><span>Reviewed</span></span>
                        </p>
                        <p class="small fw-bold mb-1">Days outstanding</p>
                        <p class="smaller mb-3"><span>0 day(s)</span></p>
                      </div>
                      <div class="col-7">
                        <p class="small fw-bold mb-1">Date</p>
                        <p class="smaller mb-3">
                          <span>21 September 2023</span>
                        </p>
                        <p class="small fw-bold mb-1">Remarks</p>
                        <p class="smaller mb-3"><span>-</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 p-2p35">
                    <div class="row">
                      <div class="col-5">
                        <p class="small fw-bold mb-1">Approver</p>
                        <div><p class="smaller mb-2">Robby Bass</p></div>
                        <p class="small fw-bold mb-1">Line of service</p>
                        <p class="smaller mb-3">LoS Name</p>
                        <p class="small fw-bold mb-1">Status</p>
                        <p class="smaller fw-bold a-text-rose mb-3">
                          <span class="a-text-rose"><span>Approved</span></span>
                        </p>
                        <p class="small fw-bold mb-1">Days outstanding</p>
                        <p class="smaller mb-3"><span>0 day(s) </span></p>
                      </div>
                      <div class="col-7 pe-0">
                        <p class="small fw-bold mb-1 flex-wrapper">
                          Date
                          <!---->
                        </p>
                        <p class="smaller mb-3">
                          <span>21 September 2023</span>
                        </p>
                        <p class="small fw-bold mb-1">Remarks</p>
                        <p class="smaller mb-3">a</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="!isApproved"
            class="card card-disabled risk-disabled p-4 mb-3 mt-3"
          >
            <p class="fw-bold small mb-0">Risk and Quality</p>
            <div class="sub-badges ms-2">
              <span class="a-badge a-badge-light smaller me-1 mb-1"
                >Office of the General Counsel</span
              ><span class="a-badge a-badge-light smaller me-1"
                >Risk Management</span
              ><span class="a-badge a-badge-light smaller"
                >Data Privacy Office</span
              >
            </div>
            <span
              class="appkiticon icon-lockclosed-locked-fill a-font-24 ms-auto"
            ></span>
          </div>
          <div v-else class="a-accordion a-accordion-fun mb-3 risk-stage">
            <div
              aria-expanded="false"
              class="a-accordion-title p-4 a-show"
              role="button"
              tabindex="0"
            >
              <p class="fw-bold mb-0">Risk and Quality review</p>
              <div class="sub-badges">
                <span class="a-badge a-badge-light smaller"
                  >Office of the General Counsel</span
                ><span class="a-badge a-badge-light smaller"
                  >Risk Management</span
                ><span class="a-badge a-badge-light smaller"
                  >Data Privacy Office</span
                >
              </div>
              <span class="appkiticon expanded-icon icon-plus-fill"></span>
            </div>
            <div
              class="a-accordion-content text-start a-bg-white p-0"
              style="display: block"
            >
              <div class="sub-heading">
                <p class="fw-bold mb-0">Office of the General Counsel</p>
              </div>
              <div class="p-0 mb-0">
                <div class="row m-0">
                  <div
                    class="col-lg-6 col-md-12 col-sm-12 pt-4 pb-4 ps-2r pe-2r bordered-left"
                  >
                    <div class="row">
                      <div class="col-5">
                        <p class="small fw-bold mb-1">Reviewer</p>
                        <p class="smaller mb-3">
                          <span>Reviewer Name</span>
                        </p>
                        <p class="small fw-bold mb-1">Line of service</p>
                        <p class="smaller mb-3"><span>LoS Name</span></p>
                        <p class="small fw-bold mb-1">Status</p>
                        <p class="smaller fw-bold a-text-rose mb-3">
                          <span class="a-text-rose"><span>Reviewed</span></span>
                        </p>
                        <p class="small fw-bold mb-1">Days outstanding</p>
                        <span class="small">0 day(s) </span>
                      </div>
                      <div class="col-7">
                        <p class="small fw-bold mb-1 flex-wrapper">Date</p>
                        <p class="smaller mb-3">
                          <span>21 September 2023</span>
                        </p>
                        <p class="small fw-bold mb-1">Remarks</p>
                        <p class="smaller mb-3">a</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-12 col-sm-12 pt-4 pb-4 ps-2r pe-2r bordered-right"
                  >
                    <div class="row">
                      <div class="col-5">
                        <p class="small fw-bold mb-1">Approver</p>
                        <p class="smaller mb-3"><span>Approver Name</span></p>
                        <p class="small fw-bold mb-1">Line of service</p>
                        <p class="smaller mb-3"><span>LoS Name</span></p>
                        <p class="small fw-bold mb-1">Status</p>
                        <p class="smaller fw-bold a-text-rose mb-3">
                          <span class="a-text-rose"><span>Approved</span></span>
                        </p>
                        <p class="small fw-bold mb-1">Days outstanding</p>
                        <span class="small">0 day(s)</span>
                      </div>
                      <div class="col-7">
                        <p class="small fw-bold mb-1 flex-wrapper">
                          Date
                          <!---->
                        </p>
                        <p class="smaller mb-3">
                          <span>21 September 2023</span>
                        </p>
                        <p class="small fw-bold mb-1">Remarks</p>
                        <p class="smaller mb-3">a</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sub-heading">
                <p class="fw-bold mb-0">Risk Management</p>
              </div>
              <div class="p-0 mb-0">
                <div class="row m-0">
                  <div
                    class="col-lg-6 col-md-12 col-sm-12 pt-3 pb-3 ps-2r pe-2r bordered-left"
                  >
                    <div class="row">
                      <div class="col-5">
                        <p class="small fw-bold mb-1">Reviewer</p>
                        <p class="smaller mb-3">
                          <span>Reviewer Name</span>
                        </p>
                        <p class="small fw-bold mb-1">Line of service</p>
                        <p class="smaller mb-3"><span>LoS Name</span></p>
                        <p class="small fw-bold mb-1">Status</p>
                        <p class="smaller fw-bold a-text-rose mb-3">
                          <span class="a-text-rose"><span>Reviewed</span></span>
                        </p>
                        <p class="small fw-bold mb-1">Days outstanding</p>
                        <span class="small">0 day(s) </span>
                      </div>
                      <div class="col-7">
                        <p class="small fw-bold mb-1 flex-wrapper">Dates</p>
                        <p class="smaller mb-3">
                          <span>21 September 2023</span>
                        </p>
                        <p class="small fw-bold mb-1">Remarks</p>
                        <p class="smaller mb-3">a</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-12 col-sm-12 pt-3 pb-3 ps-2r pe-2r bordered-right"
                  >
                    <div class="row">
                      <div class="col-5">
                        <p class="small fw-bold mb-1">Approver</p>
                        <p class="smaller mb-3">
                          <span>Approver Name</span>
                        </p>
                        <p class="small fw-bold mb-1">Line of service</p>
                        <p class="smaller mb-3"><span>LoS Name</span></p>
                        <p class="small fw-bold mb-1">Status</p>
                        <p class="smaller fw-bold a-text-rose mb-3">
                          <span class="a-text-rose"><span>Approved</span></span>
                        </p>
                        <p class="small fw-bold mb-1">Days outstanding</p>
                        <span class="small">0 day(s)</span>
                      </div>
                      <div class="col-7">
                        <p class="small fw-bold mb-1 flex-wrapper">
                          Date
                          <!---->
                        </p>
                        <p class="smaller mb-3">
                          <span>21 September 2023</span>
                        </p>
                        <p class="small fw-bold mb-1">Remarks</p>
                        <p class="smaller mb-3">a</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sub-heading">
                <p class="fw-bold mb-0">Data Privacy Office</p>
              </div>
              <div class="p-0 mb-0">
                <div class="row m-0">
                  <div
                    class="col-lg-6 col-md-12 col-sm-12 pt-3 pb-3 ps-2r pe-2r bordered-left border-curved-left bordered-bottom"
                  >
                    <div class="row">
                      <div class="col-5">
                        <p class="small fw-bold mb-1">Reviewer</p>
                        <p class="smaller mb-3">
                          <span>Reviewer Name</span>
                        </p>
                        <p class="small fw-bold mb-1">Line of service</p>
                        <p class="smaller mb-3">
                          <span>LoS Name</span>
                        </p>
                        <p class="small fw-bold mb-1">Status</p>
                        <p class="smaller fw-bold a-text-rose mb-3">
                          <span class="a-text-rose"><span>Reviewed</span></span>
                        </p>
                        <p class="small fw-bold mb-1">Days outstanding</p>
                        <span class="small">0 day(s) </span>
                      </div>
                      <div class="col-7">
                        <p class="small fw-bold mb-1 flex-wrapper">Dates</p>
                        <p class="smaller mb-3">
                          <span>21 September 2023</span>
                        </p>
                        <p class="small fw-bold mb-1">Remarks</p>
                        <p class="smaller mb-3">-</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-6 col-md-12 col-sm-12 pt-3 pb-3 ps-2r pe-2r bordered-right border-curved-right bordered-bottom"
                  >
                    <div class="row">
                      <div class="col-5">
                        <p class="small fw-bold mb-1">Approver</p>
                        <p class="smaller mb-3"><span>Approver Name</span></p>
                        <p class="small fw-bold mb-1">Line of service</p>
                        <p class="smaller mb-3"><span>LoS Name</span></p>
                        <p class="small fw-bold mb-1">Status</p>
                        <p class="smaller fw-bold a-text-rose mb-3">
                          <span class="a-text-rose"><span>Approved</span></span>
                        </p>
                        <p class="small fw-bold mb-1">Days outstanding</p>
                        <span class="small">0 day(s)</span>
                      </div>
                      <div class="col-7">
                        <p class="small fw-bold mb-1 flex-wrapper">
                          Date
                          <!---->
                        </p>
                        <p class="smaller mb-3">
                          <span>21 September 2023</span>
                        </p>
                        <p class="small fw-bold mb-1">Remarks</p>
                        <p class="smaller mb-3">a</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!isApproved" class="card card-disabled p-4 mb-3 mt-3">
            <p class="fw-bold small mb-0">
              Executive Leadership Team review
              <span
                class="appkiticon icon-lockclosed-locked-fill a-font-24 ms-auto"
              ></span>
            </p>
          </div>
          <div
            v-else
            class="a-accordion-content text-start a-bg-white p-0"
            style="display: block"
          >
            <div class="p-0">
              <div class="flex-container row p-0 m-0">
                <div class="elt-wrapper col-md-6 p-4">
                  <div class="row m-0">
                    <div class="col-6">
                      <p class="small fw-bold mb-1">Finance Partner</p>
                      <p class="smaller mb-3">Partner Name</p>
                      <p class="small fw-bold mb-2">Status</p>
                      <p class="smaller fw-bold a-text-rose mb-3">
                        <!----><!----><span>Approved</span
                        ><!---->
                      </p>
                      <p class="small fw-bold mb-1">Days outstanding</p>
                      <p class="smaller mb-2">0 day(s)</p>
                    </div>
                    <div class="col-6">
                      <p class="small fw-bold mb-1">Date and time</p>
                      <p class="smaller mb-3"><span>21 September 2023</span></p>
                      <p class="small fw-bold mb-2">Remarks</p>
                      <p class="smaller mb-2">a</p>
                    </div>
                  </div>
                </div>
                <div class="elt-wrapper col-md-6 p-4">
                  <div class="row m-0">
                    <div class="col-6">
                      <p class="small fw-bold mb-1">Consulting Lead Partner</p>
                      <p class="smaller mb-3">Partner Name</p>
                      <p class="small fw-bold mb-2">Status</p>
                      <p class="smaller fw-bold a-text-rose mb-3">
                        <!----><!----><span>Approved</span
                        ><!---->
                      </p>
                      <p class="small fw-bold mb-1">Days outstanding</p>
                      <p class="smaller mb-2">0 day(s)</p>
                    </div>
                    <div class="col-6">
                      <p class="small fw-bold mb-1">Date and time</p>
                      <p class="smaller mb-3"><span>21 September 2023</span></p>
                      <p class="small fw-bold mb-2">Remarks</p>
                      <p class="smaller mb-2">a</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DiscussionBoard />
        </div>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <Teleport to="#modal">
    <Transition name="modal">
      <div class="modal-bg" v-if="isRequestDetails">
        <div ref="modal" class="modal" id="request-modal">
          <!-- Header -->
          <div class="modal-header ps-4 pe-4 pt-4">
            <h6 class="a-h4 mb-3 fw-bold">Request details</h6>
          </div>

          <!-- Body -->
          <div class="modal-body ps-4 pe-4 pt-2 pb-2">
            <!---->
            <p class="small fw-bold mb-2">Circumstance/s</p>
            <p class="small mb-2">Executive Leadership Team</p>
            <ol class="mb-3">
              <li class="small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                facere quod perferendis corporis sed alias quibusdam
                necessitatibus optio dolorem velit, est tempore fuga esse ut
                consequuntur, repellendus unde eius enim.
              </li>
              <li class="small">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                facere quod perferendis corporis sed alias quibusdam
                necessitatibus optio dolorem velit, est tempore fuga esse ut
                consequuntur, repellendus unde eius enim.
              </li>
            </ol>
            <hr />
            <p class="small fw-bold mb-2">Scope of service</p>
            <div class="scope-wrapper"><p>text</p></div>
            <hr />
            <p class="small fw-bold mb-2">Brief description of the change/s</p>
            <div class="description-wrapper"><p>text</p></div>
            <hr />
            <p class="small fw-bold mb-2">Risk/s involved</p>
            <div class="risks-wrapper"><p>text</p></div>
            <hr />
            <p class="small fw-bold mb-2">
              Steps/safeguards to be put in place
            </p>
            <div class="steps-wrapper"><p>text</p></div>
            <hr />
            <div class="row">
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Requestor name</p>
                <p class="smaller mb-3">Jeff Doe</p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Request ID</p>
                <p class="smaller mb-3">4</p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Date submitted</p>
                <p class="smaller mb-3">21 September 2023</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Requestor's Line of Service</p>
                <p class="smaller mb-3">LoS Name</p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Requestor's group</p>
                <p class="smaller mb-3">DTS</p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Total days outstanding</p>
                <p class="smaller a-text-pink mb-3">0 day(s)</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Last updated on</p>
                <p class="smaller mb-3 a-text-rose">21 September 2023</p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Client/Account name</p>
                <p class="smaller mb-3">Sample Client</p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Party Reference ID (PRID)</p>
                <p class="smaller mb-3">1061239497</p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Project name</p>
                <p class="smaller mb-3">Jones</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Project amount</p>
                <p class="smaller mb-3">
                  <span class="me-2">PHP</span><span>560,000</span>
                </p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Engagement manager</p>
                <p class="smaller mb-3">Manager Name</p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Engagement partner</p>
                <p class="smaller mb-3">Parter Name</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Expected engagement period</p>
                <p class="smaller a-text-rose mb-3">
                  <span class="padded-text">29 September 2023</span> -
                  <span class="padded-text">7 October 2023</span>
                </p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">Target date of proposal</p>
                <p class="smaller mb-3">26 September 2023</p>
              </div>
              <div class="col-md-4 col sm-12">
                <p class="small fw-bold mb-2">
                  Line of service risk management
                </p>
                <!----><!----><!---->
                <p class="smaller mb-3">LoS Name</p>
                <!---->
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col sm-12">
                <!---->
                <p class="small fw-bold mb-2">Actual date of proposal</p>
                <p class="smaller a-text-rose mb-3">
                  <span class="padded-text">5 September 2023</span>
                </p>
              </div>
            </div>
          </div>
          <!-- Footer -->
          <div class="modal-footer justify-content-center">
            <button
              @click="isRequestDetails = false"
              class="me-1 a-btn a-btn-grey a-btn-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <Teleport to="#modal">
    <Transition name="modal">
      <div class="modal-bg" v-if="isFileCabinetModal">
        <div ref="modal" class="modal" id="files-modal">
          <!-- Header -->
          <div class="modal-header ps-4 pe-4 pt-4">
            <div class="left">
              <h6 class="a-h4 mb-1 fw-bold">File cabinet</h6>
              <p class="mb-0 a-text-grey smaller">0 files</p>
            </div>
            <div class="right hidden">
              <button
                @click="handleFileHistory"
                class="me-2 a-btn a-btn-rose a-btn-md"
              >
                Version history
              </button>
              <button class="a-btn a-btn-rose a-btn-md">
                <span class="appkiticon icon-upload-outline"></span>
                Upload file
              </button>
            </div>
          </div>

          <!-- Body -->
          <div class="modal-body ps-4 pe-4 pt-2 pb-2">
            <div class="a-table-wrapper mt-3">
              <div class="a-table-scroller table-responsive">
                <table
                  class="a-table a-table-striped a-md min-w-1024 table sortable"
                >
                  <thead class="a-thead">
                    <tr>
                      <th>File name</th>
                      <th>Date uploaded</th>
                      <th>Uploaded by</th>
                    </tr>
                  </thead>
                </table>
                <table
                  class="a-table a-table-striped a-md min-w-1024 table sortable"
                >
                  <div class="overflow-wrapper">
                    <tbody class="a-tbody list tbody-customize tbody-hover">
                      <p class="small a-text-grey fw-bold mb-0 ps-2 mt-2">
                        Engagement letter
                      </p>
                      <!---->
                      <p class="small a-text-grey fw-bold mb-0 ps-2 mt-2">
                        Terms of business
                      </p>
                      <!---->
                      <p class="small a-text-grey fw-bold mb-0 ps-2 mt-2">
                        Data sharing agreement
                      </p>
                      <!---->
                      <p
                        class="small a-text-grey fw-bold mb-0 ps-2 mt-2 others-text"
                      >
                        Other files
                      </p>
                    </tbody>
                    <!---->
                  </div>
                </table>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="modal-footer justify-content-center">
            <button
              @click="isFileCabinetModal = false"
              class="me-1 a-btn a-btn-grey a-btn-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
// components
import ApprovalFlow from "@/components/ApprovalFlow.vue";
import DiscussionBoard from "@/components/DiscussionBoard.vue";
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "RequestOverview",
  components: { ApprovalFlow, DiscussionBoard },
  setup() {
    const isFileCabinetModal = ref(false);
    const isApproved = ref(false);
    const isDisapproved = ref(false);
    const isRequestDetails = ref(false);
    const hideApprovalBtns = ref(false);

    const handleApprove = () => {
      console.log("approve");

      setTimeout(() => {
        let ongoing = document.querySelectorAll(".arrow-steps .ongoing");
        let pending = document.querySelectorAll(".arrow-steps .pending");

        ongoing.forEach((e) => {
          e.classList.remove("ongoing");
          e.classList.add("approved");
        });

        pending.forEach((e) => {
          e.classList.remove("pending");
          e.classList.add("approved");
        });

        hideApprovalBtns.value = true;
        isApproved.value = true;
      }, 600);
    };

    const handleDisapprove = () => {
      setTimeout(() => {
        let ongoing = document.querySelectorAll(".arrow-steps .ongoing");

        ongoing.forEach((e) => {
          e.classList.remove("ongoing");
          e.classList.add("disapproved");
        });

        hideApprovalBtns.value = true;
        isDisapproved.value = true;
        isApproved.value = false;
      }, 600);
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      let button = document.querySelector(".scroll-top");

      if (button != null) {
        if (window.scrollY <= 200) {
          button.classList.add("hidden");
        } else {
          button.classList.remove("hidden");
        }
      }
    };

    return {
      handleApprove,
      handleDisapprove,
      hideApprovalBtns,
      isApproved,
      isDisapproved,
      isRequestDetails,
      isFileCabinetModal,
      scrollToTop,
    };
  },
};
</script>

<style>
.scroll-top {
  position: fixed;
  z-index: 2;
  right: 2%;
  bottom: 10%;
  width: 35px;
  height: 35px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: #464646;
  border-radius: 33px;
}
.scroll-top span {
  color: #fff;
}
.scroll-top.hidden {
  display: none;
}
</style>
