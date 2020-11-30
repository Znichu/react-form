// action types
import {FieldsData} from "../types";

export const UPDATE_FIELD_VALUE_ETHERNET_SETTINGS = 'UPDATE_FIELD_VALUE_ETHERNET_SETTINGS'
export const UPDATE_FIELD_VALUE_WIRELESS_SETTINGS = 'UPDATE_FIELD_VALUE_WIRELESS_SETTINGS'
export const TOUCHED_FIELD = 'TOUCHED_FIELD'
export const SET_ERRORS = 'SET_ERRORS'
export const RESET_FORM_FIELDS = 'RESET_FORM_FIELDS'


export const initialState = {
    ethernetSettings: {
        ethernetIpAddressRadio: 0,
        ipAddress: "",
        subnetMask: "",
        defaultGateway: "",
        ethernetDnsServerRadio: 0,
        preferredDNSServer: "",
        alternativeDNSServer: "",
    },
    wirelessSettings: {
        enableWifi: false,
        wirelessNetworkName: "Please select",
        wirelessSecurity: false,
        securityKey: "",
        wirelessIpAddressRadio: 0,
        ipAddress: "",
        subnetMask: "",
        defaultGateway: "",
        wirelessDnsServerRadio: 0,
        preferredDNSServer: "",
        alternativeDNSServer: "",
    },
    touchedFields: {} as FieldsData,
    errors: {} as FieldsData
}

export const init = (state: InitialStateType) => state;

export const formReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case  UPDATE_FIELD_VALUE_ETHERNET_SETTINGS:
            return {
                ...state,
                ethernetSettings: {
                    ...state.ethernetSettings,
                    [action.payload.field]: action.payload.value
                }
            }
        case UPDATE_FIELD_VALUE_WIRELESS_SETTINGS:
            return {
                ...state,
                wirelessSettings: {
                    ...state.wirelessSettings,
                    [action.payload.field]: action.payload.value
                }
            }
        case TOUCHED_FIELD:
            return {
                ...state,
                touchedFields: {
                    ...state.touchedFields,
                    [action.payload.field]: true
                }
            }
        case SET_ERRORS:
            return {
                ...state,
                errors: {...state.errors,
                    ...action.payload
                }
            }
        case RESET_FORM_FIELDS:
            return init(initialState)
        default:
            return initialState
    }
}

type InitialStateType = typeof initialState;