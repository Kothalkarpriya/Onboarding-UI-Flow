import { useDetailContext } from "../context/DetailContext";

export default function WorkSpaceDetails({ nextStep }) {
  const { state, dispatch } = useDetailContext();
  return (
    <main>
      <section className="form-section">
        <div>
          <h2>Let's set up a home for all your work</h2>
          <p className="grey-text">
            You can always create another workspace later.
          </p>
        </div>
        <form>
          <div>
            <label>Workspace Name</label>
            <input
              placeholder="Eden"
              name="workspaceName"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_WORKSPACE_NAME",
                  payload: e.target.value,
                })
              }
              value={state.workspaceName}
              required
            />
          </div>
          <div>
            <label>
              Workspace URL <span className="grey-text">(optional)</span>
            </label>
            <input
              placeholder="www.eden.com/"
              name="workspaceUrl"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_WORKSPACE_URL",
                  payload: e.target.value,
                })
              }
              value={state.workspaceUrl}
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
