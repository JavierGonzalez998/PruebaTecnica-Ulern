<script lang="ts" setup>
import { ref } from 'vue';
import * as yup from 'yup';
import { login } from '~/lib/auth/auth';
import { useSessionStore } from '~/stores/session';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const session = useSessionStore()
const router = useRouter()

const schema = yup.object({
    email: yup.string().email('Debe ser un correo válido').required('El email es obligatorio'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
});

const formData = ref({
    email: '',
    password: '',
});
const errors = ref<{ [key: string]: string }>({});

const validate = async () => {
    try {
        await schema.validate(formData.value, { abortEarly: false });
        errors.value = {}; // Si no hay errores, limpiamos el objeto de errores
        return true;
    } catch (validationError: unknown) {
        // Verificamos que el error sea de tipo ValidationError
        if (validationError instanceof yup.ValidationError) {
            errors.value = {};
            validationError.inner.forEach((err) => {
                if (err.path) {
                    errors.value[err.path] = err.message;
                }

            });
        } else {
            console.error('Error desconocido de validación', validationError);
            toast("Error desconocido de validación", {
                "theme": "auto",
                "type": "error"
            })
        }
        return false;
    }
};

const handleSubmit = async () => {
    const isValid = await validate();
    if (isValid) {
        console.log('Datos válidos:', formData.value.email);
        const res = await login(formData.value.email, formData.value.password)
        console.log(res)
        if (res) {
            session.setSession(res.access)
            router.push("/user")
        }
        else {
            toast("Error al iniciar sesión, verifique sus credenciales e intente nuevamente", {
                "theme": "auto",
                "type": "error"
            })
        }

    }
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="w-full h-60 flex flex-col justify-evenly items-center">
        <div class="flex flex-col justify-center items-center">
            <label for="email" class="text-center font-medium text-md">Correo</label>
            <input class="w-60 p-1 rounded-md shadow-lg" v-model="formData.email" name="email" type="email"
                placeholder="Ingrese su correo" />
            <span v-if="errors.email">{{ errors.email }}</span>
        </div>
        <div class="flex flex-col justify-center items-center">
            <label for="password" class="text-center font-medium text-md">Contraseña</label>
            <input v-model="formData.password" class="w-60 p-1 rounded-md shadow-lg" name="password" type="password"
                placeholder="Contraseña" />
            <span v-if="errors.password">{{ errors.password }}</span>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 p-2 shadow-lg rounded-md text-white">Iniciar
            sesión</button>
    </form>
</template>