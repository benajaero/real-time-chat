/** @type {import('tailwindcss').Config} */
import TailwindForms from '@tailwindcss/forms';
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [TailwindForms],
}

