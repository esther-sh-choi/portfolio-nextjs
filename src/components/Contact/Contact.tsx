import { styles } from "./ContactStyles";
import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [contactState, setContactState] = useState({
    first: "",
    last: "",
    email: "",
    telephone: "",
    message: "",
    submissionDate: "",
  });

  const handleSubmit = () => {
    axios
      .post(
        "https://getform.io/f/20953702-3538-4297-8f5f-15bc31af8e55",
        {
          ...contactState,
          submissionDate: new Date().toLocaleString(),
        },
        { headers: { Accept: "application/json" } }
      )
      .then((response) => {
        setContactState({
          first: "",
          last: "",
          email: "",
          telephone: "",
          message: "",
          submissionDate: "",
        });
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="m-5 sm:m-20 md:m-auto flex flex-col justify-center h-full max-w-xl">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>

        <div className="h-100 w-100 shadow-lg shadow-gray-400 rounded-xl p-5 sm:p-7">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div
              id="name-field"
              className="flex w-full flex-col sm:flex-row mb-3"
            >
              <div className="flex-1 mb-3 sm:mr-5 sm:mb-0">
                <label className="block sm:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  First Name *
                </label>
                <input
                  id="first"
                  className={styles.input}
                  placeholder=""
                  value={contactState.first}
                  onChange={(event) =>
                    setContactState((prev) => ({
                      ...prev,
                      first: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block sm:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name *
                </label>
                <input
                  id="last"
                  className={styles.input}
                  value={contactState.last}
                  onChange={(event) =>
                    setContactState((prev) => ({
                      ...prev,
                      last: event.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>
            <div className="flex w-full flex-col sm:flex-row mb-3">
              <div className="flex-1 mb-3 sm:mr-5 sm:mb-0">
                <label className="block sm:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  placeholder="email@domain.com"
                  value={contactState.email}
                  onChange={(event) =>
                    setContactState((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block sm:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Telephone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className={styles.input}
                  value={contactState.telephone}
                  onChange={(event) =>
                    setContactState((prev) => ({
                      ...prev,
                      telephone: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                value={contactState.message}
                onChange={(event) =>
                  setContactState((prev) => ({
                    ...prev,
                    message: event.target.value,
                  }))
                }
                required
              />
            </div>
            <button className={styles.sendButton} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
