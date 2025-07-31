<template>
    <div class="w-full h-fit py-5 bg-gray-950 text-white flex justify-between items-center px-20">
        <h1 class="text-2xl font-light">Welcome, User</h1>
        <p class="text-2xl font-light">{{ new Date().toLocaleTimeString() }}</p>
        <p class="text-2xl font-light">{{ new Date().toLocaleDateString() }}</p>
    </div>
</template>