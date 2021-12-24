export const handleMenuItems = (dataLink) => {
  const menuItems = document.querySelectorAll(".header__nav-item");
  menuItems.forEach((item) => {
    if (item.dataset.link === dataLink) {
      item.classList.add("header__nav-item--active");
    } else {
      item.classList.remove("header__nav-item--active");
    }
  });
};
