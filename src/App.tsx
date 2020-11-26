import React from 'react';
import './App.css';
import useFormFields from "./useFormFieldsHook";
import {Input} from "./components/Input";
import {Select} from "./components/Select";

const options = ["wifi1", "wifi2", "wifi3"];

function App() {

    const {formFields, createChangeHandler} = useFormFields({
        ipAddressRadio: "obtainIp",
        dnsServerRadio: "obtainDNS",
        ipAddress: "",
        subnetMask: "",
        defaultGateway: "",
        preferredDNSServer: "",
        alternativeDNSServer: "",
        enableWifi: false,
        wirelessNetworkName: "",
        wirelessSecurity: false,
        securityKey: ""

    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formFields.ipAddress, formFields.subnetMask,
            formFields.defaultGateway, formFields.preferredDNSServer, formFields.alternativeDNSServer);
    };


    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                    <div>
                        <h4>Ethernet Settings</h4>
                        <div>
                            <Input placeholder={"Obtain an IP address automatically (DHCP/BootP)"}
                                   name={"obtainIpAddress"}
                                   type={"radio"}
                                   value={"obtainIp"}
                                   checked={formFields.ipAddressRadio === "obtainIp"}
                                   onChange={createChangeHandler("ipAddressRadio")}/>

                            <Input placeholder={"Use the following IP address:"}
                                   name={"followingIpAddress"}
                                   type={"radio"}
                                   value={"followingIp"}
                                   checked={formFields.ipAddressRadio === "followingIp"}
                                   onChange={createChangeHandler("ipAddressRadio")}/>
                        </div>
                        <div>
                            <Input placeholder={"IP address:"}
                                   name={"ipAddress"}
                                   value={formFields.ipAddress}
                                   type={"text"}
                                   onChange={createChangeHandler("ipAddress")}/>
                        </div>
                        <div>
                            <Input placeholder={"Subnet Mask:"}
                                   name={"subnetMask"}
                                   value={formFields.subnetMask}
                                   type={"text"}
                                   onChange={createChangeHandler("subnetMask")}/>
                        </div>
                        <div>
                            <Input placeholder={"Default Gateway:"}
                                   name={"defaultGateway"}
                                   value={formFields.defaultGateway}
                                   type={"text"}
                                   onChange={createChangeHandler("defaultGateway")}/>
                        </div>
                        <div>
                            <Input placeholder={"Obtain DNS server address automatically"}
                                   name={"obtainDNS"}
                                   type={"radio"}
                                   value={"obtainDNS"}
                                   checked={formFields.dnsServerRadio === "obtainDNS"}
                                   onChange={createChangeHandler("dnsServerRadio")}/>

                            <Input placeholder={"Use the following DNS server address:"}
                                   name={"followingDNS"}
                                   type={"radio"}
                                   value={"followingDNS"}
                                   checked={formFields.dnsServerRadio === "followingDNS"}
                                   onChange={createChangeHandler("dnsServerRadio")}/>
                        </div>
                        <div>
                            <Input placeholder={"Preferred DNS server:"}
                                   name={"referredDNSServer"}
                                   value={formFields.preferredDNSServer}
                                   type={"text"}
                                   onChange={createChangeHandler("preferredDNSServer")}/>

                        </div>
                        <div>
                            <Input placeholder={"Alternative DNS server:"}
                                   name={"alternativeDNSServer"}
                                   value={formFields.alternativeDNSServer}
                                   type={"text"}
                                   onChange={createChangeHandler("alternativeDNSServer")}/>
                        </div>
                    </div>

                    <div>
                        <h4>Wireless Settings</h4>
                        <div>
                            <Input placeholder={"Enable wifi:"}
                                   name={"enableWifi"}
                                   checked={formFields.enableWifi}
                                   type={"checkbox"}
                                   onChange={createChangeHandler("enableWifi")}/>
                        </div>
                        {/*                    <div>
                        <Select options={options}
                                placeholder={"Wireless Network Name"}
                                value={formFields.wirelessNetworkName}
                                onChange={createChangeHandler("wirelessNetworkName")}/>
                    </div>*/}
                        <div>
                            <Input placeholder={"Enable Wireless Security:"}
                                   name={"wirelessSecurity"}
                                   checked={formFields.wirelessSecurity}
                                   type={"checkbox"}
                                   onChange={createChangeHandler("wirelessSecurity")}/>
                        </div>
                        <div>
                            <Input placeholder={"Security Key:"}
                                   name={"securityKey"}
                                   value={formFields.securityKey}
                                   type={"text"}
                                   onChange={createChangeHandler("securityKey")}/>
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
