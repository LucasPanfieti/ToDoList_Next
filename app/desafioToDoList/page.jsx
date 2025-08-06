"use client";
import { useEffect, useState } from "react";
import Button from "../../components/DesafioAnna/Button";
import Modal from "../../components/DesafioAnna/Modal";
import Checkbox from "../../components/DesafioAnna/Checkbox";
import "./style.css";
import { ImBin } from "react-icons/im";

export default function desafioToDoList() {
  const [aberto, setAberto] = useState(false);
  const [ok, setOk] = useState(false);
  const [tarefa, setTarefa] = useState("");

  const [listaTarefa, setListaTarefa] = useState([]);

  function handleStatus(status, id) {
    // setListaTarefa([...listaTarefa, { status: eventos }]);
    setListaTarefa((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: status } : item))
    );
  }

  function handleExcluirTarefa(id) {
    const novaLista = listaTarefa.filter((t) => t.id !== id);
    setListaTarefa(novaLista);
  }

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("listaTarefa");
    if (dadosSalvos) {
      setListaTarefa(JSON.parse(dadosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listaTarefa", JSON.stringify(listaTarefa));
  }, [listaTarefa]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          // width: "50%",
          minWidth: "50%",
          maxWidth: "100%",
          backgroundColor: "#535353ff",
          borderRadius: "8px",
          padding: "2rem",
          boxShadow: "0 0 5px #00ffb3ff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          className="botao"
          handleClick={() => setAberto(!aberto)}
          text="Nova Tarefa"
          // style={{
          //   color: "#222222ff",
          //   height: "40px",
          //   fontSize: "18px",
          //   backgroundColor: "#00ffc8ff",
          //   borderRadius: "8px",
          //   border: "none",
          // }}
        />

        {aberto ? (
          <Modal
            botaoCancelar={() => setAberto(!aberto)}
            textoBotaoCancelar="Cancelar"
            style={{
              height: "40px",
              width: "80px",
              //fontSize: "15px",
              margin: "8px",
            }}
            setListaTarefa={setListaTarefa}
            listaTarefa={listaTarefa}
            setTarefa={setTarefa}
            tarefa={tarefa}
            fechar={() => setAberto(!aberto)}
          />
        ) : (
          ""
        )}

        <div
          // className="tarefa"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "16px",
            color: "white",
          }}
        >
          {listaTarefa.map((e, index) => (
            <div
              style={{
                display: "flex",
                gap: "4px",
                textTransform: "capitalize",
              }}
            >
              <Checkbox
                newValue={(eventos) => handleStatus(eventos, e.id)}
                type="checkbox"
                id={e.tarefa}
                checked={e.status}
              />
              <label
                className={e.status ? "marcado" : ""}
                htmlFor={e.tarefa}
                key={index + e.tarefa}
                style={{
                  wordBreak: "break-word", // quebra palavras muito longas
                  whiteSpace: "normal", // permite múltiplas linhas
                  maxWidth: "100%", // evita que ultrapasse o contêiner
                  flex: 1, // ocupa o espaço restante no flex
                }}
              >
                {e.tarefa}
              </label>

              <Button
                text={<ImBin />}
                handleClick={() => handleExcluirTarefa(e.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
