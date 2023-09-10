import React, { useState } from "react";

const GenericModal = ({
  launchText,
  modalTitle,
  closeText,
  closeCss,
  closeClick,
  agreeText,
  modalText,
  agreeCSS,
  agreeClick,
}) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        {launchText}
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {modalTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{modalText}</div>
            <div className="modal-footer">
              <button
                type="button"
                className={closeCss}
                data-bs-dismiss="modal"
                onClick={closeClick}
              >
                {closeText}
              </button>
              <button
                type="button"
                className={agreeCSS}
                data-bs-dismiss="modal"
                onClick={agreeClick}
              >
                {agreeText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericModal;
