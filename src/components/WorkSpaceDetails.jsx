export default function WorkSpaceDetails() {
  return (
    <main>
      <section className="form-section">
        <div>
          <h2>Let's set up a home for all your work</h2>
          <p className="grey-text">You can always create another workspace later.</p>
        </div>
        <form>
          <div>
            <label>Workspace Name</label>
            <input placeholder="Eden" required/>
          </div>
          <div>
            <label>Workspace URL <span className="grey-text">(optional)</span></label>
            <input placeholder="www.eden.com/"/>
          </div>

          <button>Create Workspace</button>
        </form>
      </section>
    </main>
  );
}
