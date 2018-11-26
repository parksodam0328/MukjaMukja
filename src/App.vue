<template>
  <div id="app">
    <google-map />
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap";

export default {
  name: "App",
  components: {
    GoogleMap
  }
};
</script>

<style>
@font-face {
          font-family: 'BMDOHYEON_ttf'; /* 폰트 패밀리 이름 주기*/
          src: url('/src/assets/fonts/BMDOHYEON_ttf.ttf'); /*폰트 파일 주소*/
        }
#app {
  font-family: 'BMDOHYEON_ttf';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
