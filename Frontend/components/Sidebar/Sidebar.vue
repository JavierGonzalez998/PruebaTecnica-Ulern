<script lang="ts" setup>
    import 'primeicons/primeicons.css'
    import { useSessionStore } from '~/stores/session';
    import { logout } from '~/lib/auth/auth';
    const session = useSessionStore();
    const router = useRouter();
    const navBarStatus= useState('counter', () => false);

    const handleLogout = async() => {
        const res = await logout(session.getSession);
        if(res){
            session.logout();
            router.push("/");
        }
    }
    
</script>
<template>
    <section class="h-screen bg-neutral-300 transition-all duration-500 ease-in-out relative" :class="navBarStatus ? 'w-60' : 'w-16'">
        <div class="w-full flex justify-center items-center pt-3">
          <button v-if="navBarStatus === false" @click="navBarStatus = true"><i class="pi pi-bars"/></button>
          <button v-else><i class="pi pi-times" @click="navBarStatus = false"/></button>
        </div>
        <div class="border-t border-gray-400 my-4"></div>
        <section class="flex justify-center items-center">
            <div class="w-full flex justify-center items-center gap-2 cursor-pointer py-3 rounded-md hover:bg-neutral-500 hover:text-white hover:mx-3 transition-all duration-500 ease-in-out" @click="router.push('/user')">
                <i class="pi pi-user"></i>
                <p :class="navBarStatus ? 'inline-block' : 'hidden'">Información de usuario</p>
            </div>
        </section>
        <div class="absolute bottom-0 w-full h-20 px-3">
            <div class="border-t border-gray-400 my-4"></div>
            <div @click="handleLogout()" class="cursor-pointer h-6 rounded-lg bg-red-500 hover:bg-red-700 flex items-center text-white" :class="navBarStatus ? 'justify-around' : 'justify-center'">
                <i class="pi pi-sign-out"></i>
                <p :class="navBarStatus ? 'inline-block' : 'hidden'">Cerrar Sesión</p>
            </div>
        </div>
    </section>
</template>