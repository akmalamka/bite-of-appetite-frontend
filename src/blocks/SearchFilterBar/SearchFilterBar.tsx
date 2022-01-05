import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from 'components/Container';
import './placeholder.css';
import { ButtonComponent } from 'blocks';

interface Filter {
  type: string;
  choice: string[];
}
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  keyword?: string;
  onChangeKeyword?: (keyword) => void;
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
  isContent?: boolean;
}

const SearchFilterBar = ({
  keyword,
  onChangeKeyword,
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
  isContent,
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

  const handleClickAway = () => {
    if (expanded) {
      onClearAll();
    }
    onChangeFilterExpanded(true);
  };

  return (
    <Box>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Accordion
          expanded={expanded}
          sx={{
            maxWidth: {
              xs: 300,
              sm: 400,
              md: 600,
            },
            boxShadow: 'none',
          }}
        >
          <Box
            width={1}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 6,
              borderColor:
                mode === 'light'
                  ? theme.palette.primary.light
                  : theme.palette.common.white,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                border: '2px solid',
                borderRadius: 30,
              }}
            >
              {!isContent && (
                <Box width={1} marginRight={1}>
                  <TextField
                    sx={{
                      height: 54,
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: '0 !important',
                      },
                      input: {
                        '&::placeholder': {
                          fontFamily: 'Inter',
                          fontSize: {
                            xs: '14px',
                            md: '16px',
                          },
                          color: theme.palette.text.primary,
                        },
                      },
                    }}
                    variant="outlined"
                    size="medium"
                    placeholder="Try 'Pasta'"
                    fullWidth
                    value={keyword}
                    onChange={(event) => onChangeKeyword(event.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                            sx={{
                              color: theme.palette.primary.main,
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              )}
              {isContent && (
                <Box width={1} marginRight={1}>
                  <Typography m={2}>Tags</Typography>
                </Box>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => onChangeFilterExpanded(false)}
                  sx={{
                    mx: 2,
                    color: theme.palette.primary.main,
                  }}
                  size="medium"
                >
                  {isContent ? <ExpandMoreIcon /> : <FilterListIcon />}
                </IconButton>
              </Box>
            </Box>
            {chipData.length > 0 && !expanded && (
              <Box sx={{ m: 2 }}>
                {chipData.map((item, i) => (
                  <Chip
                    key={i}
                    label={
                      <Typography variant={'button'} fontFamily={'Inter'}>
                        {item}
                      </Typography>
                    }
                    onDelete={() => onChangeDeleteChip(item)}
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
                <Chip
                  label={
                    <Typography variant={'button'} fontFamily={'Inter'}>
                      Clear All
                    </Typography>
                  }
                  sx={{ mr: 1, mb: 1 }}
                  onClick={onClearAll}
                />
              </Box>
            )}
          </Box>
          <AccordionDetails>
            <Box
              sx={{
                position: 'sticky',
                top: 50,
                zIndex: 3,
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
                      color: 'text.primary',
                      fontFamily: 'Inter',
                      // '&.Mui-focused': {
                      //   color: mode === 'light' ? '#677788' : '#AEB0B4',
                      // },
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
                            sx={{ color: 'text.primary' }}
                          />
                        }
                        label={
                          <Typography variant={'button'} fontFamily={'Inter'}>
                            {item}
                          </Typography>
                        }
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
                <ButtonComponent
                  text={'Done'}
                  onClick={() => onChangeFilterExpanded(false)}
                />
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      </ClickAwayListener>
    </Box>
  );
};

export default SearchFilterBar;
