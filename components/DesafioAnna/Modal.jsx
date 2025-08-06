import Button from "../../components/DesafioAnna/Button";

export default function Modal(props) {
  function salvar() {
    props.setListaTarefa([
      ...props.listaTarefa,
      { tarefa: props.tarefa, id: props.listaTarefa.length },
    ]);
    props.fechar();
    props.setTarefa("");
  }

  console.log("tarefa: ", props.tarefa);
  console.log("tarefa: ", props.listaTarefa);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // fundo escurecido
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          // width: "500px",
          // height: "500px",
          minWidth: "50%",
          maxWidth: "90%",
          backgroundColor: "#535353ff",
          borderRadius: "8px",
          padding: "2rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0,3)",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "0 0 5px #00ffb3ff",
        }}
      >
        <h2>Insira sua nova tarefa</h2>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <textarea
            placeholder="Digite uma tarefa..."
            value={props.tarefa}
            onChange={(e) => props.setTarefa(e.target.value)}
            rows={3}
            style={{
              // width: "115%",
              // minWidth: "100%",
              width: "70vw",
              minHeight: "40px",
              maxHeight: "300px",
              resize: "vertical",
              // resize: "both",
              padding: "10px",
              marginBottom: "10px",
              fontSize: "16px",
            }}
          />
        </p>
        <p>
          <Button
            handleClick={props.botaoCancelar}
            text={props.textoBotaoCancelar}
            style={props.style}
          />
          <Button
            text={"Salvar"}
            style={{
              width: "80px",
              height: "40px",
              margin: "8px",
            }}
            handleClick={salvar}
          />
        </p>
      </div>
    </div>
  );
}
