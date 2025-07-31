<template>
    <div class="w-64 h-full bg-gray-800 text-white p-5 flex flex-col">
        <div class="flex-grow">
            <h2 class="text-xl font-semibold mb-4">Boards</h2>
            <ul>
              <li v-for="board in boards" :key="board.id" class="mb-2">
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

export default {
  components: {
    addBoard
  },
  data() {
    return {
      boards: [
        { id: 1, name: 'Board 1' },
        { id: 2, name: 'Board 2' },
        { id: 3, name: 'Board 3' }
      ]
    }
  }
}
</script>