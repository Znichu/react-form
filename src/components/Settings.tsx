import React from 'react';
import {Input} from "./Input";
import {EthernetSettingsFields, NamesFields, WirelessSettingsFields} from "../types";
import {Radio} from "./Radio";

type PropsType = {
    names: NamesFields
    formFields: EthernetSettingsFields | WirelessSettingsFields
    createChangeHandler: (key: any) => (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Settings: React.FC<PropsType> = ({formFields, createChangeHandler, names}) => {
    return (
        <>
            {/*<div>*/}
            {/*    <Radio placeholder={"Obtain an IP address automatically (DHCP/BootP)"}*/}
            {/*           name={names.first}*/}
            {/*           checked={} onChange={}/>*/}
            {/*</div>*/}

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
            {/*<div>*/}
            {/*    <Input placeholder={"Obtain DNS server address automatically"}*/}
            {/*           name={"obtainDNS"}*/}
            {/*           type={"radio"}*/}
            {/*           value={"obtainDNS"}*/}
            {/*           checked={formFields. === "obtainDNS"}*/}
            {/*           onChange={createChangeHandler("dnsServerRadio")}/>*/}

            {/*    <Input placeholder={"Use the following DS server address:"}*/}
            {/*           name={"followingDNS"}*/}
            {/*           type={"radio"}*/}
            {/*           value={"followingDNS"}*/}
            {/*           checked={formFields.dnsServerRadio === "followingDNS"}*/}
            {/*           onChange={createChangeHandler("dnsServerRadio")}/>*/}
            {/*</div>*/}
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
        </>
    );
};
