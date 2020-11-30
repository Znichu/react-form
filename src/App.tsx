import React, {useReducer} from 'react';
import './App.css';
import {
    formReducer,
    init,
    initialState,
    SET_ERRORS,
    TOUCHED_FIELD,
    UPDATE_FIELD_VALUE_ETHERNET_SETTINGS,
    UPDATE_FIELD_VALUE_WIRELESS_SETTINGS
} from "./reducer/form-reducer";
import {fieldValidation} from "./fieldValidation";
import {WirelessSettings} from "./forms/WirelessSettings";
import {EthernetSettings} from "./forms/EthernetSettings";


function App() {
    const [state, dispatch] = useReducer(formReducer, initialState, init)

    const touchedField = (field: string) => {
        dispatch({
            type: TOUCHED_FIELD,
            payload: {
                field,
            },
        })
    }

    const updateEthernetSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name: field} = e.target
        const value = e.target.type === "radio" ? Number(e.target.value) : e.target.value
        touchedField(field)
        dispatch({
            type: UPDATE_FIELD_VALUE_ETHERNET_SETTINGS,
            payload: {
                field,
                value,
            },
        })
    }

    const updateWirelessSettings = (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLSelectElement>) => {
        const {name: field} = e.target
        const value = e.target.type === "checkbox" ? e.target.checked :
            e.target.type === "radio" ? Number(e.target.value) : e.target.value;
        touchedField(field)
        dispatch({
            type: UPDATE_FIELD_VALUE_WIRELESS_SETTINGS,
            payload: {
                field,
                value,
            },
        })
    }
    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        const error = fieldValidation(name, value);
        dispatch({
            type: SET_ERRORS,
            payload: error && {[name]: state.touchedFields[name] && error}

        })
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formValidation = Object.keys(state)
        console.log(formValidation)

    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                    <EthernetSettings ethernetSettings={state.ethernetSettings}
                                      updateEthernetSettings={updateEthernetSettings}
                                      handleBlur={handleBlur}
                    />
                    <WirelessSettings wirelessSettings={state.wirelessSettings}
                                      updateWirelessSettings={updateWirelessSettings}
                                      handleBlur={handleBlur}
                    />
                </div>
                <div>
                    <button onClick={handleSubmit}>save</button>
                </div>
            </form>
        </div>
    );
}

export default App;
