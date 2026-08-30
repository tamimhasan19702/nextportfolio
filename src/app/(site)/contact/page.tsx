import { getPayload } from 'payload'
import config from '@payload-config'
import ContactContent from '@/components/contactContent'
import type { Contact } from '@/payload-types'

export const dynamic = 'force-dynamic'

const ContactPage = async () => {
  let contact = null

  try {
    const payload = await getPayload({ config })
    contact = await payload.findGlobal({ slug: 'contact', depth: 1 })
  } catch (err) {
    console.error('Failed to load contact global from Payload', err)
  }

  return <ContactContent contact={contact as Contact | null} />
}

export default ContactPage
