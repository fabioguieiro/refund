import { DownloadIcon } from "../Icons/DownloadIcon";

export function DownloadButton(props) {
  return (
    <button className="font-nunito ml-2 w-48 border rounded border-openstatusgdarktray text-openstatusgdarktray p-2 flex justify-center items-center">
      <DownloadIcon color={"text-openstatusgdarktray"} />
      <p className="ml-2">Baixar todos anexos</p>
    </button>
  );
}
