import s from './App.module.css'

import ContactForm from './ContactForm/contactForm'
import SearchBox from './SearchBox/searchBox'
import ContactList from './ContactList/contactList'

function App() {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      
    </div>
  )
}

export default App;
