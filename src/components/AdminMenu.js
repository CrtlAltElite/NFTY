import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrecisionManufacturingTwoToneIcon from '@mui/icons-material/PrecisionManufacturingTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';

const actions = [
  { icon: <PrecisionManufacturingTwoToneIcon />, name: 'Add/Edit Item' },
  { icon: <CategoryTwoToneIcon />, name: 'Add/Edit Category' },

];

export default function AdminMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Admin Menu"
        sx={{ position: 'sticky', bottom: 0, right: 20 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
  </>
  );
}
