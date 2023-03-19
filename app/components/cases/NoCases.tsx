import React from "react";
import ActionButton from "../buttons/ActionButton";
import NewCaseModal from "../modals/NewCaseModal";

type AppProps = {
  caseModal: boolean;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  navTab: number;
};

const NoCases = ({ caseModal, openModal, closeModal, navTab }: AppProps) => {
  console.log(caseModal);
  return (
    <div className="mt-96 w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p>You currently have no new business cases</p>
        <ActionButton btnText="Add Case" onClick={() => openModal()} />
        {caseModal && <NewCaseModal navTab={navTab} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default NoCases;
