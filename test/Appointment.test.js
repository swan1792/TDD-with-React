import React from "react";
import ReactDOM from "react-dom/client"; 
import { act } from "react";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    it("renders the customer first name", () => {
        const customer = { firstName: "Jordan" };
        
        act(() => {
            ReactDOM.createRoot(container).render(
                <Appointment customer={customer}/>
            );
        });
        
        expect(document.body.textContent).toContain('Jordan');
    });
});