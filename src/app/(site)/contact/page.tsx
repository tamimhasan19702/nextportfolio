import ContactContent from "@/components/contactContent";
import { getContact } from "@/lib/payload-cache";
import type { Contact } from "@/payload-types";

const ContactPage = async () => {
  let contact = null;

  try {
    contact = await getContact();
  } catch (err) {
    console.error("Failed to load contact global from Payload", err);
  }

  return <ContactContent contact={contact as Contact | null} />;
};

export default ContactPage;
