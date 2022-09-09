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
// Icon Button Add And Remove
import IconButton from '@mui/joy/IconButton';
import Checkbox from '@mui/joy/Checkbox';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
// Chip
import Chip from '@mui/joy/Chip';
import ChipDelete from '@mui/joy/ChipDelete';
import DeleteForever from '@mui/icons-material/DeleteForever';
// Alert
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';

import Typography from '@mui/joy/Typography';

import IconButton from '@mui/joy/IconButton';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

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
  const [variant, setVariant] = React.useState('solid');

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
      <Alert color="success" variant="outlined">
        This is an alert using the outlined variant. Success Alert
      </Alert>
      <Textarea
        label="Warning"
        placeholder="Type in here…"
        variant="outlined"
        color="warning"
      />
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
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

        <Badge badgeContent="1" color="danger" variant="outlined">
          <Typography fontSize="xl">🛒</Typography>
        </Badge>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Chip
            variant="outlined"
            color="danger"
            onClick={() => alert('You Clicked the Chip!')}
            endDecorator={
              <ChipDelete
                color="danger"
                variant="plain"
                onClick={() => alert('You Clicked the delete button!')}
              >
                <DeleteForever />
              </ChipDelete>
            }
          >
            Clear
          </Chip>
        </Box>
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

      <Alert
        variant="soft"
        color="success"
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        endDecorator={
          <Button
            size="sm"
            variant="outlined"
            color="success"
            sx={{
              textTransform: 'uppercase',
              fontSize: 'xs',
              fontWeight: 'xl',
            }}
          >
            Close
          </Button>
        }
      >
        Your message was sent successfully.
      </Alert>

      {/* //const [variant, setVariant] = React.useState('solid'); */}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
            gap: 1,
          }}
        >
          <Alert variant={variant} color="primary">
            Primary
          </Alert>
          <Alert variant={variant} color="neutral">
            Neutral
          </Alert>
          <Alert variant={variant} color="danger">
            Danger
          </Alert>
          <Alert variant={variant} color="info">
            Info
          </Alert>
          <Alert variant={variant} color="success">
            Success
          </Alert>
          <Alert variant={variant} color="warning">
            Warning
          </Alert>
        </Box>
        <Sheet
          sx={{
            background: 'transparent',
            pl: 4,
            borderLeft: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            level="body2"
            fontWeight="xl"
            id="variant-label"
            textColor="text.primary"
            mb={1}
          >
            Variant:
          </Typography>
          <RadioGroup
            size="sm"
            aria-labelledby="variant-label"
            name="variant"
            value={variant}
            onChange={(event) => setVariant(event.target.value)}
          >
            <Radio label="Solid" value="solid" />
            <Radio label="Soft" value="soft" />
            <Radio label="Outlined" value="outlined" />
            <Radio label="Plain" value="plain" />
          </RadioGroup>
        </Sheet>
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
