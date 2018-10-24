<template>
  <nav class="navbar is-transparent  is-fixed-top">
    <div id="navbarMenu" class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="tabs is-right">
          <ul>
            <li :class="{ 'is-active' : $route.path === '/' }">
              <router-link to="/">Generator</router-link>
            </li>
            <li :class="{ 'is-active' : $route.path === '/about' }">
              <router-link to="about">About</router-link>
            </li>
          </ul>
          <span class="navbar-item">
                <a class="button is-dark is-outlined"
                   href="https://github.com/wwerner/bashplate">
                    <span>Source</span>
                    <span class="icon">
                        <i class="fab fa-github"></i>
                    </span>
                </a>
            </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

