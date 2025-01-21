import { useSelector } from 'react-redux'
import Contact from '../Contact/contact'
import { contactList, contactItem } from './contactList.module.css'
import { selectNameFilter } from '../../redux/filtersSlice'
import { selectFilteredContacts } from '../../redux/contactsSlice'

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    // console.log(contacts);
    
    const filter = useSelector(selectNameFilter);

    const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()||""));
    
    return (
        <ul className={contactList}>
            {visibleContacts.map((contact) =>
                <li className={contactItem} key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            )}
        </ul>
    )
}

export default ContactList;