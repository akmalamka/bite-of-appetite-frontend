import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';

interface Filter {
  type: string;
  choice: string[];
}
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  chipData?: string[];
  isChecked?: boolean[];
  onChangeCheckboxValue?: (number) => void;
  onChangeDeleteChip?: (string) => void;
  onClearAll?: () => void;
  menuIndex?: number[];
  filterMenu?: Filter[];
  expanded?: boolean;
  onChangeFilterExpanded?: (boolean) => void;
  isRecipeList: boolean;
}

const CheckboxDropdown = ({
  chipData,
  isChecked,
  onChangeCheckboxValue,
  onChangeDeleteChip,
  onClearAll,
  menuIndex,
  filterMenu,
  expanded,
  onChangeFilterExpanded,
  isRecipeList,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const menuIndexHandler = (index) => {
    let a = 0;
    for (let i = 0; i < index; i++) {
      a += menuIndex[i];
    }
    return a;
  };

  return (
    <Accordion expanded={expanded}>
      {/* <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Tags</Typography>
      </AccordionSummary> */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={() => onChangeFilterExpanded(false)}
          sx={{
            mx: 2,
            color:
              mode === 'light'
                ? theme.palette.primary.light
                : theme.palette.common.white,
          }}
          color="primary"
          size="medium"
        >
          <FilterListIcon />
        </IconButton>
      </Box>
      {chipData.length > 0 && !expanded && (
        <Box sx={{ m: 2 }}>
          {chipData.map((item, i) => (
            <Chip
              key={i}
              label={item}
              onDelete={() => onChangeDeleteChip(item)}
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
          <Chip
            label={'Clear All'}
            sx={{ mr: 1, mb: 1 }}
            onClick={onClearAll}
          />
        </Box>
      )}
      <AccordionDetails>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            maxHeight: { xs: 250, md: 350 },
            overflow: 'auto',
          }}
        >
          {filterMenu.map((filter, i) => (
            <FormControl
              key={i}
              sx={{ m: 3 }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel
                component="legend"
                sx={{
                  '&.Mui-focused': {
                    color: mode === 'light' ? '#677788' : '#AEB0B4',
                  },
                }}
              >
                {filter.type}
              </FormLabel>
              <FormGroup>
                {filter.choice.map((item, j) => (
                  <FormControlLabel
                    key={j}
                    control={
                      <Checkbox
                        key={j + menuIndexHandler(i)}
                        checked={isChecked[j + menuIndexHandler(i)]}
                        onClick={() =>
                          onChangeCheckboxValue(j + menuIndexHandler(i))
                        }
                        name={item}
                      />
                    }
                    label={item}
                  />
                ))}
              </FormGroup>
            </FormControl>
          ))}
        </Box>
        {isChecked.includes(true) && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => onChangeFilterExpanded(false)}
              sx={{
                borderRadius: 30,
                border: 2,
                borderColor: 'primary.main',
                px: 2,
                '&:hover': {
                  border: 2,
                },
              }}
            >
              <Typography
                variant="button"
                color="text.primary"
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: 1.2,
                  fontWeight: 400,
                }}
              >
                Done
              </Typography>
            </Button>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default CheckboxDropdown;
