import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const { currentVan } = useOutletContext();

  return (
    <section className="space-y-3">
      <h4 className="text-[14px] font-bold">
        Name: <span className="font-medium">{currentVan.name}</span>
      </h4>

      <h4 className="text-[14px] font-bold">
        Category: <span className="font-medium">{currentVan.type}</span>
      </h4>

      <h4 className="text-[14px] font-bold">
        Description:{" "}
        <span className="font-medium">{currentVan.description}</span>
      </h4>

      <h4 className="text-[14px] font-bold">
        Visibility: <span className="font-medium">Public</span>
      </h4>
    </section>
  );
}

export default HostVanInfo;
