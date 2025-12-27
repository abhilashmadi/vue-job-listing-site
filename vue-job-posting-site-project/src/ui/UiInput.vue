<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
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
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  }
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
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
    
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="[
        'w-full py-3 px-4 rounded-lg border transition-all duration-150 ease-in-out shadow-sm',
        'focus:outline-none focus:ring-2 focus:border-primary-500',
        error 
          ? 'border-error bg-red-50 focus:ring-red-200' 
          : 'border-primary-200 bg-white hover:bg-primary-50 focus:ring-primary-400',
        { 'opacity-50 cursor-not-allowed bg-neutral-100': disabled }
      ]"
      @input="handleInput"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    />
    
    <p v-if="error" class="mt-1.5 text-sm text-error">
      {{ error }}
    </p>
  </div>
</template>


