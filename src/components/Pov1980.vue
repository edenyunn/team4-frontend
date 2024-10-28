<template>
    <div class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pov1979 Modal</h5>
            <button type="button" class="close" @click="$emit('close')" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>This is a test modal for Pov1979. Content goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Pov1979",
  };
  </script>
  
  <style scoped>
  .modal {
    display: block; /* Ensures the modal is visible for testing */
    background: rgba(0, 0, 0, 0.5); /* Optional backdrop effect */
  }
  </style>
  