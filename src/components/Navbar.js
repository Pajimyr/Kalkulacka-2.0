import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return <Box>
        <Link to="/kalkulacka">
          <Typography sx={{pb:"50px"}}>Kalkulačka</Typography>
        </Link>
    </Box>
}