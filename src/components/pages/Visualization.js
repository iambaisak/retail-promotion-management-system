import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Analysis from "./Analysis";
import Table from "./Table";
import Dropdown from "react-dropdown";
import calendarList from "./data-files/all-reference-calendars.json";
import products from "./data-files/products.json";
import "react-dropdown/style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const calendarOptions = calendarList.map((i) => i.name);
const productOptions = [...new Set(products.products.map((i) => i.product_name))];
const categoryOptions = [...new Set(products.products.map((i) => i.category_name))];
const brandOptions = [...new Set(products.products.map((i) => i.product_brand))];
const sizeOptions =[...new Set(products.products.map((i) => i.product_size))];

export default function Visualization() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="component-routes">
      <div className="dropdown-section">
        <Dropdown
          className="calendar-dropdown"
          options={productOptions}
          placeholder="Product"
        />
        <Dropdown
          className="calendar-dropdown"
          options={categoryOptions}
          placeholder="Category"
        />
        <Dropdown
          className="calendar-dropdown"
          options={brandOptions}
          placeholder="Brand"
        />
        <Dropdown
          className="calendar-dropdown"
          options={sizeOptions}
          placeholder="Size"
        />
        <Dropdown
          className="calendar-dropdown"
          options={calendarOptions}
          placeholder="Calendar"
        />
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Efficiency Matrix" {...a11yProps(0)} />
            <Tab label="Detailed Table" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Analysis />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Table />
        </TabPanel>
      </Box>
    </div>
  );
}
