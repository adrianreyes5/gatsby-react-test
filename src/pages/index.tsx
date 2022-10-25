import * as React from "react";
import type { HeadFC } from "gatsby";

import "../styles/index.css";

import { Card, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};
const labels = ["Nov.", "Dic.", "Ene.", "Feb", "Mar."];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: labels.map(() => Math.floor(Math.random() * 30)),
      backgroundColor: "#C3E4E9",
    },
  ],
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#00A8C2" : "#308fe8",
  },
}));

const pageStyles = {
  color: "#232129",
  margin: "0 auto",
  width: "100%",
} as React.CSSProperties;

const headerStyles = {
  backgroundColor: "#0CACC4",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  position: "relative",
  height: 200,
  zIndex: -1,
  marginTop: -30,
  marginBottom: 20,
} as React.CSSProperties;

const headerIconStyles = {
  padding: "8px 14px",
  backgroundColor: "#055469",
  color: "#fff",
  width: 20,
  height: 30,
  display: "flex",
  alignItems: "center",
  position: "absolute",
  borderRadius: 6,
  left: 20,
} as React.CSSProperties;

const headerTitleStyles = {
  width: "100%",
  textAlign: "center" as "center",
  fontWeight: 400,
} as React.CSSProperties;

const mainTitleStyles = {
  textAlign: "center" as "center",
  height: 70,
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,

  zIndex: 1,
  marginTop: -70,
  backgroundColor: "#fff",
  paddingTop: 2,
  fontSize: 12,
  color: "#393E44",
  boxShadow: "20px 24px 55px -7px rgba(0,0,0,0.10)",
} as React.CSSProperties;

const mainContentStyles = {
  paddingTop: 20,
} as React.CSSProperties;

const cardStyles = {
  padding: "14px 20px",
  boxShadow: "8px 9px 5px -1px rgba(0,0,0,0.13)",
  display: "flex",
  borderRadius: 12,
  margin: "20px 14px 10px 14px",
} as React.CSSProperties;

const cardIconStyles = {
  backgroundColor: "#00A8C2",
  width: 50,
  height: 50,
  borderRadius: 8,
  marginRight: 16,
  boxShadow: "7px 3px 15px -4px rgba(0,0,0,0.69)",
} as React.CSSProperties;

const totalTextStyles = {
  color: "#3A3F45",
  fontSize: 22,
  marginBottom: 8,
  fontWeight: "bold",
} as React.CSSProperties;

const averageTextStyles = {
  marginTop: 12,
  color: "393E44",
  fontWeight: 600,
} as React.CSSProperties;

const movementsStyles = {
  marginTop: 60,
  marginBottom: 30,
  color: "393E44",
  fontWeight: 600,
  padding: "0px 20px",
} as React.CSSProperties;

const selectDateStyles = {
  padding: "0px 20px",
} as React.CSSProperties;

const listStyles = {
  borderRadius: 20,
  boxShadow: "-1px 3px 40px 12px rgba(0,0,0,0.16)",
  backgroundColor: "#fff",
  marginTop: 20,
  padding: "8px 14px",
} as React.CSSProperties;

const listTextStyles = {
  color: "393E44",
  fontWeight: 500,
  opacity: 0.8,
} as React.CSSProperties;

const buttonStyles = {
  backgroundColor: "#00a8c2",
  width: 330,
  marginTop: 30,
  padding: "16px 30px",
  borderRadius: 12,
  textTransform: "lowercase",
} as React.CSSProperties;

const movementList: { title: string; date: string; price: string }[] = [
  { title: "gásfiter", date: "20/03/22", price: "$ 25.000" },
  { title: "Compra sábanas", date: "17/03/22", price: "$ 45.000" },
  { title: "Remodelación living", date: "10/03/22", price: "$ 177.000" },
  { title: "Gastos comúnes", date: "03/03/22", price: "$ 120.000" },
];

const IndexPage = () => {
  const [date, setDate] = React.useState(3);

  return (
    <main style={pageStyles}>
      <header style={headerStyles}>
        <div style={headerIconStyles}>
          <ArrowBackIosIcon fontSize="large" color="inherit" />
        </div>

        <h4 style={headerTitleStyles}>Mis habitos</h4>
      </header>

      <div style={mainTitleStyles}>
        <h1>VIVIENDA</h1>
      </div>

      <div style={mainContentStyles}>
        <Card style={cardStyles}>
          <div style={cardIconStyles}></div>

          <div>
            <div style={totalTextStyles}>
              <span>Total: $ 370.000</span>
            </div>
            <BorderLinearProgress
              variant="determinate"
              value={50}
              style={{ width: 230 }}
            />
            <div style={averageTextStyles}>
              <span>gasto promedio: $850.00</span>
            </div>
          </div>
        </Card>

        <Bar
          options={options}
          data={data}
          style={{ marginTop: 30, padding: "0px 20px" }}
        />

        <div style={{ padding: "0 8px" }}>
          <h3 style={movementsStyles}>MOVIMIENTOS</h3>

          <FormControl style={selectDateStyles}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={date}
              label="Date"
              style={{ border: "unset" }}
              variant="standard"
            >
              <MenuItem value={3}>March 2022</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <List style={listStyles}>
            {movementList.map((item, i: number) => (
              <React.Fragment key={i}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ width: "88%" }}>
                            <div style={listTextStyles}>
                              <Typography
                                style={{
                                  color: "393E44",
                                  fontWeight: 500,
                                  opacity: 0.8,
                                }}
                                component="span"
                              >
                                {item.title.toUpperCase()}
                              </Typography>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography
                                style={listTextStyles}
                                component="span"
                              >
                                {item.date}
                              </Typography>

                              <Typography
                                style={{ color: "393E44", fontWeight: 600 }}
                                component="span"
                              >
                                {item.price}
                              </Typography>
                            </div>
                          </div>

                          <div>
                            <MoreVertIcon />
                          </div>
                        </div>
                      </React.Fragment>
                    }
                  />
                </ListItem>

                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
        </div>

        <div style={{ width: "100%", textAlign: "center", marginBottom: 30 }}>
          <Button variant="contained" style={buttonStyles}>
            Volver a Mis Hábitos
          </Button>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
