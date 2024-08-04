import AppSubmissionForm from "../components/AppSubmissionForm";
import s from "../modules/UserArea.module.css";
import { Header } from "../navigation/Header";

const UserArea = () => {
  return (
    <div className={s.user_area_container}>
      <Header />
      <main style={{ marginTop: 70 }}>
        <AppSubmissionForm />
      </main>
    </div>
  );
};

export default UserArea;
