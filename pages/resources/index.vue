<script setup lang="ts">
const { $client } = useNuxtApp()

const {data: resources = [], pending, error, status} = $client.resources.allResources.useQuery()
console.log(resources)
</script>

<template>
    <template v-if="status === 'pending'">
        <p>cargando...</p>
    </template>
    <template v-else>
        <h1>Recursos...</h1>
        <div v-for="r in resources" :key="r._id">
            <p>{{ r.name }}</p>
        </div>
    </template>
</template>