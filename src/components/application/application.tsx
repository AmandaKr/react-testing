export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section I</h2>
      <p>All fields are mandatory</p>
      <img
        src="https://zapytajpoliglote.pl/wp-content/uploads/2020/02/7.png"
        alt="people"
        width="300px"
      />
      <div data-testid="custom-element">Custom element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            value="Test"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="">United Kingdom</option>
            <option value="">Canada</option>
            <option value="">India</option>
            <option value="">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agreee to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
};
