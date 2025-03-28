// 检测系统颜色偏好
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 初始化主题
let currentTheme = localStorage.getItem('theme') || 
                 (systemPrefersDark ? 'dark' : 'light');

// 应用主题
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateButtonIcon(theme);
}

// 更新按钮图标
function updateButtonIcon(theme) {
  const icon = document.querySelector('.theme-toggle-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// 初始化主题
applyTheme(currentTheme);

// 监听切换按钮点击
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }

  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
});