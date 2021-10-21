import React, {useState} from "../../_snowpack/pkg/react.js";
export const PeriodSelector = (props) => {
  const [options] = useState([
    {
      value: "3",
      label: "3 Month"
    },
    {
      value: "6",
      label: "6 Month"
    },
    {
      value: "12",
      label: "12 Month"
    }
  ]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "calendars-select"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "month-select"
  }, /* @__PURE__ */ React.createElement("select", {
    defaultValue: "12",
    className: "show-tick",
    onChange: (event) => {
      props.onChange(event.target.value);
    }
  }, options.map(({label, value}) => /* @__PURE__ */ React.createElement("option", {
    key: value,
    value
  }, label)))));
};
