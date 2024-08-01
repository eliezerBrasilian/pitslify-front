import AppSubmissionForm from "../components/AppSubmissionForm";
import { Footer } from "../components/Footer";
import { Header } from "../navigation/Header";

const UserArea = () => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: 70 }}>
        <AppSubmissionForm />
      </main>
      <Footer />
    </div>
  );
};

export default UserArea;
