import { timestamp_to_date } from "../lib/utils/timestamp_to_date";

export function Header(props) {
  console.log(props, "header");
  return (
    <div className="mt-2 h-60 gradient-bg rounded-lg text-white pt-4 pl-4">
      <p className="text-3xl font-nunito font-semibold">
        Reembolso #{props.header.id} - {props.header.justification}
      </p>
      <div className="flex">
        <div className="flex w-1/2">
          <div className="mt-2 ml-4">
            <div classname="">
              <p className=" font-nunito font-thin text-right">Nome: </p>
              <p className=" font-nunito text-right font-thin">E-mail:</p>
              <p className=" font-nunito text-right font-thin">Finalidade:</p>
              <p className=" font-nunito text-right font-thin">Projeto:</p>
              <p className=" font-nunito text-right font-thin">Data:</p>
              <p className=" font-nunito text-right font-thin">Quantidade:</p>
              <p className=" font-nunito text-right font-thin">
                Inclui café da manhã:{" "}
              </p>
            </div>
          </div>
          <div className="mt-2 ml-6">
            <p className="font-nunito ">{props.header.collaborator.name} </p>
            <p className="font-nunito ">{props.header.collaborator.email}</p>
            <p className="font-nunito ">{props.header.purpose === 'FRATERNIZATION' ? 'Fraternização': ''}</p> 
            <p className="font-nunito ">{props.header.project.title}</p>
            <p className="font-nunito ">
              {timestamp_to_date(
                props.header.accountabilityExtraInfo.eventDate
              )}
            </p>
            <p className="font-nunito ">
              {props.header.accountabilityExtraInfo.amountOfPeople} {props.header.accountabilityExtraInfo.amountOfPeople > 1 ? 'pessoas' : 'pessoa'}
            </p>
            <p className="font-nunito ">
              {props.header.accountabilityExtraInfo.budgetForBreakfast
                ? "sim"
                : "não"}
            </p>
          </div>
        </div>
        <div className="h-10/12 w-px bg-white"></div>
        <div className="flex flex-col w-1/2 justify-around p-6 ">
          <div>
            <p className="font-thin">Atribuir analista</p>
            <input
              type="text"
              className="w-1/2 rounded px-2 text-typogray font-nunito"
              placeholder="Atribuir analista"
            ></input>
          </div>
          <div>
            <p className="font-thin">Centro de custo</p>
            {props.header.costCenters
              ? props.header.costCenters.map((item) => {
                  return <p className="text-white font-semibold">{item.percentage}% - {item.name}</p>;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
