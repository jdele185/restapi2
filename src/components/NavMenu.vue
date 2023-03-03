<template>
  <nav>
    <RouterLink to="/">Main Page</RouterLink>
    <RouterLink to="/quotes">Quotes</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
