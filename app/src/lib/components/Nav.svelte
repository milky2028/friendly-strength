<style lang="postcss">
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--nav-height);
    border-style: solid;
    border-color: var(--grey);
    border-width: 0 0 2px 0;
    background-color: white;
    
    display: grid;
    place-items: center;

    @media (--tablet) {
      top: unset;
      bottom: 0;
      border-width: 2px 0 0 0;
    }

    @media (prefers-color-scheme: dark) {
      border-color: white;
      background-color: var(--grey);
    }
  }

  a {
    text-decoration: none;
  }

  strong {
    font-size: 1.25rem;
    letter-spacing: 2px;
  }
</style>

<nav>
  <a href="/menu"><strong>CONTENT</strong></a>
</nav>
