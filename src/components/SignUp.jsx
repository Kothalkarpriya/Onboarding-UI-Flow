import { useDetailContext } from "../context/DetailContext";

export default function SignUp({ nextStep }) {
  const { state, dispatch } = useDetailContext();

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
            <input
              placeholder="Steve Jobs"
              name="fullName"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FULLNAME",
                  payload: e.target.value,
                })
              }
              value={state.fullName}
              required
            />
          </div>
          <div>
            <label>Display Name</label>
            <input
              placeholder="Steve"
              name="displayName"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_DISPLAY_NAME",
                  payload: e.target.value,
                })
              }
              value={state.displayName}
              required
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              nextStep();
            }}
          >
            Create Workspace
          </button>
        </form>
      </section>
    </main>
  );
}
