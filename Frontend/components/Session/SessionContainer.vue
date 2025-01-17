<script lang="ts" setup>
    import LoginForm from './Login/LoginForm.vue';
    import RegisterForm from './Register/RegisterForm.vue';
    const isRegister = useState('counter', () => false)
</script>

<template>
    <div class="shadow-lg rounded-md bg-neutral-300 p-10">
        <div class="mt-3 w-full flex justify-center items-center gap-3">
            <p>Inicio de sesión</p>
            <label class="relative inline-block w-14 h-8">
                <input type="checkbox" @click="isRegister=!isRegister" class="opacity-0 w-0 h-0">
                <span class="slider round"></span>
            </label>
            <p>Registro de usuario</p>
        </div>
        <div v-if="!isRegister" class="mt-3">
            <h3 class="text-center font-medium">Inicio de Sesión</h3>
            <LoginForm/>
        </div>
        <div v-else class="mt-3">
            <h3 class="text-center font-medium">Registro de usuario</h3>
            <RegisterForm/>
        </div>
    </div>
</template>

<style scoped>
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
