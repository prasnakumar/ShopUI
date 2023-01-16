import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./product-card.scss";
import { useState ,useEffect} from "react";
const qty='QTY '
function Productcard() {
  const [first, setfirst] = useState<boolean>(true);
  const [valueCount, setvalue] = useState(0);
  const updateValue = (type: string, val: number) => {
    const number:number = type === "add" ? val+1 : val-1;
    setvalue(number);
    console.log(number,type)
  };
  useEffect(() => {
    console.log("prasandn123",valueCount);
   Number(valueCount) <= 0 &&  setfirst(true)
  }, [valueCount])
  
  return (
    <div className="product-card">
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <div className="img-width">
            <img
              src={require("./1.jpg")}
              alt="Girl in a jacket"
              width="220"
              height="220"
            />
          </div>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Vegettable (Focus)
          </Typography>
          <div className="dropdown-style">
            <Select
              value={10}
              //onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>10kg-10Rs</MenuItem>
              <MenuItem value={20}>120kg-120Rs</MenuItem>
              <MenuItem value={30}>130kg-130Rs</MenuItem>
            </Select>
          </div>
        </CardContent><span className="btm-header-card">
        Standard Delivery: Tomorrow</span>
        <CardActions>
          {first ? (
            <>
              <span className="btm-header-card">
              {qty}
                <input
                  maxLength={5}
                  type={"Number"}
                  className="input-label"
                  onChange={(e:any)=>setvalue(Number(e.target.value))}
                />{" "}
                <Button
                  onClick={() => {
                    setfirst(false);
                  }}
                  disabled={valueCount<=0}
                >
                  Add
                </Button>
              </span>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  updateValue("sub", valueCount);
                }}
              >
                -
              </Button>
              <div className="count-in-display">{valueCount} in basket</div>
              <Button onClick={() => updateValue("add", valueCount)}>+</Button>
            </>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default Productcard;
