import { FilterIcon } from "../Icons/FilterIcon";

export function ChooseFileButton(props) {
  return (
    <div
      onClick={props.click}
      className="font-nunito border w-48 rounded border-openstatusgdarktray text-openstatusgdarktray p-2 flex justify-center items-center"
    >
      <input type="file" className="hidden" />
      <FilterIcon color={"text-openstatusgdarktray"} />
      <p className="ml-2">Escolher Arquivo</p>
    </div>
  );
}
