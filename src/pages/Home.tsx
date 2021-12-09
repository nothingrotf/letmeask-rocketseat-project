import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas dúvidas em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="logo" />
          <button>
            <img src={googleIcon} alt="" />
            Crie sua sala Google
          </button>
          <div>
            <form>
              <input
                type="text"
                placeholder="Difite o código da sala"
              />
              <button type="submit">
                entrar na sala
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}