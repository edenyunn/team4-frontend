<template>
  <div v-if="isOpen" class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header border-secondary">
          <h1 class="modal-title fs-4">{{ movie?.title || '' }}</h1>
          <button 
            type="button" 
            class="btn-close btn-close-white" 
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <img 
            :src="movie?.imageUrl" 
            :alt="movie?.title" 
            class="modal-image img-fluid mb-3"
          />
          <h5 class="mb-3">{{ movie?.eventYear }}&nbsp;{{ movie?.event }}</h5>
          <p class="movie-description">{{ movie?.summary }}</p>
          <br>
          <div v-html="renderedMarkdown"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';
import { loadMarkdown } from '@/utils/markdownLoader'

export default {
  name: 'MovieModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    movie: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      renderedMarkdown: ''
    };
  },
  async updated () {
    
    const content = await loadMarkdown(this.movie?.id || 1)
    this.renderedMarkdown = content
  },
  
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>


<style scoped>
.modal-image {
  max-width: 40%;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 4px;
}

.modal.show {
  display: block;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal {
  z-index: 1050;
}

.modal-backdrop {
  z-index: 1040;
}

.modal-header {
  padding: 1rem 2rem;
}

.modal-body {
  padding: 2rem;
  overflow-y: auto;
}

.modal-title {
  font-size: 1.5rem;
}

@media (max-width: 576px) {
  .modal-header {
    padding: 1rem;
  }
  
  .modal-body {
    padding: 1rem;
  }
  
  .modal-title {
    font-size: 1.25rem;
  }
}
</style>
