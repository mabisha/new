import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function PopOverButton({ menuItem, title = "Menu" }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={0} className="">
      <div>
        <div
          ref={anchorRef}
          onClick={handleToggle}
          className={`select-none group font-semibold flex gap-1 justify-center items-center relative text-base  cursor-pointer capitalize hover:text-secondary ${
            open ? "text-secondary" : "text-black"
          } `}
        >
          <span
            className={`w-0  group-hover:w-full ${
              open ? "w-full" : "w-0"
            } absolute bottom-0 h-[2.5px] bg-secondary border-transparent transition-[width] duration-[500ms]`}
          ></span>
          {title}
          <span className="h-7 w-8 transition-transform duration-600 ease">
            <KeyboardArrowDownIcon
              sx={{ fontSize: 23 }}
              className={`${open ? "rotate-180" : "rotate-0"}`}
            />
          </span>
        </div>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          className="z-[999] "
          sx={{ boxShadow: "0" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === "right" ? "right" : "right",
              }}
            >
              <Paper
                sx={{
                  border: "1px solid #f0f0f0",
                  boxShadow: "1px 1px 5px 1px none",
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <div
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    className="min-w-[130px] gap-2 w-auto p-2 px-5 flex justify-start flex-col items-start "
                  >
                    {menuItem.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item[1]}
                        className="group relative flex justify-center items-center text-base font-semibold cursor-pointer capitalize hover:text-secondary "
                      >
                        <span className="w-0 group-hover:w-full absolute bottom-0 min-h-[2.5px] bg-secondary border-transparent transition-[width] duration-[500ms]"></span>
                        {item[0]}
                      </Link>
                    ))}
                  </div>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
