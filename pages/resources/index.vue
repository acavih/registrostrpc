<script setup lang="ts">
const { $client } = useNuxtApp()

const {data: resources = [], status, refresh} = $client.resources.allResources.useQuery()
console.log(resources)
</script>

<template>
    <template v-if="status === 'pending'">
        <p>cargando...</p>
    </template>
    <template v-else>
        <h1>Recursos...</h1>
        <VBtn @click="refresh" color="primary">Recargar</VBtn>
        <VList>
            <VListItem v-for="r in resources" :key="r.id">
                <VListItemTitle>
                    {{ r.name }}
                </VListItemTitle>
            </VListItem>
        </VList>
    </template>
</template>