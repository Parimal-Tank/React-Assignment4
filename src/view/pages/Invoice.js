import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import "../../assets/css/style.css";

const Invoice = () => {
  let today = new Date().toLocaleDateString();

  const userInvoiceData = useSelector((state) => state.Product.Carts);

  let totalAmount = 0;

  return (
    <div>
      <div className="invoice-card">
        <div className="invoice-title">
          <div id="main-title">
            <h4>INVOICE</h4>
            <span></span>
          </div>
          <span id="date">{today}</span>
        </div>

        <div className="invoice-details">
          <table className="invoice-table">
            <thead>
              <tr>
                <td>PRODUCT</td>
                <td>UNIT</td>
                <td>PRICE</td>
              </tr>
            </thead>

            <tbody>
              {userInvoiceData.map((product) => {
                totalAmount += product.quantity * product.price;
                return (
                  <tr className="row-data">
                    <td>{product.title}</td>
                    <td id="unit">{product.quantity}</td>
                    <td>${product.price}</td>
                  </tr>
                );
              })}
              <tr className="calc-row">
                <td colspan="2">Total</td>
                <td>${totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-footer">
          <Button color="warning" outline>
            PAY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
