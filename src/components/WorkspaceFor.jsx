import { RiTeamFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { useDetailContext } from "../context/DetailContext";

export default function WorkspaceFor({ nextStep }) {
  const { state, dispatch } = useDetailContext();

  return (
    <main>
      <section className="form-section">
        <div>
          <h2>How are you planning to use Eden?</h2>
          <p className="grey-text">
            We'll streamline your setup experience accordingly.
          </p>
        </div>
        <form>
          <section className="workspace-option">
            <div
              onClick={(e) =>
                dispatch({
                  type: "UPDATE_WORKSPACE_FOR",
                  payload: e.target.value,
                })
              }
              value={state.workspaceFor}
            >
              <BsFillPersonFill className="icon-option" />
              <p>
                <b>For myself</b>
              </p>
              <p className="grey-text">
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
            <div
              onClick={(e) =>
                dispatch({
                  type: "UPDATE_WORKSPACE_FOR",
                  payload: e.target.value,
                })
              }
              value={state.workspaceFor}
            >
              <RiTeamFill className="icon-option" />
              <p>
                <b>With my team</b>
              </p>
              <p className="grey-text">
                Wikis, docs and projects, all in one place.
              </p>
            </div>
          </section>
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
