const Menu = (() => {
  const menuCreate = () => {
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');
    menu.classList.add('panel');
    menu.setAttribute('id', 'menupage');
    menu.innerHTML = `
        <div class="breakfast-menu">
          <h3>Breakfast</h3>
          <span>Omelette</span>
          <span>Coffee</span>
          <span>Tea</span>
          <span>Bread</span>
        </div>
        <div class="lunch-menu">
          <h3>Lunch</h3>
          <span>Burger</span>
          <span>Pizza</span>
          <span>Steak</span>
          <span>Chicken panini</span>
        </div>
        <div class="dinner-menu">
          <h3>Dinner</h3>
          <span>Salad</span>
          <span>Brown bread</span>
          <span>Soup</span>
          <span>White bread</span>
        </div>
        `;
    const container = document.getElementById('content');
    container.appendChild(menu);
  };
  return { menuCreate };
})();

export default Menu;