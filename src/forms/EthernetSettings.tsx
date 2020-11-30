import React from 'react';
import {EthernetSettingsFields} from "../types";
import {Input} from "../components/Input";

type PropsType = {
    ethernetSettings: EthernetSettingsFields
    updateEthernetSettings: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleBlur: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const EthernetSettings: React.FC<PropsType> = ({ethernetSettings, updateEthernetSettings, handleBlur}) => {
    return (
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
                       name={"preferredDNSServer"}
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
    );
};
