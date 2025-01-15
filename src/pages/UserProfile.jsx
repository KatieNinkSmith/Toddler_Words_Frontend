import FetchUser from "../components/FetchUser"; // Import FetchUser

function UserProfile() {
  const { user, loading } = FetchUser();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="profilePage">
      <div className="userProfile">
        <div> Hi! {user.name} </div>
        <p>Add a word for your child to learn</p>
        <form>
          <input placeholder="your word" />
          <br />
          <label>Select a category for your word</label>
          <br />
          <select>
            <option>Family</option>
            <option>Places</option>
            <option>Things</option>
            <option>Clothes</option>
          </select>
          <br />
          <input type="file" id="imageUpload" accept="image/*" />
          <br />
          <button>SAVE WORD</button>
        </form>
      </div>
      <div className="userAdditions">
        <input placeholder="Search for word" />
        <button>Search</button>
        <br />
        <select>
          <option>Family</option>
          <option>Places</option>
          <option>Things</option>
          <option>Clothes</option>
        </select>
      </div>
    </div>
  );
}
export default UserProfile;
