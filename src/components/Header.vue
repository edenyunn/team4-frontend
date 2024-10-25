<template>
    <header class="header">
      <div class="povlogo-container">
        <RouterLink to="/search">
          <img class="povlogo" src="@/assets/mock-logo.png" alt="POV 로고" />
        </RouterLink>
      </div>
      <button class="sidebar-button" @click="$emit('toggle-sidebar')">
        &#9776;
      </button>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  left: 0;
  right: 0;
  background-color: #222222;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5); /* 하얀 실선 불투명도 조절 */
}
  
  .povlogo-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .povlogo {
    height: 40px;
  }
  
  .sidebar-button {
    font-size: 24px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  </style>
  