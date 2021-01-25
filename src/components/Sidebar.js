import { ArrowUpIcon } from "../components/Icons/ArrowUpIcon";
import { ArrowDownIcon } from "../components/Icons/ArrowDownIcon";
export function Sidebar(props) {
  console.log(props, "side");
  return (
    <aside className="bg-white ml-4 w-1/4 h-full">
      <div className="flex flex-col items-center mt-8">
        {props.sidebar.content[0].accountabilityStatus === "OPEN" ? (
          <div className="bg-openstatusglightray border border-openstatusgdarktray w-11/12 h-20 rounded-lg flex flex-col items-center justify-center">
            <p className="text-deepgreen font-nunito">Status</p>
            <p className="text-deepgreen font-nunito font-bold text-lg">
              Aguardando financeiro
            </p>
          </div>
        ) : null}
        {props.sidebar.content[0].accountabilityStatus === "CONCLUDED" ? (
          <div className="bg-concludedlightgreen border border-concludeddarkgreen w-11/12 h-20 rounded-lg flex flex-col items-center justify-center">
            <p className="text-concludeddarkgreen font-nunito">Status</p>
            <p className="text-concludeddarkgreen font-nunito font-bold text-lg">
              Concluído
            </p>
          </div>
        ) : null}
        {props.sidebar.content.map((item) => {
          return (
            <div
              key={item.currency.id}
              className="mt-4 border border-openstatusglightray rounded-lg w-11/12 h-96 flex flex-col justify-center items-stretch"
            >
              <div className="w-full flex flex-col items-center">
                <p className="mt-2 text-openstatusgdarktray font-nunito font-semibold text-sm">
                  SALDO
                </p>
                <p className="mt-2 text-xl text-deepgreen font-nunito font-bold">
                  {`${item.declared.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: item.currency.code,
                  })}`}
                </p>
              </div>
              <div className="flex justify-evenly  mt-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 border border-muted rounded-full flex items-center justify-center">
                    <ArrowUpIcon color={"text-muted"} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-coolgray font-nunito text-xs font-bold">
                      Gastou
                    </p>
                    <p className="text-currencygray font-nunito text-sm font-semibold">
                      {`${item.declared.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: item.currency.code,
                      })}`}
                    </p>
                  </div>
                </div>
                <div className="w-px h-3/4 bg-openstatusglightray self-center"></div>
                <div className="flex items-center">
                  <div className="w-6 h-6 border border-muted rounded-full flex items-center justify-center mr-1">
                    <ArrowDownIcon color={"text-muted"} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-coolgray font-nunito text-xs font-bold">
                      Recebeu
                    </p>
                    <p className="text-currencygray font-nunito text-sm font-semibold">
                      {` ${item.received.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: item.currency.code,
                      })}`}
                    </p>
                  </div>
                </div>
              </div>
              <p className="ml-4 mt-2 font-nunito text-deepgreen font-bold text-lg">
                Extrato
              </p>
              <div className="mt-1 w-11/12 h-px bg-openstatusglightray self-center"></div>
              <div className="flex justify-between items-stretch text-deepgreen px-4 mt-2">
                <div className="w-full">
                  <p className="mb-2">Descrição</p>
                  <div className="w-full flex justify-between">
                    <p className="font-bold font-nunito text-deepgreen text-sm">
                      Despesas declaradas
                    </p>
                    <p className="font-bold font-nunito text-deepgreen text-sm">
                      {` ${item.declared.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: item.currency.code,
                      })}`}
                    </p>
                  </div>
                  <p className="font-semibold font-nunito text-coolgray text-xs">
                    Despesas declaradas pelo trooper
                  </p>
                  <div className="w-full flex justify-between">
                    <p className="font-bold font-nunito text-deepgreen text-sm">
                      Despesas Aprovadas
                    </p>
                    <p className="font-bold font-nunito text-deepgreen text-sm">
                      {` ${item.approved.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: item.currency.code,
                      })}`}
                    </p>
                  </div>
                  <p className="font-semibold font-nunito text-coolgray text-xs">
                    Despesas Aprovadas pelo financeiro
                  </p>
                  <div className="w-full flex justify-between">
                    <p className="font-bold font-nunito text-deepgreen text-sm">
                      Pagamento realizado
                    </p>
                    <p className="font-bold font-nunito text-nicegreen text-sm">
                      {` ${item.received.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: item.currency.code,
                      })}`}
                    </p>
                  </div>
                  <p className="font-semibold font-nunito text-coolgray text-xs">
                    Pegamento realizado pelo financeiro
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
