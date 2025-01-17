<script lang="ts" setup>
import { ref } from 'vue';
import * as yup from 'yup';
import { useSessionStore } from '~/stores/session';
import { register } from '~/lib/auth/auth';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";



const session = useSessionStore()
const router = useRouter()

// Definimos el esquema de validación
const schema = yup.object({
  name: yup.string().required('El nombre es obligatorio'),
  lastname: yup.string().required('El apellido es obligatorio'),
  phone: yup.string().matches(/\+[0-9]+/, 'Por favor, ingrese un formato válido (+123456789)').required("El teléfono es obligatorio"),
  email: yup.string().email('Debe ser un correo válido').required('El email es obligatorio'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
  password_confirmation: yup.string().required("Debe confirmar su contraseña").oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
});

// Datos del formulario
const formData = ref({
  name: '',
  lastname: '',
  phone: '',
  email: '',
  password: '',
  password_confirmation: '',
});

// Errores del formulario
const errors = ref<{ [key: string]: string }>({});

// Validar los datos
const validate = async () => {
  try {
    await schema.validate(formData.value, { abortEarly: false });
    errors.value = {}; // Limpiamos errores si no hay problemas
    return true;
  } catch (validationError: unknown) {
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

// Manejo del envío del formulario
const handleSubmit = async () => {
  const isValid = await validate();
  if (isValid) {
    console.log('Datos válidos:', formData.value);
    const res = await register(formData.value)
    if (res) {
      toast("Usuario registrado correctamente!", {
        "theme": "auto",
        "type": "success"
      })
      session.setSession(res.access)
      router.push("/user")
    }
    else{
      toast("Error al registrar al usuario, por favor intente nuevamente.", {
        "theme": "auto",
        "type": "error"
      })
    }
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-5 mx-10">
    <!-- Campo de nombre -->
    <div class="flex flex-col justify-center items-center">
      <label for="name" class="font-medium">Nombre</label>
      <input v-model="formData.name" name="name" type="text" class="w-60 p-1 rounded-md shadow-lg"
        placeholder="Ingrese su nombre" />
      <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
    </div>

    <!-- Campo de apellido -->
    <div class="flex flex-col justify-center items-center">
      <label for="lastname" class="font-medium">Apellido</label>
      <input v-model="formData.lastname" name="lastname" type="text" class="w-60 p-1 rounded-md shadow-lg"
        placeholder="Ingrese su apellido" />
      <span v-if="errors.lastname" class="text-red-500 text-sm">{{ errors.lastname }}</span>
    </div>

    <!-- Campo de telefono -->
    <div class="flex flex-col justify-center items-center">
      <label for="phone" class="font-medium">Teléfono</label>
      <input v-model="formData.phone" name="phone" type="text" class="w-60 p-1 rounded-md shadow-lg"
        placeholder="Formato: +123456789" />
      <span v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</span>
    </div>

    <!-- Campo de correo -->
    <div class="flex flex-col justify-center items-center">
      <label for="email" class="font-medium">Correo</label>
      <input v-model="formData.email" name="email" type="email" class="w-60 p-1 rounded-md shadow-lg"
        placeholder="Ingrese su correo" />
      <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
    </div>

    <!-- Campo de contraseña -->
    <div class="flex flex-col justify-center items-center">
      <label for="password" class="font-medium">Contraseña</label>
      <input v-model="formData.password" name="password" type="password" class="w-60 p-1 rounded-md shadow-lg"
        placeholder="Ingrese su contraseña" />
      <span v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</span>
    </div>

    <!-- Campo de confirmar contraseña -->
    <div class="flex flex-col justify-center items-center">
      <label for="password_confirmation" class="font-medium">Confirmar contraseña</label>
      <input v-model="formData.password_confirmation" name="password_confirmation" type="password"
        class="w-60 p-1 rounded-md shadow-lg" placeholder="Ingrese su contraseña" />
      <span v-if="errors.password_confirmation" class="text-red-500 text-sm">{{ errors.password_confirmation }}</span>
    </div>

    <!-- Botón de envío -->
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-md shadow-md col-span-2">
      Registrar
    </button>
  </form>
</template>
