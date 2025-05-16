import Contacts from "../components/Content/Contacts";
import BasePage from "../components/Page/BasePage";

export default function ContactsPage() {
  window.scrollTo(0, 0);

  return (
    <BasePage>
      <Contacts />
    </BasePage>
  );
}
