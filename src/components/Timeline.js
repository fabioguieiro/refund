import { timestamp_to_date } from "../lib/utils/timestamp_to_date";
import { UsersIcon } from "./Icons/UsersIcon";
import { AsteriskIcon } from "./Icons/AsteriskIcon";
import { BellIcon } from "./Icons/BellIcon";

export function Timeline(props) {
  console.log(props, "time");
  return (
    <ul>
      {props.timeline.content.map((item) => {
        return (
          <li
            key={item.id}
            className="my-2 rounded-md w-full bg-white text-black px-6 py-4 flex"
          >
            <div className="mx-8 flex flex-col justify-center items-center w-10">
              <div className="h-12 flex justify-center items-center w-12 p-3 rounded-full bg-iconbg mb-2">
                {item.cardType === "EVALUATION" ? (
                  <UsersIcon color={"text-slategray"} />
                ) : null}
                {item.cardType === "ACCOUNTABILITY_SUBMITTED" ||
                item.cardType === "ACCOUNTABILITY_CREATED" ? (
                  <AsteriskIcon color={"text-nicegreen"} />
                ) : null}
                {item.cardType === "EXPENSE" ? (
                  <BellIcon color={"text-niceblue"} />
                ) : null}
              </div>
              <p className="text-typogray font-nunito">
                {timestamp_to_date(item.cardDate)}
              </p>
            </div>

            <div className="mx-8 flex flex-col justify-center items-start w-2/5 ">
              <p className="text-xs text-muted font-semibold font-nunito">
                TIPO
              </p>

              {item.cardType === "EXPENSE" ? (
                <p className="font-bold font-nunito text-typogray">Hotel</p>
              ) : null}
              {item.cardType === "ACCOUNTABILITY_CREATED" ? (
                <p className="font-bold font-nunito text-typogray">
                  Despesas enviadas para aprovação por {item.author.name}
                </p>
              ) : null}
              {item.cardType === "ACCOUNTABILITY_SUBMITTED" ? (
                <p className="font-bold font-nunito text-typogray">
                  Solicitação concluída por {item.author.name}
                </p>
              ) : null}
              {item.cardType === "EVALUATION" ? (
                <p className="font-bold font-nunito text-typogray">
                  Aprovação da Solicitação de {item.author.name}
                </p>
              ) : null}
            </div>

            {item.status ? (
              <div className="w-1/5 flex flex-col justify-center">
                <p className="text-xs text-muted font-semibold font-nunito">
                  STATUS
                </p>

                {item.status === "APPROVED" ? (
                  <div className="bg-approvedlight rounded-full  flex justify-center items-center w-20 h-6 border border-approveddark">
                    <p className="text-xs text-approveddark font-nunito font-bold">
                      {" "}
                      APROVADO{" "}
                    </p>
                  </div>
                ) : null}

                {item.status === "PENDING" ? (
                  <div className="bg-yellow-100 rounded-full flex justify-center items-center w-20 h-6 border border-yellow-500">
                    <p className="text-xs text-yellow-500 font-nunito font-bold">
                      {" "}
                      PENDENTE{" "}
                    </p>
                  </div>
                ) : null}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
