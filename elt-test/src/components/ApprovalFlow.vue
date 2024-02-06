<template>
  <div
    data-v-4374eab2=""
    class="container-fluid mt-4 mb-3 me-4 approval-flow has-dpo"
  >
    <div data-v-4374eab2="" class="row">
      <div data-v-4374eab2="" class="col-12">
        <div data-v-4374eab2="" class="card a-bg-white p-4">
          <div data-v-4374eab2="" class="d-flex justify-content-between mb-3">
            <p data-v-4374eab2="" class="fw-bold mb-0">Approval stage</p>
            <button
              @click="handleApprovalFlow()"
              data-v-4374eab2=""
              class="me-1 a-btn a-btn-rose a-btn-md"
            >
              Approval flow
            </button>
          </div>
          <div data-v-4374eab2="" class="arrow-steps d-flex clearfix">
            <div data-v-4374eab2="" class="ongoing col-md-2 step">
              <span data-v-4374eab2=""
                ><a data-v-4374eab2="" href="#"
                  ><span
                    data-v-4374eab2=""
                    class="appkiticon icon-time-fill"
                  ></span>
                  Engagement Team review
                </a></span
              >
            </div>
            <div data-v-4374eab2="" class="pending col-md-2 step">
              <span data-v-4374eab2=""
                ><a data-v-4374eab2="" href="#"
                  ><span
                    data-v-4374eab2=""
                    class="appkiticon icon-time-fill"
                  ></span>
                  LoS Risk Management review</a
                ></span
              >
            </div>
            <div data-v-4374eab2="" class="pending col-md-5 rq step relative">
              <div data-v-4374eab2="" class="wrapper">
                <div data-v-4374eab2="" class="status sub-step">
                  <p data-v-4374eab2="" class="mb-0">
                    <span
                      data-v-4374eab2=""
                      class="appkiticon icon-time-fill"
                    ></span>
                    Data Privacy Office
                  </p>
                </div>
                <div data-v-4374eab2="" class="status sub-step pe-0">
                  <p data-v-4374eab2="" class="mb-0">
                    <span
                      data-v-4374eab2=""
                      class="appkiticon icon-time-fill"
                    ></span>
                    Office of the General Counsel
                  </p>
                </div>
                <div data-v-4374eab2="" class="status sub-step">
                  <p data-v-4374eab2="" class="mb-0">
                    <span
                      data-v-4374eab2=""
                      class="appkiticon icon-time-fill"
                    ></span>
                    Risk Management
                  </p>
                </div>
              </div>
              <span data-v-4374eab2=""
                ><a data-v-4374eab2="" href="#"> Risk and Quality</a></span
              >
            </div>
            <div data-v-4374eab2="" class="pending col-md-2 step">
              <span data-v-4374eab2=""
                ><a data-v-4374eab2="" href="#"
                  ><span
                    data-v-4374eab2=""
                    class="appkiticon icon-time-fill"
                  ></span>
                  Executive Leadership Team review</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "ApprovalFlow",
  setup() {
    const handleApprovalFlow = () => {
      router.push("/approvalflow");
    };

    return { handleApprovalFlow };
  },
};
</script>

<style scoped>
.icon-close-fill {
  font-size: 10px;
}

.arrow-steps .step.rq {
  align-items: start;
  padding-top: 5px;
}

.arrow-steps .step {
  height: 65px;
  font-size: 14px;
  text-align: center;
  color: #777;
  cursor: default;
  margin: 0 8px 0 -2px;
  padding: 10px 15px 12px 1rem;
  /* width: 16.6%; */
  float: left;
  position: relative;
  background-color: #ddd;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.arrow-steps .step:after {
  right: -14px;
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
}

.arrow-steps .step:last-child {
  width: 24%;
  padding-left: 2rem;
}

.arrow-steps .step a {
  color: #000;
  /* font-weight: 600; */
  text-decoration: none;
  cursor: unset;
}

.arrow-steps .step.approved {
  background-color: #22992e;
}

.arrow-steps .step.approved::after {
  border-left-color: #22992e;
}

.arrow-steps .step.approved a {
  color: #fff;
}

.arrow-steps .step.disapproved {
  background-color: #e0301e;
}

.arrow-steps .step.disapproved::after {
  border-left-color: #e0301e;
}

.arrow-steps .step.disapproved a {
  color: #fff;
}

.arrow-steps .step.ongoing {
  background-color: #eb8c00;
}

.arrow-steps .step.ongoing::after {
  border-left-color: #eb8c00;
}

.arrow-steps .step.ongoing a {
  color: #000;
}

.arrow-steps .step.pending {
}

.arrow-steps .step.pending::after {
}

.arrow-steps .step.pending a {
}

.arrow-steps .step:after,
.arrow-steps .step:before {
  content: "";
  position: absolute;
  top: 0;
  right: -14px;
  width: 0;
  height: 0;
  border-top: 32px solid transparent;
  border-bottom: 32px solid transparent;
  border-left: 18px solid #ddd;
  z-index: 1;
}

.arrow-steps .step:before {
  right: auto;
  left: 0;
  border-left: 17px solid #fff;
  z-index: 0;
}

.arrow-steps .step:first-child:before {
  border: none;
}

.arrow-steps .step:last-child:after {
  border: none;
}

.arrow-steps .step:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.arrow-steps .step:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.arrow-steps .step span {
  position: relative;
}

.relative {
  position: relative;
}

.wrapper {
  width: 95%;
  position: absolute;
  background-color: #fff;
  height: 52%;
  border-radius: 4px;
  bottom: -3%;
  left: 4%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.sub-step {
  display: flex;
  width: 32%;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  height: 88%;
  position: relative;
  border-radius: 4px;
}

.pending .sub-step {
  background-color: #ddd;
}

.ongoing .sub-step {
  background-color: #eb8c00;
}

.approved .sub-step {
  background-color: #22992e;
}

.disapproved .sub-step {
  background-color: #e0301e;
}

.ongoing.sub-step {
  background-color: #eb8c00;
}

.approved.sub-step {
  background-color: #22992e;
}

.approved.sub-step p,
.approved.sub-step span {
  color: #fff;
}

.disapproved.sub-step {
  background-color: #e0301e;
}

.no-dpo .sub-step {
  width: 49%;
}

.sub-step p {
  color: #000;
  font-size: 12px;
}

.rq.approved .sub-step p,
.rq.approved .sub-step span,
.rq.disapproved .sub-step p,
.rq.disapproved .sub-step span {
  color: #fff;
}

.sub-step span {
  color: #000;
  font-size: 0.7rem;
  margin-right: 8px;
}

.sub-step:after,
.sub-step:before {
  content: "";
  position: absolute;
  top: 0;
  right: -10px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 10px solid #ddd;
  z-index: 1;
}

.sub-step:after {
  right: -8px;
}

.sub-step:before {
  right: auto;
  left: 0;
  border-left: 10px solid #fff;
  z-index: 0;
}

.sub-step:before::after {
  border-left-color: #fff;
}

.ongoing .sub-step:after {
  border-left-color: #eb8c00;
}

.approved .sub-step:before,
.approved .sub-step:after {
  border-left-color: #22992e;
}

.disapproved .sub-step:before,
.disapproved .sub-step:after {
  border-left-color: #e0301e;
}

.sub-step:first-child::before,
.sub-step:last-child::after {
  border: none;
}

.approved.sub-step::after {
  border-left-color: #22992e;
}

.disapproved.sub-step::after {
  border-left-color: #e0301e;
}

.disapproved .sub-step::before {
  border-left-color: #fff;
}

.approved .sub-step::before {
  border-left-color: #fff;
}

.pending .ongoing.sub-step {
  background-color: #ddd;
}

@media only screen and (max-width: 1200px) and (min-width: 1000px) {
  .arrow-steps .step:after,
  .arrow-steps .step:before {
    border-top: 32px solid transparent;
    border-bottom: 31px solid transparent;
  }
}

@media only screen and (max-width: 1001px) {
  .clearfix {
    flex-wrap: wrap;
  }
  .arrow-steps .step {
    margin-right: 10px;
  }
  .arrow-steps .step:after,
  .arrow-steps .step:before {
    border-top: 18px solid transparent;
    border-bottom: 24px solid transparent;
  }
  .arrow-steps .col-12:nth-child(4),
  .arrow-steps .col-12:nth-child(5),
  .arrow-steps .col-12:nth-child(6) {
    margin-top: 6px;
  }
}

@media only screen and (max-width: 1001px) {
  .arrow-steps .col-12 {
    margin-top: 6px;
  }
}

@media only screen and (max-width: 1000px) {
  .approval-flow .col-md-2 {
    width: 48.25%;
    align-items: center;
  }
  .arrow-steps .step:after,
  .arrow-steps .step::before {
    right: -14px;
    border-top: 33px solid transparent;
    border-bottom: 33px solid transparent;
  }
  .approval-flow .col-md-5 {
    width: 97%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .sub-step p {
    font-size: 13px;
  }
  .approval-flow .step:last-child {
    width: 98%;
  }
}

@media only screen and (max-width: 871px) {
  .arrow-steps .step.rq {
    align-items: start;
    padding-top: 5px;
    height: 85px;
  }
  .arrow-steps .step.rq::before {
    border-top: 42px solid transparent;
    border-bottom: 42px solid transparent;
  }
  .arrow-steps .step.rq::after {
    right: -15px;
    border-top: 43px solid transparent;
    border-bottom: 43px solid transparent;
  }
  .arrow-steps .sub-step::after {
    border-top: 20px solid transparent;
    border-bottom: 19px solid transparent;
  }
  .arrow-steps .sub-step:before {
    right: -10px;
    border-top: 20px solid transparent;
    border-bottom: 19px solid transparent;
  }
}

@media only screen and (max-width: 590px) {
  .approval-flow .col-md-2 {
    width: 47%;
  }
}
</style>
