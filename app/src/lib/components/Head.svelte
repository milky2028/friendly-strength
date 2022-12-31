<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <!-- <meta name="image" content={imageUrl} /> -->

  <!-- <meta name="theme-color" content={themeColor} /> -->

  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <!-- <meta itemprop="image" content={imageUrl} /> -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:creator" content="@dirtcake1" />
  <!-- <meta name="twitter:image" content={imageUrl} /> -->
  <!-- <meta name="twitter:image:alt" content="{fullName} products" /> -->

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <!-- <meta property="og:image" content={imageUrl} /> -->
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="675" />
  <meta property="og:image:type" content="image/jpeg" />
  <!-- <meta property="og:url" content="https://{domain}/" /> -->
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="fb:app_id" content="561501674389105" />
</svelte:head>