<template>
  <div>
    <button
      class="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-250"
      @click="showModal = true"
    >
      Add Board
    </button>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded shadow-md w-full max-w-md text-black">
        <h2 class="text-xl font-bold mb-4">Create a New Board</h2>
        <form @submit.prevent="submitBoard">
          <input
            v-model="boardName"
            type="text"
            placeholder="Enter board name"
            class="w-full px-3 py-2 border rounded mb-4"
            required
          />
          <div class="flex justify-end gap-2">
            <button
              type="button"
              class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              @click="showModal = false"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const apiBase = import.meta.env.VITE_API_BASE;

export default {
  data() {
    return {
      showModal: false,
      boardName: ""
    };
  },
  methods: {
    async submitBoard() {
      try {
        await axios.post(`${apiBase}/api/boards`, {
          name: this.boardName
        });
        this.boardName = "";
        this.showModal = false;
      } catch (error) {
        console.error("Error creating board:", error);
      }
    }
  }
};
</script>
