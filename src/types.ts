export type EthernetSettingsFields = {
    ethernetIpAddressRadio: number
    ipAddress: string
    subnetMask: string
    defaultGateway: string
    ethernetDnsServerRadio: number
    preferredDNSServer: string
    alternativeDNSServer: string
}

export type WirelessSettingsFields = {
    enableWifi: boolean
    wirelessNetworkName: string
    wirelessSecurity: boolean
    securityKey: string
    wirelessIpAddressRadio: number
    ipAddress: string
    subnetMask: string
    defaultGateway: string
    wirelessDnsServerRadio: number
    preferredDNSServer: string
    alternativeDNSServer: string
}

export type NamesFields = {
    first: string
    second: string
}

export type FieldsData = {
    [key: string]: string | boolean
}