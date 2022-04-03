import { getInvoices } from "../data.js";
import { Link, Outlet, NavLink, useSearchParams, useLocation } from "react-router-dom";

function QueryNavLink({to,...props}){
  let location = useLocation();
  console.log("location",location);
  return <NavLink to={to + location.search} {...props}/>
}

export default function Invoices() {
  var invoices = getInvoices();
  let [searchParams,serSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "1px solid", padding: "1rem" }}>
        <input type="text" value={searchParams.get('filter') || ''}
         onChange={(e)=>{
          let value = e.target.value;
          value? serSearchParams({filter:value}):serSearchParams({});
        }}
        />
        {invoices
        .filter(invoice => {
          let filter = searchParams.get('filter');
          if(!filter) return true;
          let name = invoice.name.toLowerCase();
          return name.includes(filter.toLowerCase());
        })
        .map(invoice => (
          <QueryNavLink
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem",
                color: isActive ? "red" : "blue"
              };
            }}
          >
            {invoice.name}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
