const Contact = (() => {
  const contactCreate = () => {
    const contact = document.createElement('div');
    contact.setAttribute('class', 'contact');
    contact.classList.add('panel');
    contact.setAttribute('id', 'contactpage');
    contact.innerHTML = `
        <form>
          <div class="email">
            <label>Email</label>
            <input type="email">
          </div>
          <div class="textarea">
            <label>Message</label>
            <textarea rows="10"></textarea>
          </div>
          <div class="submit">
            <button>Submit</button>
          </div>
        </form>
    `;
    const container = document.getElementById('content');
    container.appendChild(contact);
  };
  return { contactCreate };
})();

export default Contact;