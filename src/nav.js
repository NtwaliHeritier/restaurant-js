import Home from './home'
import Menu from './menu'
import Contact from './contact'

const Navbar = (()=>{
    const navCreate = ()=>{
        const content = document.getElementById("content")
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        const nav = document.createElement('nav')
        const h1 = document.createElement('h1')
        h1.textContent = "Le Chandelier"
        const navLinks = document.createElement('div')
        navLinks.setAttribute('class', 'nav-links')
        const span1 = document.createElement('span')
        span1.setAttribute('class', 'active-link')
        span1.textContent = "Home"
        span1.setAttribute('data-target', '#homepage')
        const span2 = document.createElement('span')
        span2.textContent = "Menu"
        span2.setAttribute('data-target', '#menupage')
        const span3 = document.createElement('span')
        span3.textContent = "Contact Us"
        span3.setAttribute('data-target', '#contactpage')
        navLinks.appendChild(span1)
        navLinks.appendChild(span2)
        navLinks.appendChild(span3)
        nav.appendChild(h1)
        nav.appendChild(navLinks)
        container.appendChild(nav)
        content.appendChild(container)
        Home.homeCreate()
        Menu.menuCreate()
        Contact.contactCreate()
        const spans = document.querySelectorAll('.panel')
        navLinks.addEventListener('click', (e)=> {
            if(e.target.tagName == "SPAN") {
                const panel = document.querySelector(e.target.dataset.target)
                spans.forEach((span)=>{
                    if(span==panel) {
                        span.classList.add('active')
                        const links = document.querySelectorAll('.nav-links span')
                        e.target.classList.add('active-link')
                        links.forEach((link)=>{
                            if(link.textContent !== e.target.textContent) {
                                link.classList.remove('active-link')
                            }
                        })
                    }
                    else {
                        span.classList.remove('active')
                    }
                })
            }
        })
    }
    return { navCreate }
})();

export default Navbar