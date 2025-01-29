import CreateWords from "../components/CreateWords";
import UsersWords from "../components/UsersWords";

function UserProfile() {
  return (
    <div className="profilePage">
      <CreateWords />
      <UsersWords />
    </div>
  );
}

export default UserProfile;
