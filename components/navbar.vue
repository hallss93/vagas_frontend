<template>
  <nav id="navbar">
    <div class="nav-container">
      <img class="logo" src="@/assets/imgs/group-12.png" alt="Image Logo" />
    </div>
    <div id="profile-controls" class="nav-container flex justify-end">
      <div class="text-button">
        <img src="@/assets/imgs/user.png" alt="Profile" />
        <h4>Entrar</h4>
      </div>
      <div class="text-button">
        <h4>Criar conta</h4>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  created() {}
}
</script>
