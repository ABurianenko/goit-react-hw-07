import { useSelector } from 'react-redux'
import Contact from '../Contact/contact'
import { contactList, contactItem } from './contactList.module.css'
import { selectNameFilter } from '../../redux/filtersSlice'
import { selectContacts } from '../../redux/contactsSlice'

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()||""));
    
    return (
        <ul className={contactList}>
            {filteredContacts.map((contact) =>
                <li className={contactItem} key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            )}
        </ul>
    )
}

export default ContactList;