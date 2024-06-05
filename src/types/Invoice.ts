import { InvoiceDetail } from "./InvoiceDetail"

export interface Invoice  {
    length: number
    invoiceId:number
    casherNumber:String
    township:Township
    date:String
    remark:String
    invoiceDetailDtos:Array<InvoiceDetail>
}

export enum Township {
    AHLONE,
	BAHAN,
	DAGON,
	DAGON_SEIKKAN,
	DAWBON,
	DALA,
	EAST_DAGON,
	HLAING,
	HLAINGTHAYA,
	INSEIN,
	KAMAYUT,
	KYAUKTADA,
	KYIMYINDAING,
	LANMADAW,
	LATHA,
	MAYANGON,
	MINGALA_TAUNGNYUNT,
	MINGALADON,
	NORTH_DAGON,
	NORTH_OKKALAPA,
	PAZUNDAUNG,
	PABEDAN,
	SANCHAUNG,
	SEIKKAN,
	SOUTH_DAGON,
	SOUTH_OKKALAPA,
	TAMWE,
	THAKETA,
	THINGANGYUN,
	YANKIN
}