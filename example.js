"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import ReactSlider from "react-slider";

const Calculator = () => {
  const [deposit, setDeposit] = useState("");
  const [contribution, setContribution] = useState("");
  const [years, setYears] = useState(12);
  const [returnVal, setReturnVal] = useState(8);

  console.log(years);
  const handleInputChange = (setter) => (e) => {
    let input = e.target.value;
    input = input.replace(/,/g, ""); // remove existing commas
    setter(new Intl.NumberFormat().format(input)); // format number with commas
  };

  return (
    <div className={`${styles.homepage_compound_interest_calculator} `}>
      <div className="calculator_content_container">
        <div id="learn-hub-calculator" className="compound-interest-calculator">
          <div
            className={`${styles.compound_interest_content_wrapper} ${styles.content_wrapper} ${styles.general_envoy_component}`}
          >
            <div className={`${styles.header_wrapper}`}>
              <div
                className={`${styles.calculator_tagline} leading-5 text-lg tracking-wider font-medium uppercase text-eggplant mb-6`}
              >
                {"CALCULATE YOUR ESTIMATE"}
              </div>
              <h1
                className={`${styles.calculator_headline} ${styles.envoy_header_2} text-eggplant`}
              >
                {"Compound Interest Calculator"}
              </h1>
              <div
                className={`${styles.calculator_subheadline} ${styles.envoy_body} text-eggplant`}
              >
                {
                  "Use the Acorns compound interest calculator to see how your money could potentially grow over time with the power of compounding. "
                }
              </div>
            </div>
            <div className={`${styles.main_content_wrapper}`}>
              <div className={`${styles.calculator_sidebar_section}`}>
                <div className={`${styles.sidebar_segment}`}>
                  <label
                    className={`${styles.initial_deposit_label} pl-2 text-xl text-eggplant block mb-4 font-medium tracking-wider leading-5 uppercase`}
                    for="initial-deposit"
                  >
                    {"Initial Investment"}
                  </label>
                  <div
                    className={`${styles.initial_deposit_wrapper} ${styles.calculator_input_wrapper}`}
                  >
                    <input
                      id="initial-deposit"
                      type="text"
                      placeholder="100"
                      maxLength="10"
                      value={deposit}
                      onChange={handleInputChange(setDeposit)}
                      min="0"
                      pattern="[\d,]*"
                      required
                      className={`${styles.currency_input} appearance-none border-0 w-full p-0 outline-none text-gray-500`}
                    />
                    <span
                      className={`${styles.initial_deposit_prefix} ${styles.currency_prefix} text-gray-500`}
                      style={{ lineHeight: "56px" }}
                    >
                      {" "}
                      $
                    </span>
                  </div>
                </div>
                <div className={`${styles.sidebar_segment}`}>
                  <label
                    className={` ${styles.contributions_label} pl-2 text-xl text-eggplant block mb-4 font-medium tracking-wider leading-5 uppercase  `}
                    for="contributions"
                  >
                    {"Contributions"}
                  </label>
                  <div
                    className={`${styles.contributions_wrapper} ${styles.calculator_input_wrapper}`}
                  >
                    <input
                      id="contributions"
                      type="text"
                      placeholder="20"
                      maxLength="6"
                      value={contribution}
                      onChange={handleInputChange(setContribution)}
                      min="0"
                      pattern="[\d,]*"
                      required
                      className={`${styles.currency_input} appearance-none border-0 w-full p-0 outline-none text-gray-500 `}
                    />
                    <span
                      className={`${styles.contributions_prefix} ${styles.currency_prefix} text-gray-500`}
                      style={{ lineHeight: "56px" }}
                    >
                      {" "}
                      $
                    </span>
                  </div>
                  <div
                    className={`${styles.frequency_wrapper} ${styles.radio_input_wrapper} text-eggplant`}
                  >
                    <div className={`${styles.radio_option_wrapper} mb-2`}>
                      <input
                        type="radio"
                        id="annual"
                        className={`${styles.contribution_frequency}`}
                        name="contribution_frequency"
                        value="annual"
                      />
                      <label
                        for="annual"
                        className={`text-2xl leading-8 font-normal ml-3 align-baseline `}
                      >
                        Annual
                      </label>
                    </div>
                    <div className={`${styles.radio_option_wrapper} mb-2`}>
                      <input
                        type="radio"
                        id="monthly"
                        className={`${styles.contribution_frequency}`}
                        name="contribution_frequency"
                        value="monthly"
                      />
                      <label
                        for="monthly"
                        className={`text-2xl leading-8 font-normal ml-3 align-baseline`}
                      >
                        Monthly
                      </label>
                    </div>
                    <div className={`${styles.radio_option_wrapper}`}>
                      <input
                        type="radio"
                        id="weekly"
                        className={`${styles.contribution_frequency}`}
                        name="contribution_frequency"
                        value="weekly"
                      />
                      <label
                        for="weekly"
                        className={`text-2xl leading-8 font-normal ml-3 align-baseline `}
                      >
                        Weekly
                      </label>
                    </div>
                    <div className={`${styles.radio_option_wrapper}`}>
                      <input
                        type="radio"
                        id="daily"
                        className={`${styles.contribution_frequency}`}
                        name="contribution_frequency"
                        value="daily"
                      />
                      <label
                        for="daily"
                        className={`text-2xl leading-8 font-normal ml-3 align-baseline `}
                      >
                        Daily
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.years_to_grow_segment} ${styles.sidebar_segment}`}
                >
                  <label
                    className={` block text-xl mb-3 leading-5 tracking-wider  uppercase text-eggplant font-medium   `}
                    htmlFor="years_to_grow"
                  >
                    {"Years to Grow"}
                  </label>
                  <div
                    className={`${styles.years_to_grow_wrapper} ${styles.calculator_input_wrapper} text-eggplant `}
                  >
                    <input
                      id="years_to_grow"
                      className={`${styles.percentage_input} leading-8 bg-transparent cursor-default appearance-none border-0 p-0 outline-none`}
                      type="number"
                      value={years}
                      style={{ width: "1ch" }}
                      readOnly
                    />
                    <span className={`text-2xl font-normal text-eggplant `}>
                      {" "}
                      {years}
                      {" years"}
                    </span>
                  </div>
                  <div className="relative h-16 w-72">
                    <ReactSlider
                      className="absolute w-full h-2 mt-6 rounded-full shadow-lg"
                      thumbClassName="absolute h-10 w-10 bg-white border-2 border-gray-300 rounded-full cursor-pointer shadow-lg transform -translate-y-1/2"
                      value={years}
                      onChange={setYears} // Here's the change
                      max={50}
                      min={1}
                      renderTrack={(props, state) => (
                        <div
                          {...props}
                          className={`absolute h-2 rounded-full shadow-lg ${
                            state.index === 0
                              ? "bg-green-500 w-full"
                              : "bg-white right-0 left-auto"
                          }`}
                        />
                      )}
                      renderThumb={(props, state) => (
                        <div {...props}>
                          <img
                            className="w-full h-full"
                            src="/Learn-Hub-Grow-Calculator-Icon.webp"
                            alt="Image of Acorn"
                          />
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div className={`${styles.sidebar_segment}`}>
                  <label
                    className={` block text-lg mb-3 text-eggplant font-medium leading-5 tracking-wider uppercase`}
                    htmlFor="annual-return"
                  >
                    {"Average Annual Return"}
                  </label>
                  <div
                    className={`${styles.annual_return_wrapper} ${styles.calculator_input_wrapper}`}
                    onClick={(event) => {
                      document.getElementById("annual-return").focus();
                    }}
                  >
                    <input
                      type="text"
                      className={`${styles.percentage_input} appearance-none border-0 w-full p-0 outline-none text-black`}
                      id="annual-return"
                      style={{ width: `${returnVal.length > 1 ? 2 : 1}ch` }}
                      value={returnVal}
                      onInput={(event) => {
                        let val = event.target.value;
                        val = val.replace(/[^0-9]/g, ""); // replace non-digit characters
                        if (val.length > 2 || parseInt(val, 10) > 99) {
                          val = val.slice(0, 2);
                        }
                        setReturnVal(val);
                      }}
                      required
                    />
                    <span
                      className={`${styles.annual_return_suffix} ${styles.percentage_suffix} text-gray-500 `}
                    >
                      {"%"}
                    </span>
                  </div>
                  <button
                    id="calculator-submit"
                    className={`z-10 mt-4 relative items-center justify-center rounded-md font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3  bg-blurple text-white overflow-hidden inline-flex whitespace-nowrap ${styles.calculateBtn}`}
                    type="submit"
                  >
                    {"Calculate my estimate"}
                  </button>
                </div>
              </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
