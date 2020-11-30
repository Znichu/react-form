import React from 'react';
import {Input} from "../components/Input";
import {WirelessSettingsFields} from "../types";
import {Select} from "../components/Select";

type PropsType = {
    wirelessSettings: WirelessSettingsFields
    updateWirelessSettings: (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLSelectElement>) => void
    handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const WirelessSettings: React.FC<PropsType> = ({wirelessSettings, updateWirelessSettings, handleBlur}) => {
    return (
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
                       name={"preferredDNSServer"}
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
    );
};
