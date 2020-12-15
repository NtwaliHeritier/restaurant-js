const Home = (()=>{
    const homeCreate = ()=>{
        const home = document.createElement('div')
        home.setAttribute('class', 'home')
        home.setAttribute('id', 'homepage')
        home.classList.add('active')
        home.classList.add('panel')
        home.innerHTML += `
        <p>Welcome to our restaurant, We serve you:</p>
        <ul>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
        `
        const container = document.getElementById('content')
        container.appendChild(home)
    }
    return { homeCreate }
}
)();

export default Home
