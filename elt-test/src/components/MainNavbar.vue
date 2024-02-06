<template>
  <div
    class="header-navheader position-fixed a-header d-flex align-items-center justify-content-between a-px-20"
  >
    <div class="d-flex align-items-center">
      <img
        class="main-logo hidden"
        src="/img/logo.da666144.png"
        alt="pwc-logo"
      /><span class="divider a-mx-5 a-bg-white"></span>
      <div class="font-weight-medium a-nowrap">
        <router-link to="/" class="a-text-black helvetica router-link"
          >Engagement Approval Tool</router-link
        >
      </div>
    </div>
    <div class="user-wrapper">
      <div class="link-container">
        <a
          href="/"
          class="router-link-active router-link-exact-active router-link me-0"
          aria-current="page"
          >Home</a
        ><!--v-if-->
      </div>
      <div class="user-details" ref="panel" @click="handleExpandUserDetails">
        <div class="circle-initials me-2"><span>JD</span></div>
        <span
          :class="isExpanded ? 'arrow-up' : 'arrow-down'"
          class="arrow-down appkiticon icon-down-chevron-outline"
        ></span>
        <h6 class="mb-0 hidden">Jeffrey Reyes</h6>
        <div class="user-popup" :class="isExpanded ? 'show' : 'hidden'">
          <div class="top-part p-4 pb-0">
            <div class="circle-initials larger"><span>JR</span></div>
            <p class="user-name a-h5 mb-0">John Doe</p>
          </div>
          <hr />
          <div class="mid-part ps-4 pe-4 mb-3">
            <button class="a-btn a-btn-lg signout-btn">
              <span
                class="appkiticon icon-login-outline a-text-black me-2"
              ></span>
              Sign out
            </button>
          </div>
          <hr />
          <div class="bottom-part ps-4 pe-4 mb-3">
            <a href="/terms" class="a-text-grey"
              ><span class="small a-text-grey">Privacy policy</span
              ><span class="a-text-gray ms-2 me-2">•</span
              ><span class="small a-text-grey">Terms and conditions</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

export default {
  name: "Navbar",
  setup() {
    let panel = ref(null);
    let isExpanded = ref(false);

    const hidePanel = () => {
      console.log("toggle pannel");
      isExpanded.value = false;
    };

    const handleExpandUserDetails = () => {
      isExpanded.value = true;
    };

    onClickOutside(panel, () => hidePanel());

    return {
      panel,
      isExpanded,
      handleExpandUserDetails,
    };
  },
};
</script>

<style>
.helvetica {
  font-family: PwC Helvetica Neue, sans-serif;
}

.header-navheader {
  top: 0;
  z-index: 3;
  background-color: #fff;
}

.user-wrapper {
  width: 200px;
  display: flex;
  align-items: center;
}

.header-navheader .a-disabled {
  pointer-events: none;
}

.link-container {
  margin-left: auto;
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid #7d7d7d;
}

.link-container a {
  color: #2d2d2d;
}

.link-container a.router-link-active {
  color: #d93954;
  font-weight: bold;
}

.link-container a.a-disabled {
  pointer-events: none;
  cursor: pointer;
}

.user-details {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.circle-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 22px;
  background-color: #d93954;
  padding: 5px;
}

.circle-initials.larger {
  font-size: 20px;
  width: 50px;
  height: 50px;
  border-radius: 60px;
  margin: 1rem auto;
}

.user-name {
  text-align: center;
}

.user-popup {
  display: none;
  top: 35px;
  position: absolute;
  width: 300px;
  right: -10px;
  border-radius: 4px;
  background-color: #fff;
  z-index: 18;
  border: 1px solid #dedede;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.15);
}

.user-popup.show {
  display: block;
}

.user-popup .top-part {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: context-menu;
}

.user-popup .mid-part {
  display: flex;
  justify-content: center;
}

.user-popup .signout-btn {
  background-color: #fff;
  border: 1px solid #dedede;
}

.user-popup .bottom-part {
  display: flex;
  justify-content: center;
}

.user-details .arrow-down {
  transition: all 0.3s ease;
}

.user-details .arrow-up {
  transform: rotate(180deg);
  transition: all 0.3s ease;
}

.a-text-black {
  color: #2d2d2d;
}
</style>
