import AlterLogin from "./AlterLogin";
import BotonLogin from "./BotonLogin";
import EncabezadoLogin from "./EncabezadoLogin";
import InputCorreoLogin from "./InputCorreoLogin";
import InputPassLogin from "./InputPassLogin";
import NormalLogin from "./NormalLogin";

export default function FormLogin({ submit }) {
  return (
    <>
      <EncabezadoLogin />
      <AlterLogin />
      <NormalLogin />
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