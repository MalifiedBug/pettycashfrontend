import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PaidIcon from "@mui/icons-material/Paid";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "Sign In", "Sign Up"];
const pagesnavigate = ["home", "signin", "signup"];
const settings = ["Add Bill","Profile", "Account", "Dashboard", "Logout"];
const settingsnavigate = ["addbill","profile", "account", "dashboard", "logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [auth, setAuth] = React.useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PaidIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Petty Cash Manager
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "flex", xl: "flex" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ display: { xs: "flex", md: "none", xl: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              {/* Log In Log out toggle */}
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={auth}
                      onChange={handleChange}
                      aria-label="login switch"
                    />
                  }
                  label={auth ? "Logout" : "Login"}
                />
              </FormGroup>
              {/* Log in log out toggle */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(`/${pagesnavigate[index]}`);
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <PaidIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PCM
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(page);
                    navigate(`/${pagesnavigate[index]}`);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {/* profile div toggle */}
            {auth ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="data:image/png;base64,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"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, index) => (
                    <MenuItem
                      key={setting}
                      onClick={() => {
                        handleCloseUserMenu();
                        navigate(`/${settingsnavigate[index]}`);
                      }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ):
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login/SignUp">
            <IconButton>
            <Avatar
                      alt="Remy Sharp"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAwFBMVEX19fVCQkIREiT4+PgAAADS0tP7+/s5OTn9/f0/Pz+Tk5M9PT00NDRbW1uXl5c3NzcuLi4qKirv7+/CwsLh4eEAABpTU1OhoaHp6emNjY17e3tOTk7Z2dnLy8uvr68AABdzc3NISEhoaGi2trZkZGR5eXmFhYUAABOpqam8vLyUlJptbnYpKTYZGyqcnKB5eYFBQUwAAB9eX2g2N0OKi5MmJjQhISE0M0BVVl5KSlRiY2t+f4cAAAwbHSxxcXykpKuOOQlWAAAObElEQVR4nO1di3qivBZVIyGRKIigqGi9Fa061WnpX1un7fu/1UFNABU1jEDtnKz5nF6sJIvs7OzsS8jlBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBHwAALdACG2/AgC+u0vXAgAEdMuudRsl537goddqNiYPkqV7b/xUdh6pnP1Q6tVVjaiyrHjA3kuWVaKRdq85tPUfSA5AZAxbdZnICs5HACsyUdu9ro3gD+IGYM5o1DUSzSnMTtX6FSn3Q7gBZExGmnqBlE9O1soNA90+NYCkFiYKHyvKTZV7HQS/u+dnAUCtrEWwwhu1oVANEjGWCmkPc7dLbUvrsNueltDk9qh37zjNZtNp9UZ1RTvWKXhD7TYFEqDOiOx1FyukqvQqD7al5zar8xYw5y1sD41Wv3qgXDCp125xrkGjtze1sEzyraEBQYShsTVFjAenr8p4j9rARt/S+dMAuckeLYXUS53c2QV4Y5VIjTKRwx+rVvSbGjRkl0lYzWlOR+cRK2/Fk0pyWIBJvXM7gwZAIzRcmPQnOv+a63Hr1kPUsFa5FUMLWgMSolUegpiKG8BaWO2QsnETmh91+sE0+cv1aLNQBDdHwbUbEEfYDW62ojb+dpmFoKv49weTxnePGQAlLehOy7riTkO9Gdwizfne1RrkWr4Eyf2H68x0b4Vvq75MD76TGcgN/J5oPetq8QG644+/PPq+FQ3oZTYtsNxNxBxCQ4UtHHLd+jZmI8ZLaUsJzXZo1/2L1r9rzAasC2pZT0yLAd1fFeVRUheN14N7Nr9IK0lbAaCmz2yQ3GW5ETSvNROWGFhhlyZO5is16vq8Sok3jhpVdvFGxsxAx7+plRSMBNTwL/+QqQ0CrD41EkgzlYZ9acTYyFI1IqYQ1fuUbih0KDOlnCExX1JSVMiwR+8dSX4OnwKQqKLH7fSMA8+soTYI6WQ1ZsBvMil7I7IVmw4ZruvptRIGZIKodWMICaCI0c4DtYjVUiaaEVh0kZFb3LwAyll25+GhZls5fmMZOVTkq3YWwojud4KI+7wTDCCpNMIa8aAp5WaHm5pe3y0qyiCDIfOXZu6lE0kDEjhGsUzKHc5PhtpKf8jAaDdgyj2fIIJcqXoQpsBV3o0/aspUf1zTZS6AGp3RxOL7e71H8kdQR5xirNNZRrppCyOiYs/rRwKB8yAMuczXHKS2Nu5f0WcesAHjXVuCzc0hsx6nJJdxJkOGRrSdIVc7wSbgCBqf7gE1OmTtVNUHMKiqb3N+YHQyaIvbfGMO2K2spcmMEeMdsJp2ihe3cLEhU3qpyiLY6g6M+e4e6J2JsmNO/YHauyGTU92YAek/GctVPrEA1pkB82YZn6EEqGJU0/XnA8MZOTZrApx1aoPhSdWxHQK+noJcHu8m5fW9P9sOQszWA9awcW6vhJyz+R54xKfxYWlnfmhSRvsyIOWJqvVOW0eofz49R+NcyqTdwMvZ7F48c6e/GRD1tFNTPyuJ3m6EVx3sFmmcz8ZHADo71aD2TnQP2BeI8e75UWMniySTbVkOPLA9hRPd3hmzg36QczPCZFGdZLOTNnzffbSPmy2tp4l1OUeATlaF0768FoGLPdrLfZGYymvY0m0ZrxV2NXynZrSLHTbkM6w2I3BCho/ApD6jSeZ13Y9Ak8kRMyCdtTu294PTsGUmTPrbTb9FP0Z27IqDjcgtZhhyk3fS7OxFOZ1AQST8qKb2cNBJ5q84J4u8nn/Q2towSnaBQBDEoUltv5eweTGBlnsrQkc/dQdBCEBnzDDZ96qh0uURa/GOGFWwGp8HKREAq05HBst7rnw4SW6OMSMmMzt426iVZ8wUO8TsouERww8KLBzvA4kAGH3GLB8ya4HevpR7jw3eNqizOyOjigHaeUphz59/US3GMJGoS4dzb3q+tygGDKYAlXaQTXPBM5DP/8dvSKDBtoXrFzKgN0Zlfozq/iiEMqBQ97zPI0aqAw3xcKvR0ygTBcdA0N1wWPqsYlQrMRQB9TJcbd+DyUWNdhJ7m5H6Sf2B83FSwCgxPLiSGBXpv0L4rp4ZMn47cdshunG5mtj9FcTC80A/eR0tVsJBUsRArXqqQxex5031A/GHiDdgiYmiZ8FqqhwDoaz5fY0MomdZvBnmEWslozw8ZlKjwo+G3/1Dzw5zxBwgbu4X2kUBFOf6BZrWLnMBPfi5pke+ONiIWMxip5axBTornylt1ffRy4PjDJWIoCaJHxIqJ2ZS8QPVAl5R/m54yIy0Ytvo1KDm9mslAdhhBQ5KOVojwGG4SEzRJrF5+QHHVMOa+4ASU4lhA/jgb6wWTWHBMun9Ra0RsHcTlTOklgSAzSotlagCALgr4gHIqJQVosn1pr0LQsFYCe0s0kYy8phuZIQZwHubTAbYrdMyN4Byhm0bNEUMwEm9ESMTDlaoKzipfl9CkBuM1WNem5IeTAas5iVI6oN6b/MG/6DRYLZyKrCTNIDVZk4BbB/2EkBpW82hkIPKRpgbbkvF5HyHu3yJxtczWsaAzhxUefUooQ0ZDtOWpD2xENwMlzdmyOqy4j5MWjZXih/THZn5cvxipOoBL6/7TTlQ8VjFg0nH0HVL6vbyofMVZLXFc4AC6O52P+lmRATN9fwA2X5NJYCGox04chSVVD0Q9WAfo1Tv7YsCSS3FDJL7tt33oykHeTrIdtSLTuAQNdKSLo0aTZHkz9W9Bn6othoOIXlC6MgxaO2o3Z8VSOZ6JcNsJJGOGAk7m6DVrMaktaVWbRmnBZI5KElWJYDbEJJWCXgBvaH8Ba0NZFI5WeNJLWBczqhkAliD/7RqI7iLUOpfjEOchpo/UdbNJDHlZCqY0/0ibmRIoYJub7XhPCgnGvi/6LwPuHML5LVUlb1n/ZG6v+/YM/fA6axLTmaRpiCwaI7pKF1eVZzHWpRQnPBuxEHkdovFstONrOu7uEo1YufFEUy/hGifHE29z6cZzWQVQnLluAfwcjD9EqKC7ZB62+V061BpZDHq9sHz2YlcxCK2JSx8SNKN0lLHZV49LjlNhxgbMOVqH/B5AJv6vpUj3cu08hXAR3kcQKc7WS3tsj9qaEeIPEiA2FHJJyqp9J20rSk/u/IoM+FsLjonscOMdWBQAcmgThM6rPIpC2I0TpeFswMYrIz3MIQ8uMqg2hI7KAVitUhpq8QdUIUuxOq+9xIMSJzAUxTI/hYZGNRnmfIa5rdHXYkHO3Vgl67G/sCwsmSsZHNiiV+KozoHro6rsdd/xFJzOUuErgdssWk2TFFEIAviKIPMHPbB2RDpTWrPLKUSj7M7FAgyYeSvhY6LIMWMszQwGfhRSqWezrlYwK8VVLPxufkNs3ZPBfuuvLyfa6yUsz1RDBhsmsmD5JmBHMsOz/gAltzGI8X8wPIo6XsKgF8UfhgUyADowWdWTlaDAH1wOps/AwQnESn1JI+wBJYfxEnlBKXLCIp2FJzciarIZhnGeZJAHs7f9cFP4MBkktAR6HDonx5JslX0e70o+a5ErZXEuXYgFxyweKreLhPASnDQY/t6cUR2OTiIMukT5WJ2ZeL76zFpXncAOgSV0CGmEZ7LTIFqwVHhar/29+cRAtip+4KN1e/Q8/uAdnBMMCY9vjSAIwBktELH8uLs1+WIPumhg50V4pwJTZ68BLSaobA1KV9/zmsSALARznDQHDueQAJolEJJBpiUbuUwbs9wbIciLTLp1c6frhACgLDTCkfjN/k66fY2DoDeDEczFdKu8DyRBUBkTerhg/JxMuthgkBSOXxsPZar5Yatw9PkNg/iMSaj6t5zUEgCi2HSALlufi/yh2Wt7nRtHaH9hy+AzYMXkG4PnfLB011kuXFbzyeggHrpINEIK0Ttl51JTbIAq8gCm2dANUd9mcj7nmNFc25DGR5jkxqGDx+xg7GiEq1aJUq/3e5jUq1ungF19PAWWXZu+nk7yKr0yQkf/n451t47RGneNK3cRtHpw3pVjhGfwIrWn1g/4cFPENml9uEMOsVKJn1HuvEHIwXwNLlUKZNLz+lSVK3e5HsOyu1gs0oNnfwm8/J4Zm0VSlW5n9g/jNUOYGNY1Catct8TOA/qBt5XGffL942agc4s37cPj9wm475TG3YnjUZjMqx1bGO3aH931xLA9hxdyB41+U9QEhAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQELhRgH8UOekfRa74jyJX+EchiP00nCVmmns/0dfPACX27L3mv3bfv7L37lar8fyZ/fTrzSy8PL0Wfgh2xMz3d/POvRvfFe7GRfeXOR6b5rg4+fr6mj0Wx8ViwSwWX6Vi8dldfnN/uUFH7MMdf6wX03VxPV2sp6/T6eLt8c1+KxZn1moqSfOlbb/Vlt7X5/OXSxZmlOQfTA9z+0eb/03zt/nLf5sSG08Ls9nn3Wz2Xiy6v91Ccfa5+rOUjPVs+tIpvndrz8W5JUU2lB7ms6fnD/PXx/JubhaW7tvy7sUs/Fp7NF5N7zcfH+Onlbty3dfHlTubuUv3ff1ZXK/MMDHz6cldTd9ni6U5dn8//rl7d9/MP8Xf9rryNiw+Dzt/xh6xl2yJme5i9jVz37pPi8Vk6T53Z59etx5mfxZPs8/1dLp+XxQXi9XsxSP2uH79XH+9u8+LfWIF82vx4Zrzl2nh4+lp9lSYPq3Mx5nbWdpz+7O2mA4Xy86b/SdTYndrd/H55i4fF+9uZf7uPnpD8vj8tX5x39ZP05n7/LhaLLxp8zZbP7nuevW+Xk1XX4sDYrMPc+4uzBf3c/xefHc/5q/marq+Gz+9/Z4+jf/MpvNZcZax6vj1MV4W5q8fhaUnet7r93L88vwyfx6/3S3Nj5fCcv66Ws69r96P3t94Ivt6V6C63V/HNjzvzO3L+3e3/ZWnJTcTeGxuvt/8OltePDjZpf9Py+MnQxD7afgfpeYvsNahg+EAAAAASUVORK5CYII="
                    />
            </IconButton>
            </Tooltip>
            </Box>}
            
            {/* profile div toggle */}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
