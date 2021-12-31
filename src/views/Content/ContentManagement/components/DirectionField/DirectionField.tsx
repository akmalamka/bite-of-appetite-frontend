import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddDirectionButton } from '..';
import './FieldClass.css';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setDirections: any;
}

const initialDirectionValue = {
  directions: [
    {
      title: '',
      step: '',
      tips: '',
    },
  ],
};
const DirectionField = ({ setDirections }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={initialDirectionValue}
      onSubmit={async (values) => {
        // await new Promise((r) => setTimeout(r, 500));
        setDirections(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="directions">
            {({ insert, remove, push }) => (
              <div>
                {values.directions.length > 0 &&
                  values.directions.map((direction, index) => (
                    <div className="row" key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box>
                          <Typography
                            variant={'h6'}
                            sx={{ marginBottom: 2 }}
                            fontWeight={600}
                          >
                            Step {index + 1}
                          </Typography>
                          <Typography
                            variant={'subtitle2'}
                            sx={{ marginY: 2 }}
                            fontWeight={700}
                          >
                            Title
                          </Typography>
                          <Field
                            name={`directions.${index}.title`}
                            className="titleField"
                            type="text"
                          />
                        </Box>
                        <Box sx={{ p: 4 }}>
                          <IconButton
                            edge="start"
                            aria-label="delete"
                            title="Delete"
                            size="large"
                            sx={{ border: '1px solid' }}
                            onClick={() => remove(index)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>

                      <Box>
                        <Typography
                          variant={'subtitle2'}
                          sx={{ marginY: 2 }}
                          fontWeight={700}
                        >
                          Step
                        </Typography>
                        <Field
                          name={`directions.${index}.step`}
                          className="stepField"
                          type="textarea"
                          as="textarea"
                        />
                      </Box>

                      <Box>
                        <Typography
                          variant={'subtitle2'}
                          sx={{ marginY: 2 }}
                          fontWeight={700}
                        >
                          Tips
                        </Typography>
                        <Field
                          name={`directions.${index}.tips`}
                          className="stepField"
                          type="textarea"
                          as="textarea"
                        />
                      </Box>
                    </div>
                  ))}
                <AddDirectionButton push={push} isIngredients={false} />
              </div>
            )}
          </FieldArray>
          {/* <button type="submit">Invite</button> */}
        </Form>
      )}
    </Formik>
  );
};

export default DirectionField;
