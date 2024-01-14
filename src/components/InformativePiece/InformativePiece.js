import React from "react";
import { InfoCircleFilled } from "@ant-design/icons";
import "./InformativePiece.css";

function InformativePiece() {
  return (
    <div className="informativePieceConatiner">
      <div className="informativePiece">
        <InfoCircleFilled className="informativePieceIcon" />
        <div>
          Informative piece of text that can be used regarding this modal.
        </div>
      </div>
    </div>
  );
}

export default InformativePiece;
