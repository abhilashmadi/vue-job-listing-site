<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  rounded: {
    type: String,
    default: 'full',
    validator: (value) => ['sm', 'md', 'lg', 'full'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const variantClasses = {
  primary: 'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white shadow-sm',
  secondary: 'bg-primary-100 hover:bg-primary-200 active:bg-primary-300 text-primary-700',
  outline: 'bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  danger: 'bg-error hover:opacity-90 active:opacity-80 text-white shadow-sm'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

const roundedClasses = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
}

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button :class="[
    'inline-flex items-center justify-center font-semibold transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    roundedClasses[rounded],
    { 'w-full': fullWidth },
    { 'opacity-50 cursor-not-allowed': disabled || loading }
  ]" :disabled="disabled || loading" @click="handleClick">
    <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>
    <slot />
  </button>
</template>
