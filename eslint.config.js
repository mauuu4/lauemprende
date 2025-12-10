import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Puedes agregar reglas personalizadas aquí
    },
  },
]
