import React, { useState } from "react";
import { ContactFormSection } from "./ContactFormSection";
import { ContactListSection } from "./ContactListSection";

export const Main = ({ listContact, addContact, deleteContact }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ContactFormSection addContact={addContact} />

        <ContactListSection listContact={listContact} deleteContact={deleteContact} />
      </div>
    </div>
  );
};