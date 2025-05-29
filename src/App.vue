<template>
  <div class="layout">
    <header>
      <img src="/src/assets/logo.svg" alt="شعار صحة للدواجن" />
      <nav>
        <RouterLink to="/">الرئيسية</RouterLink>
        <RouterLink to="/products">المنتجات</RouterLink>
        <RouterLink to="/about">عن المزرعة</RouterLink>
        <RouterLink to="/contact">التواصل</RouterLink>
        <RouterLink to="/quality">شهادات الجودة</RouterLink>
        <RouterLink to="/dashboard" class="dashboard">لوحة التحكم</RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer>
      &copy; {{ new Date().getFullYear() }} صحة للدواجن. جميع الحقوق محفوظة.
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.layout {
  font-family: "Tajawal", sans-serif;
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}
nav a {
  margin-left: 1rem;
  text-decoration: none;
}
.dashboard {
  font-weight: bold;
}
</style>
