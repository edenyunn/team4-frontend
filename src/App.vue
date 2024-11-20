<template>
  <!-- 헤더 컴포넌트 사용 -->
  <Header :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <!-- 사이드바 컴포넌트 사용 -->
  <Sidebar :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <RouterView />
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Header,
    Sidebar, // 불러온 컴포넌트를 등록합니다.
  },
  data() {
    return {
      isSidebarOpen: false, // 사이드바 열림 여부
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // 사이드바 열림/닫힘 토글
    },
  },
};
</script>

<style>
/* 여기에 추가 */
html,
body {
  margin: 0;
  padding: 0;
  background-color: #222222;
  min-height: 100vh;
  width: 100%;
}

#app {
  background-color: #222222;
  min-height: 100vh;
  width: 100%;
}

@font-face {
  font-family: "Pretendard-SemiBold";
  src: url("@/assets/fonts/Pretendard-Bold.otf") format("opentype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Raleway-Bold";
  src: url("@/assets/fonts/Raleway-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Raleway-SemiBold";
  src: url("@/assets/fonts/Raleway-SemiBold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-Medium";
  src: url("@/assets/fonts/Pretendard-Medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "BlackHanSans-Regular";
  src: url("@/assets/fonts/BlackHanSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "NotoSansKR-VariableFont_wght";
  src: url("@/assets/fonts/NotoSansKR-VariableFont_wght.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "ClimateCrisis";
  src: url("@/assets/fonts/ClimateCrisisKRVF.ttf") format("truetype");
  font-weight: 1 1000; /* 가변 폰트의 가중치 범위 */
  font-stretch: 50% 200%; /* 폭 설정 가능 */
  font-display: swap;
}

/* BookkMyungjo 폰트 추가 */
@font-face {
  font-family: "BookkMyungjo_Light";
  src: url("@/assets/fonts/BookkMyungjo_Light.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
</style>