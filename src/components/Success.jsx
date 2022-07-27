import { BsCheck} from "react-icons/bs"

export default function Success() {
  return (
    <main>
      <section className="form-section">
        <div>
        <BsCheck className="icon"/>
          <h2>Congratulations, Eren!</h2>
          <p className="grey-text">You have completed onboarding, you can start using Eden!</p>
        </div>

          <button>Launch Eden</button>
      </section>
    </main>
  );
}
