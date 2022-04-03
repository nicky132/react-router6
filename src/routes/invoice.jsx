import { useParams,useNavigate } from "react-router";
import { getInvoice, deleteInvoice } from "../data";
import { useSearchParams } from "react-router-dom";
export default function Invoice() {
  let [searchParams,serSearchParams] = useSearchParams();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10))[0];
  let navigate = useNavigate();
  console.log("params",searchParams.get('filter'));
  console.log("params",searchParams.get('name'));
  console.log("params",searchParams.get('age'));
  console.log("params",params);
  return (
    <main>
      <h2>{invoice.name}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>{invoice.due}</p>
      <button onClick={()=>{
        deleteInvoice(invoice.number);
        navigate("/invoices");
      }}>delete</button>
    </main>
  );
}
