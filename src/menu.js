const Menu = (()=>{
    const menuCreate = ()=> {
        const menu = document.createElement('div')
        menu.setAttribute('class', 'menu')
        menu.classList.add('panel')
        menu.setAttribute('id', 'menupage')
        menu.innerHTML = `
        <div class="breakfast-menu">
        <h3>Breakfast</h3>
        <span>Omelette</span>
        <span>Coffee</span>
        <span>Tea</span>
        <span>Bread</span>
        `
        const container = document.getElementById('content')
        container.appendChild(menu)
    }
    return { menuCreate }
})();

export default Menu