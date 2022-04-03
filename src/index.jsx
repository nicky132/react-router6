import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Invoices from "./routes/invoices";
import Expenses from "./routes/expenses";
import Invoice from "./routes/invoice";

const rootElement = document.getElementById("root");
// 0. 无匹配路由;
// 1. 路由嵌套;  outLet
// 2. 无匹配路由; 能够匹配到任意项目;
// 3. 路由传参;
// 4. 索引路由;
// 5. NavLink
// 6. 搜索参数;
// 7. 自定义NavLink
// 8. 自定义导航;
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>请选择任意一项</p>
              </main>
            }
          />

          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>页面出错</p>
            </main>
          }
        />
        <Route path="/expenses" element={<Expenses />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
