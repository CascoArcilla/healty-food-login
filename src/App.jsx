import './styles/App.css';
import FormLogin from './components/FormLogin';

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Formulario enviado");
  }

  return (
    <>
      <div
        className="flex flex-col justify-center bg-slate-400 px-12 pt-5 pb-8 border-solid border-2 border-slate-500 rounded-lg shadow-xl shadow-slate-700 w-3/5 max-w-screen-md"
      >
        <FormLogin submit={handleSubmit} />
      </div>
    </>
  )
}

export default App;

//ff454552