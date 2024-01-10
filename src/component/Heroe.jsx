import React from "react";
import { Button } from "primereact/button";

export default function Heroe() {
  return (
    <div className="heroe" style={{}}>
      <h2 className="p-2">
        {" "}
        <span style={{ color: "red" }} className="">
          Bienvenue sur{" "}
        </span>{" "}
        <br />
        active-recharges.com !
      </h2>
      <p className="p-2">
        Le site pour activer ou pour vous faire rembourser vos recharges
        TransCash, PCS, NeoSurf, PaySafeCard, Toneo, Steam, Google Play, iTunes,
        CashLib en toute sécurité.
      </p>
      <div className="flex flex-column align-items-center mt-6">
        <Button
          className="mt-4 w-10 border-round-lg"
          label="Activation Recharge"
          severity="danger"
        />
        <Button
          className="mt-4 w-10 border-round-lg"
          label="Remboursement Recharge"
          severity="danger"
        />
      </div>
    </div>
  );
}
