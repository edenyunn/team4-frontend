<template>
  <div class="gallery-container">
    <button
      v-for="(image, name) in images"
      :key="name"
      class="gallery-item"
      @click="openModal(name)"
      @keydown.enter="openModal(name)"
      :aria-label="`Open ${name} modal`"
    >
      <img :src="image" :alt="`${name} logo`" />
    </button>

    <Suspense v-if="isModalOpen">
      <component
        :is="currentModal"
        @close="closeModal"
        v-bind="modalProps"
        role="dialog"
        aria-modal="true"
      />
    </Suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import PovCast1 from '@/assets/PovCast1.png';
import PovCast2 from '@/assets/PovCast2.png';
import PovCast3 from '@/assets/PovCast3.png';

export default {
  name: 'ModalGallery',
  
  data() {
    return {
      isModalOpen: false,
      currentComponent: null,
      modalProps: {},
      images: {
        PovCast1: PovCast1,
        PovCast2: PovCast2,
        PovCast3: PovCast3,
      }
    };
  },

  computed: {
    currentModal() {
      if (!this.currentComponent) return null;
      
      return defineAsyncComponent(() => 
        import(`@/components/${this.currentComponent}.vue`)
      );
    }
  },

  methods: {
    openModal(componentName) {
      this.currentComponent = componentName;
      this.isModalOpen = true;
      // Trap focus within modal when opened
      this.$nextTick(() => {
        const modal = this.$el.querySelector('[role="dialog"]');
        if (modal) modal.focus();
      });
    },

    closeModal() {
      this.isModalOpen = false;
      this.currentComponent = null;
      this.modalProps = {};
    }
  }
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center; /* 세로 중앙 정렬 */
  min-height: 100vh; /* 화면 높이의 100% 사용 */
  padding: 1rem;
  background-color: var(--dark-bg, #1a1a1a);
}

.gallery-item {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
}

.gallery-item:hover,
.gallery-item:focus {
  transform: scale(1.05);
  outline: 2px solid var(--highlight-color, #fff);
  border-radius: 4px;
}

.gallery-item img {
  max-width: 100%;
  height: auto;
}
</style>