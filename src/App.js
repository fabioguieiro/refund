import "./App.css";
import { useEffect, useState } from "react";
import { useRequest } from "./hooks/useRequest";

function App() {
  const [loading, set_loading] = useState(true);
  const [data, set_data] = useState();
  useEffect(() => {
    async function Fetchdata() {
      const result = await useRequest("/api/header");
      set_data(result.data);
      set_loading(false);
      console.log(result);
    }
    Fetchdata();
  }, []);
  return (
    <div className="App bg-deepgreen text-white flex justify-center items-center w-full h-full">
      <div className="w-4/5 h-4/5 bg-softgray rounded flex justify-center flex-wrap">
        <div className="mt-2 w-11/12 h-60 gradient-bg rounded-lg text-white">
          {!!loading ? (
            <pre>loading...</pre>
          ) : (
            <>
              <pre>
                Reembolso #{data.id} - {data.justification}
              </pre>
              <pre>Nome: {data.collaborator.name}</pre>
              <pre>
                E-mail: {data.collaborator.email}
              </pre>
              <pre>Finalidade: {data.purpose}</pre>
              <pre>Projeto: {data.project.title}</pre>
              <pre>
                Data: {data.accountabilityExtraInfo.eventDate}
              </pre>
              <pre>
                Quantidade: {data.accountabilityExtraInfo.amountOfPeople}{" "}
                pessoas
              </pre>
              <pre>
                Inclui café da manhã:{" "}
                {data.accountabilityExtraInfo.budgetForBreakfast
                  ? "sim"
                  : "não"}
              </pre>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
