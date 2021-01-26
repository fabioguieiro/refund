import { ReceiptIcon } from "../Icons/ReceiptIcon";

export function AddExpenseButton(props) {
  return (
    <button
      onClick={props.click}
      className="font-nunito border w-48 rounded border-openstatusgdarktray text-openstatusgdarktray p-2 flex justify-center items-center"
    >
      <ReceiptIcon color={"text-openstatusgdarktray"} />
      <p className="ml-2">Adicionar dispesa</p>
    </button>
  );
}
