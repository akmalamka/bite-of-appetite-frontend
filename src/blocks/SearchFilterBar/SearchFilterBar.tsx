import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
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
    <Box position={'relative'}>
      <Container
        zIndex={3}
        position={'relative'}
        minHeight={
          isRecipeList ? { xs: 125, sm: 175, md: isContent ? 56 : 250 } : 'none'
        }
        maxHeight={300}
        isContent={true}
      >
        <Box
          width={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {!isContent && (
            <Box
              marginBottom={isRecipeList ? 2 : 0}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                }}
              >
                {isRecipeList ? 'recipes' : 'food for thought'}
              </Typography>
            </Box>
          )}
          {isRecipeList && (
            <Box
              m={isContent ? 0 : 2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
              boxShadow="none"
            >
              <ClickAwayListener onClickAway={handleClickAway}>
                <Accordion
                  expanded={expanded}
                  sx={{
                    maxWidth: {
                      xs: 300,
                      sm: 600,
                      md: isContent ? 570 : 800,
                    },
                  }}
                >
                  <Box
                    width={1}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      border: '3px solid',
                      boxShadow: 2,
                      borderRadius: 6,
                      borderColor:
                        mode === 'light'
                          ? theme.palette.primary.light
                          : theme.palette.common.white,
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
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
                                  fontSize: {
                                    xs: '14px',
                                    md: '16px',
                                  },
                                  color:
                                    mode === 'light'
                                      ? theme.palette.text.primary
                                      : theme.palette.common.white,
                                },
                              },
                            }}
                            variant="outlined"
                            size="medium"
                            placeholder="Try 'Pasta'"
                            fullWidth
                            value={keyword}
                            onChange={(event) =>
                              onChangeKeyword(event.target.value)
                            }
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
                                      color:
                                        mode === 'light'
                                          ? theme.palette.primary.light
                                          : theme.palette.common.white,
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
                      <Box width={1} marginRight={1}>
                        <Typography m={2}>Tags</Typography>
                      </Box>
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
                          {isContent ? <ExpandMoreIcon /> : <FilterListIcon />}
                        </IconButton>
                      </Box>
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
                  </Box>
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
                                      onChangeCheckboxValue(
                                        j + menuIndexHandler(i),
                                      )
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
              </ClickAwayListener>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default SearchFilterBar;
