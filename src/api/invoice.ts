import axios from "axios";

const BASE_URL = "http://localhost:8080/invoice"

export const getInvoiceList = () => axios.get(BASE_URL)