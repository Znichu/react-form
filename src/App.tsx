import React, {useReducer} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {
    formReducer,
    init,
    initialState, SET_ERRORS,
    TOUCHED_FIELD,
    UPDATE_FIELD_VALUE_ETHERNET_SETTINGS,
    UPDATE_FIELD_VALUE_WIRELESS_SETTINGS
} from "./reducer/form-reducer";
import {Select} from "./components/Select";
import {fieldValidation} from "./fieldValidation";


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
        const { name, value } = e.target;
        const error = fieldValidation(name, value);
        const newError = error && { [name]: state.touchedFields[name] && error};
        dispatch({
            type: SET_ERRORS,
            payload: {
                
            }
        })
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const {ethernetSettings, wirelessSettings} = state
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                    <div>
                        <h4>Ethernet Settings</h4>
                        <div className={"radio-container"}>
                            <Input placeholder={"Obtain an IP address automatically (DHCP/BootP)"}
                                   name={"ethernetIpAddressRadio"}
                                   type={"radio"}
                                   value={0}
                                   checked={ethernetSettings.ethernetIpAddressRadio === 0}
                                   onChange={updateEthernetSettings}
                            />

                            <Input placeholder={"Use the following IP address:"}
                                   name={"ethernetIpAddressRadio"}
                                   type={"radio"}
                                   value={1}
                                   checked={ethernetSettings.ethernetIpAddressRadio === 1}
                                   onChange={updateEthernetSettings}
                            />
                        </div>
                        <div className={"field-container"}>
                            <Input placeholder={"IP address:"}
                                   name={"ipAddress"}
                                   value={ethernetSettings.ipAddress}
                                   type={"text"}
                                   onChange={updateEthernetSettings}
                                   required={true}
                                   handleBlur={handleBlur}
                            />

                            <Input placeholder={"Subnet Mask:"}
                                   name={"subnetMask"}
                                   value={ethernetSettings.subnetMask}
                                   type={"text"}
                                   onChange={updateEthernetSettings}
                                   required={true}
                                   handleBlur={handleBlur}
                            />

                            <Input placeholder={"Default Gateway:"}
                                   name={"defaultGateway"}
                                   value={ethernetSettings.defaultGateway}
                                   type={"text"}
                                   onChange={updateEthernetSettings}
                                   handleBlur={handleBlur}
                            />
                        </div>
                        <div className={"radio-container"}>
                            <Input placeholder={"Obtain DNS server address automatically"}
                                   name={"ethernetDnsServerRadio"}
                                   type={"radio"}
                                   value={0}
                                   checked={ethernetSettings.ethernetDnsServerRadio === 0}
                                   onChange={updateEthernetSettings}/>

                            <Input placeholder={"Use the following DNS server address:"}
                                   name={"ethernetDnsServerRadio"}
                                   type={"radio"}
                                   value={1}
                                   checked={ethernetSettings.ethernetDnsServerRadio === 1}
                                   onChange={updateEthernetSettings}/>
                        </div>
                        <div className={"field-container"}>
                            <Input placeholder={"Preferred DNS server:"}
                                   name={"referredDNSServer"}
                                   value={ethernetSettings.preferredDNSServer}
                                   type={"text"}
                                   onChange={updateEthernetSettings}
                                   required={true}
                            />

                            <Input placeholder={"Alternative DNS server:"}
                                   name={"alternativeDNSServer"}
                                   value={ethernetSettings.alternativeDNSServer}
                                   type={"text"}
                                   onChange={updateEthernetSettings}/>
                        </div>
                    </div>

                    <div>
                        <h4>Wireless Settings</h4>
                        <div>
                            <Input placeholder={"Enable wifi:"}
                                   name={"enableWifi"}
                                   checked={wirelessSettings.enableWifi}
                                   type={"checkbox"}
                                   onChange={updateWirelessSettings}/>
                        </div>
                        <div>
                            <Select placeholder={"Wireless Network Name"}
                                    value={wirelessSettings.wirelessNetworkName}
                                    onChange={updateWirelessSettings}/>
                        </div>
                        <div>
                            <Input placeholder={"Enable Wireless Security:"}
                                   name={"wirelessSecurity"}
                                   checked={wirelessSettings.wirelessSecurity}
                                   type={"checkbox"}
                                   onChange={updateWirelessSettings}/>
                        </div>
                        <div>
                            <Input placeholder={"Security Key:"}
                                   name={"securityKey"}
                                   value={wirelessSettings.securityKey}
                                   type={"text"}
                                   onChange={updateWirelessSettings}/>
                        </div>
                        <div>
                            <Input placeholder={"Obtain an IP address automatically (DHCP/BootP)"}
                                   name={"wirelessIpAddressRadio"}
                                   type={"radio"}
                                   value={0}
                                   checked={wirelessSettings.wirelessIpAddressRadio === 0}
                                   onChange={updateWirelessSettings}/>

                            <Input placeholder={"Use the following IP address:"}
                                   name={"wirelessIpAddressRadio"}
                                   type={"radio"}
                                   value={1}
                                   checked={wirelessSettings.wirelessIpAddressRadio === 1}
                                   onChange={updateWirelessSettings}/>
                        </div>
                        <div>
                            <Input placeholder={"IP address:"}
                                   name={"ipAddress"}
                                   value={wirelessSettings.ipAddress}
                                   type={"text"}
                                   onChange={updateWirelessSettings}
                                   required={true}
                            />
                        </div>
                        <div>
                            <Input placeholder={"Subnet Mask:"}
                                   name={"subnetMask"}
                                   value={wirelessSettings.subnetMask}
                                   type={"text"}
                                   onChange={updateWirelessSettings}
                                   required={true}
                            />
                        </div>
                        <div>
                            <Input placeholder={"Default Gateway:"}
                                   name={"defaultGateway"}
                                   value={wirelessSettings.defaultGateway}
                                   type={"text"}
                                   onChange={updateWirelessSettings}/>
                        </div>
                        <div>
                            <Input placeholder={"Obtain DNS server address automatically"}
                                   name={"wirelessDnsServerRadio"}
                                   type={"radio"}
                                   value={0}
                                   checked={wirelessSettings.wirelessDnsServerRadio === 0}
                                   onChange={updateWirelessSettings}/>

                            <Input placeholder={"Use the following DNS server address:"}
                                   name={"wirelessDnsServerRadio"}
                                   type={"radio"}
                                   value={1}
                                   checked={wirelessSettings.wirelessDnsServerRadio === 1}
                                   onChange={updateWirelessSettings}/>
                        </div>
                        <div>
                            <Input placeholder={"Preferred DNS server:"}
                                   name={"referredDNSServer"}
                                   value={wirelessSettings.preferredDNSServer}
                                   type={"text"}
                                   onChange={updateWirelessSettings}
                                   required={true}
                            />

                        </div>
                        <div>
                            <Input placeholder={"Alternative DNS server:"}
                                   name={"alternativeDNSServer"}
                                   value={wirelessSettings.alternativeDNSServer}
                                   type={"text"}
                                   onChange={updateWirelessSettings}/>
                        </div>

                    </div>
                </div>
                <div>
                    <button onClick={handleSubmit}>save</button>
                </div>
            </form>
        </div>
    );
}

export default App;
