import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import MyRoomStore from "./store/MyRoomStore.js";
import ProfStore from "./store/profStore.js";
import RewiewsStore from "./store/RewiewsStore.js";
import UserStore from "./store/UserStore.js";

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById("root")).render(
    <Context.Provider value={{
        user: new UserStore(),
        rewiews: new RewiewsStore(),
        profInfost: new ProfStore(),
        room: new MyRoomStore(),
    }}>
        <App /> 
    </Context.Provider>
);
