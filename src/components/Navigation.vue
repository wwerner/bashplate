<template>
  <nav class="navbar is-transparent  is-fixed-top">
      <div id="navbarMenu" class="navbar-menu is-active">
        <div class="navbar-end">
          <div class="tabs is-right">
            <ul>
              <li class="is-active"><router-link to="/">Generator</router-link></li>
              <li><router-link to="about">About</router-link></li>
            </ul>
            <span class="navbar-item">
                <a class="button is-dark is-outlined"
                   href="https://github.com/wwerner/basherplate">
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

