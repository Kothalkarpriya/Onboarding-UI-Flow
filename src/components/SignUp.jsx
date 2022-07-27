export default function SignUp() {
  return (
    <main>
      <section className="form-section">
        <div>
          <h2>Welcome! First things first...</h2>
          <p className="grey-text">You can always change them later.</p>
        </div>
        <form>
          <div>
            <label>Full Name</label>
            <input placeholder="Steve Jobs" required/>
          </div>
          <div>
            <label>Display Name</label>
            <input placeholder="Steve" required/>
          </div>

          <button>Create Workspace</button>
        </form>
      </section>
    </main>
  );
}
