import AlterLogin from "./AlterLogin";
import BotonLogin from "./BotonLogin";
import EncabezadoLogin from "./EncabezadoLogin";
import InputCorreoLogin from "./InputCorreoLogin";
import InputPassLogin from "./InputPassLogin";

export default function FormLogin({ submit }) {
  return (
    <>
      <EncabezadoLogin />
      <AlterLogin />
      <form onSubmit={submit}>
        <div className="content-form">
          <InputCorreoLogin />
          <InputPassLogin />
          <BotonLogin />
        </div>
      </form>
    </>
  )
}