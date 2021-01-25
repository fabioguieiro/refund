import "./App.css";
import { useEffect, useState } from "react";
import { useRequest } from "./hooks/useRequest";
import { Sidebar } from "./components/Sidebar"
import { Timeline } from "./components/Timeline"
import { Header } from "./components/Header"

function App() {
  const [loading, set_loading] = useState(true);
  const [header_data, set_header_data] = useState();
  const [timeline, set_timeline_data] = useState();
  const [sidebar, set_sidebar_data] = useState();


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
        <div className="w-3/4">
        {!loading ? (
          <Header header={header_data}/>
        ):null}
          {!loading ? (
            <Timeline timeline={timeline} />
          ) : (
            <p>loading</p>
          )}
        </div>
        {!loading ?
          <Sidebar sidebar={sidebar} />
          :<p>loading</p>}
      </div>
    </div>
  );
}

export default App;
