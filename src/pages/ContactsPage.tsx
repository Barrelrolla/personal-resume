import Contacts from "../components/Content/Contacts";
import BasePage from "../components/Page/BasePage";

export default function ContactsPage() {
  document.title = "Julian Teofilov | Contacts";
  return (
    <BasePage>
      <Contacts />
    </BasePage>
  );
}
