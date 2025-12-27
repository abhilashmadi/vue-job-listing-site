<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    default: () => []
    // Each option should be { value: string|number, label: string }
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: () => `select-${Math.random().toString(36).substr(2, 9)}`
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const handleChange = (event) => {
  emit('update:modelValue', event.target.value)
  emit('change', event.target.value)
}
</script>

<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="id"
      class="block text-neutral-700 font-bold mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-error">*</span>
    </label>
    
    <div class="relative">
      <select
        :id="id"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        :class="[
          'w-full py-3 px-4 pr-10 rounded-lg border transition-all duration-150 ease-in-out shadow-sm appearance-none cursor-pointer',
          'focus:outline-none focus:ring-2 focus:border-primary-500',
          error 
            ? 'border-error bg-red-50 focus:ring-red-200' 
            : 'border-primary-200 bg-primary-50 hover:bg-primary-100 focus:ring-primary-400',
          { 'opacity-50 cursor-not-allowed': disabled }
        ]"
        @change="handleChange"
      >
        <option v-if="placeholder" value="" disabled>
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      
      <!-- Custom dropdown arrow -->
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-primary-600">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    
    <p v-if="error" class="mt-1.5 text-sm text-error">
      {{ error }}
    </p>
  </div>
</template>


