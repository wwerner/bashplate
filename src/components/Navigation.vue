<template>
  <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
          <img src="http://test.de/test.png" alt="Logo">
        </a>
      </div>
      <div id="navbarMenu" class="navbar-menu">
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

