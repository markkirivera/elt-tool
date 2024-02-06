<template>
  <div class="container-fluid main-banner">
    <div class="container ms-3 me-3">
      <div class="padded-header">
        <p>Engagement Approval Tool</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerImageSigned",
};
</script>

<style>
.padded-header {
  width: fit-content;
  background-color: #2d2d2d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
}
.padded-header p {
  color: #fff;
  margin: 0;
  font-size: 26px;
  font-family: Georgia;
}
</style>
