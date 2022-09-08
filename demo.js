import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Checkbox from '@mui/joy/Checkbox';
import Close from '@mui/icons-material/Close';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';
import Badge from '@mui/joy/Badge';
import Typography from '@mui/joy/Typography';

import IconButton from '@mui/joy/IconButton';
import Checkbox from '@mui/joy/Checkbox';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valueText(value) {
  return `${value}°C`;
}
const TextareaColors = () => {
  const [dark, setDark] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [showZero, setShowZero] = React.useState(false);
  return (
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Textarea
        label="Primary"
        placeholder="Type in here…"
        variant="outlined"
        color="primary"
      />
      <Textarea
        label="Neutral"
        placeholder="Type in here…"
        variant="outlined"
        color="neutral"
      />
      <Select defaultValue="dog">
        <Option value="dog">Dog</Option>
        <Option value="cat">Cat</Option>
        <Option value="fish">Fish</Option>
        <Option value="bird">Bird</Option>
      </Select>
      <Textarea
        label="Danger"
        placeholder="Type in here…"
        variant="outlined"
        color="danger"
      />
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valueText}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
      <Textarea
        label="Warning"
        placeholder="Type in here…"
        variant="outlined"
        color="warning"
      />
      <Checkbox uncheckedIcon={<Close />} label="Check Box" />
      <Switch
        color={dark ? 'primary' : 'danger'}
        componentsProps={{ input: { 'aria-label': 'dark mode' } }}
        startDecorator={
          <LocalFireDepartmentRoundedIcon
            sx={{ color: dark ? 'text.tertiary' : 'danger.600' }}
          />
        }
        endDecorator={
          <WavesRoundedIcon
            sx={{ color: dark ? 'primary.500' : 'text.tertiary' }}
          />
        }
        checked={dark}
        onChange={(event) => setDark(event.target.checked)}
      />
      <Box>
        <Badge badgeContent="1" color="danger" variant="outlined">
          <Typography fontSize="xl">🛒</Typography>
        </Badge>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Badge badgeContent={count} showZero={showZero}>
          <Typography fontSize="xl">🛍</Typography>
        </Badge>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'background.level1',
          }}
        >
          <IconButton
            size="sm"
            variant="outlined"
            onClick={() => setCount((c) => c - 1)}
          >
            <Remove />
          </IconButton>
          <Typography fontWeight="md" textColor="text.secondary">
            {count}
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={() => setCount((c) => c + 1)}
          >
            <Add />
          </IconButton>
          <Checkbox
            onChange={(event) => setShowZero(event.target.checked)}
            checked={showZero}
            label="show zero"
          />
        </Box>
      </Box>
      <TextField
        label="Label"
        placeholder="Type in here…"
        error
        helperText="You got this wrong. Try again!"
      />
      <Textarea
        placeholder="Type in here…"
        error
        defaultValue="Oh no!, something is definitely wrong."
      />
      <Textarea
        placeholder="Type in here…"
        defaultValue="Try to put the text more than 4 lines."
        minRows={2}
        maxRows={4}
      />
      <Button startIcon={<Add />}>Add to cart</Button>
      <Button variant="soft" endIcon={<KeyboardArrowRight />} color="success">
        Checkout
      </Button>
      <Button size="md" variant="outlined" color="info">
        Outlined
      </Button>
    </Box>
  );
};

export default TextareaColors;
