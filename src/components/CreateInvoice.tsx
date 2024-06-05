import React, { useState } from "react";
import { Township } from "../types/Invoice";

const CreateInvoice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRadioChange = (event: {
    target: { id: React.SetStateAction<string> };
  }) => {
    setSelectedRadio(event.target.id);
  };

  console.log(selectedRadio);

  const townships = Object.keys(Township).filter((key) => isNaN(Number(key)));

  return (
    <div className="w-[85%] mx-auto mt-10 border-2 rounded-lg p-5">
      <form action="">
        <div>
          <header className="font-semibold">INVOICE</header>
          <div className="border-2 rounded-lg p-5 mt-3">
            <div className="grid grid-cols-3 gap-16">
              <div className="flex justify-around items-center">
                <div>Casher Number</div>
                <input
                  type="number"
                  className="focus:border-none focus:ring-0 py-2 px-3 border-none ring-1 ring-gray-500"
                  placeholder="casher number"
                />
              </div>
              <div className="flex justify-around items-center">
                <div>Date</div>
                <input
                  type="date"
                  className="focus:border-none focus:ring-0 py-2 px-3 border-none ring-1 ring-gray-500"
                  placeholder=""
                />
              </div>

              <div className="flex justify-around items-center relative">
                <div className="absolute left-7">Casher Number</div>

                <div className="absolute right-0 top-0 w-fit">
                  <button
                    id="dropdownRadioButton"
                    onClick={toggleDropdown}
                    className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    <div>Township</div>
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div
                      id="dropdownDefaultRadio"
                      className="z-10 w-fit bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownRadioButton"
                      >
                        {townships.map((key) => {
                          return (
                            <>
                              <li>
                                <div className="flex items-center">
                                  <input
                                    id={key}
                                    type="radio"
                                    value={key}
                                    name={key}
                                    checked={
                                      selectedRadio === key
                                    }
                                    onChange={handleRadioChange}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  />
                                  <label
                                    htmlFor="default-radio-1"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    {key}
                                  </label>
                                </div>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateInvoice;
