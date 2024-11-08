<template>
  <div v-if="isSidebarOpen" class="sidebar">
    <button class="close-sidebar" @click="$emit('toggle-sidebar')">X 닫기</button>
    <div class="sidebar-menu">
      <RouterLink
        to="/search"
        class="menu-item"
        @mouseover="setSubtitle('search')"
        @mouseleave="clearSubtitle"
      >
        Search
        <div v-if="subtitle === 'search'" class="subtitle">Search for historical data</div>
      </RouterLink>
      <RouterLink
        to="/movies"
        class="menu-item"
        @mouseover="setSubtitle('movies')"
        @mouseleave="clearSubtitle"
      >
        Timeline
        <div v-if="subtitle === 'movies'" class="subtitle">Explore historical timelines</div>
      </RouterLink>
      <RouterLink
        to="/inside"
        class="menu-item"
        @mouseover="setSubtitle('inside')"
        @mouseleave="clearSubtitle"
      >
        Inside
        <div v-if="subtitle === 'inside'" class="subtitle">Discover behind-the-scenes insights</div>
      </RouterLink>
      <RouterLink
        to="/cast"
        class="menu-item"
        @mouseover="setSubtitle('cast')"
        @mouseleave="clearSubtitle"
      >
        Cast
        <div v-if="subtitle === 'cast'" class="subtitle">Meet the cast and crew</div>
      </RouterLink>
      <RouterLink
        to="/original"
        class="menu-item"
        @mouseover="setSubtitle('original')"
        @mouseleave="clearSubtitle"
      >
        Original
        <div v-if="subtitle === 'original'" class="subtitle">Exclusive original content</div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSidebarOpen: Boolean,
  },
  data() {
    return {
      subtitle: '', // 현재 마우스가 위치한 메뉴의 id
    };
  },
  methods: {
    setSubtitle(id) {
      this.subtitle = id;
    },
    clearSubtitle() {
      this.subtitle = '';
    },
  },
};
</script>

<style scoped>
/* 사이드바 스타일을 여기에 작성 */
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  z-index: 100;
  transition: transform 0.3s ease;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  padding-left: 20px;
  color: white;
  text-decoration: none;
  margin: 8px 0;
  position: relative;
}

.menu-item:hover {
  text-decoration: underline;
}

/* 각 메뉴 아이템에 대한 소제목 스타일 */
.subtitle {
  color: #bbb;
  font-size: 12px;
  position: absolute;
  top: 100%;
  left: 20px;
  margin-top: 2px;
  white-space: nowrap;
  transition: opacity 0.3s;
}

.close-sidebar {
  background: none;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
}
</style>
