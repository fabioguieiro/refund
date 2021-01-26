import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";
import { Sidebar } from "../components/Sidebar";
import { Timeline } from "../components/Timeline";
import { Header } from "../components/Header";
import { ReceiptIcon } from "../components/Icons/ReceiptIcon";
import { DownloadButton } from "../components/buttons/DownloadButton";
import { AddExpenseButton } from "../components/buttons/AddExpenseButton";
import { ChooseFileButton } from "../components/buttons/ChooseFileButton";

export function Main() {
  const [loading, set_loading] = useState(true);
  const [header_data, set_header_data] = useState();
  const [timeline, set_timeline_data] = useState();
  const [sidebar, set_sidebar_data] = useState();
  const [is_add_expense_clicked, set_is_add_expense_clicked] = useState(false);
  const [form_type, set_form_type] = useState();
  const [form_description, set_form_description] = useState();
  const [form_date, set_form_date] = useState();
  const [form_currency, set_form_currency] = useState();
  
  useEffect(() => {
    async function Fetchdata() {
      const headerResult = await useRequest("/api/header");
      set_header_data(headerResult.data);
      const timelineResult = await useRequest("/api/timeline");
      set_timeline_data(timelineResult.data);
      const sidebarResult = await useRequest("/api/sidebar");
      set_sidebar_data(sidebarResult.data);
      console.log(sidebarResult.data, "SB");
      set_loading(false);
    }
    Fetchdata();
  }, []);

  return (
    <div className="App bg-deepgreen text-white flex justify-center items-center w-full h-full">
      <div className="w-4/5 h-10/12 bg-softgray rounded justify-center px-8 py-4 flex">
        {!loading ? (
          <>
            <div className="w-3/4">
              <Header content={header_data} />
              <div className="flex justify-end mx-4 mt-2">
                <AddExpenseButton
                  click={() => set_is_add_expense_clicked(true)}
                />
                <DownloadButton />
              </div>
              {is_add_expense_clicked ? (
                <form>
                  <div className="h-96 w-full bg-white rounded shadow-md ">
                  <div className="flex">

                  
                    <div className="w-1/2 p-8">
                      <div className="h-48 p-8 bg-softgray rounded border text-center border-gray-300 flex flex-col justify-center items-center">
                        <p className="text-typogray font-bold font-nunito">
                          Envie o comprovante
                        </p>
                        <p className="text-typogray font-nunito text-md my-2">
                          Você pode inserir arquivos nos formatos PNG, JPG ou
                          PDF. Tamanho máx: 10MB
                        </p>
                        <ChooseFileButton />
                      </div>
                    </div>
                    <div className="w-1/2 p-6">
                      <div className=" text-left flex flex-col ">
                        <p className="text-typogray font-bold font-nunito">
                          Tipo *
                        </p>
                        <select value={form_type} onChange={(e)=> set_form_type(e.target.value)} defaultValue="Tipo" className="border  border-gray-300 text-openstatusgdarktray rounded h-8 w-1/2">
                          <option disabled>Tipo</option>
                          <option value="hotel-fee">Hotel</option>
                          <option value="food">Alimentação</option>
                          <option value="transport">Transporte</option>
                        </select>
                        <p className="mt-2 text-typogray font-bold font-nunito">
                          Descrição da despesa *
                        </p>
                        <input value={form_description} onChange={(e)=> set_form_description(e.target.value)} value={form_description} type="text" placeholder="Descrição da despesa" className="border  border-gray-300 text-openstatusgdarktray rounded h-8 w-1/2" />
                        <p className="mt-2 text-typogray font-bold font-nunito">
                          Data do comprovante *
                        </p>
                        <input value={form_date} onChange={(e)=> set_form_date(e.target.value)} type="date" className="border  border-gray-300 text-openstatusgdarktray rounded h-8 w-1/2" />
                        <p className="mt-2 text-typogray font-bold font-nunito">
                          Moeda *
                        </p>
                        <select value={form_currency} onChange={(e)=> set_form_currency(e.target.value)} defaultValue="Moeda" className="border  border-gray-300 text-openstatusgdarktray rounded h-8 w-1/2">
                          <option disabled>Moeda</option>
                          <option>BRL</option>
                          <option>USD</option>
                          <option>MXN</option>
                        </select>
                      </div>
                    </div>
                  </div>
                    <div className="text-black w-full flex justify-end items-end mb-2 self-end h-16 px-8">
                        <button onClick={()=>set_is_add_expense_clicked(false)} className="mx-2 font-nunito border-deepgreen rounded border-2 text-deepgreen font-semibold px-2">
                            Cancelar
                        </button>
                        <button className="mx-2 font-nunito border-2 border-savecian bg-savecian rounded text-white font-semibold px-2">
                            Salvar
                        </button>
                    </div>
                  </div>
                </form>
              ) : null}
              <Timeline timeline={timeline} />
            </div>
            <Sidebar sidebar={sidebar} />
          </>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
}

export default Main;
