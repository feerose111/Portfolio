import Contact from '../models/Contact.js'

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body)
    const savedContact = await contact.save()
    res.status(201).json(savedContact)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' })
    }
    res.json({ message: 'Contact deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

