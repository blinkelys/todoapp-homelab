<template>
    <div class="w-64 h-full bg-gray-800 text-white p-5 flex flex-col">
        <div class="flex-grow">
            <h2 class="text-xl font-semibold mb-4">Boards</h2>
            <ul>
              <li v-for="board in boards" :key="board.orderId" class="mb-2">
                <a href="#" class="hover:underline">{{ board.name }}</a>
              </li>
            </ul>
        </div>
        <div class="flex-shrink-0">
            <addBoard />
        </div>
    </div>
</template>

<script>
import addBoard from '../utility/addBoard.vue';
import axios from 'axios';
const apiBase = import.meta.env.VITE_API_BASE;

export default {
  components: {
    addBoard
  },
  data() {
    return {
      boards: [

      ]
    }
  },
  async created() {
    await this.fetchBoards();
  },
  methods: {
    async fetchBoards() {
      try {
        const response = await axios.get(`${apiBase}/api/boards`);
        this.boards = response.data;
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    }
  }
}
</script>