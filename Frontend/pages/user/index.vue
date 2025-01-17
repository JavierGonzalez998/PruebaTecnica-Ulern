<script lang="ts" setup>
import Sidebar from '~/components/Sidebar/Sidebar.vue';
import { useSessionStore } from '~/stores/session';
import { getUserData } from '~/lib/user/user';
import profile from '~/assets/images/profile.png'
const session = useSessionStore()
const { data } = await useAsyncData(() => getUserData(session.getSession))

definePageMeta({
  middleware: 'auth'
})

</script>
<template>
    <main class="flex">
        <Sidebar />
        <div v-if="data.user" class="w-[90vw] pt-5">
            <h2 class="text-center font-medium text-2xl">Información de usuario</h2>
            <section class="flex flex-col justify-around items-center mt-10">
                <section class="flex flex-col justify-center items-center">
                    <div class="w-36 h-36 rounded-full bg-blue-500">
                        <img :src="profile" class="w-full h-full object-cover" />
                    </div>
                    <h5 class="text-xl font-semibold">{{data.user.name}} {{ data.user.lastname}}</h5>
                </section>
                <p>Email: {{data.user.email}}</p>
                <p>Teléfono: {{ data.user.phone }}</p>
                <p>Cuenta creada en: {{ new Date(data.user.created_at).toLocaleString('es-CL',  {day: "numeric", month:"long", year: "numeric"}) }}</p>
            </section>
        </div>
        <div v-else class="w-[90vw] pt-5">
            <h2 class="text-2xl font-semibold">Cargando información</h2>
        </div>
    </main>
</template>