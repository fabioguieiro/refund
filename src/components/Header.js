export function Header(props) {
  return (
    <div className="mt-2 h-60 gradient-bg rounded-lg text-white">
        <p className="text-xl font-nunito font-bold">
          Reembolso #{props.header.id} - {props.header.justification}
        </p>
        <pre>Nome: {props.header.collaborator.name}</pre>
        <pre>E-mail: {props.header.collaborator.email}</pre>
        <pre>Finalidade: {props.header.purpose}</pre>
        <pre>Projeto: {props.header.project.title}</pre>
        <pre>Data: {props.header.accountabilityExtraInfo.eventDate}</pre>
        <pre>
          Quantidade: {props.header.accountabilityExtraInfo.amountOfPeople}{" "}
          pessoas
        </pre>
        <pre>
          Inclui café da manhã:{" "}
          {props.header.accountabilityExtraInfo.budgetForBreakfast
            ? "sim"
            : "não"}
        </pre>
      )
    </div>
  );
}
