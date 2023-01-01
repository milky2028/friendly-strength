<script lang="ts">
  import "../vars.css"
  import "../app.css"
	import Nav from "$lib/components/Nav.svelte";
</script>

<style lang="postcss">
  main {
    margin: 0 auto;
    max-width: 660px;
    margin-top: calc(var(--nav-height) + 1rem);

    @media (--tablet) {
      margin-top: 0;
      margin-bottom: calc(var(--nav-height) + 1rem);
    }
  }
</style>

<main>
  <slot />
</main>
<Nav />