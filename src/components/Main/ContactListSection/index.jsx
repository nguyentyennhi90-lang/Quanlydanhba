import React from "react";

export const ContactListSection = ({ listContact , deleteContact }) => {
  return (
    <div className="lg:col-span-2 flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Danh sách liên hệ</h2>
        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm font-medium rounded-full text-gray-600 dark:text-gray-300">
          <span>{listContact.length} người</span>
        </span>
      </div>
      {listContact.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center py-16 bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl text-gray-500 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-user w-12 h-12 mb-4 opacity-20"
            aria-hidden="true"
          >
            <path d="M15 13a3 3 0 1 0-6 0"></path>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
            <circle cx="12" cy="8" r="2"></circle>
          </svg>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Chưa có liên hệ nào
          </p>
          <p className="text-sm mt-1 max-w-sm text-center">
            Danh bạ của bạn đang trống. Hãy thêm người mới ở biểu mẫu bên cạnh.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {listContact.map((contact) => (
            <div key={contact.id}>
              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border transition-all group border-gray-100 dark:border-gray-800 hover:border-blue-100 dark:hover:border-blue-900/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-lg shrink-0">
                    {contact.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-gray-900 dark:text-gray-100 truncate">
                    {contact.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone w-3 h-3 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                    <span className="truncate">{contact.phone}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 shrink-0 ml-4 transition-opacity">
                <button
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Sửa liên hệ"
                  title="Sửa liên hệ"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pencil w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </button>
                <button
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Xóa liên hệ"
                  title="Xóa liên hệ"
                  onClick={() => deleteContact(contact.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash2 lucide-trash-2 w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
