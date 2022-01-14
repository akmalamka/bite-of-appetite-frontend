import React from 'react';
import Typed from 'react-typed';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { ButtonComponent } from 'blocks';
import { ReactComponent as HomeAsset } from 'utils/home-asset.svg';
import { ReactComponent as AboutAsset } from 'utils/about-asset.svg';
import { ReactComponent as DetailWritingAsset } from 'utils/detail-writing-asset.svg';

interface Props {
  imagePosition: string;
  isRecipe: boolean;
  isContent?: boolean;
}

const Description = ({
  imagePosition,
  isRecipe,
  isContent,
}: Props): JSX.Element => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const chosenWriting = useSelector(
    (state: any) => state.writing.chosenWriting,
  );
  const chosenRecipe = useSelector((state: any) => state.recipe.chosenRecipe);
  const data = isRecipe ? chosenRecipe : chosenWriting;
  return (
    <Box
      width={{ xs: 1, md: 1 / 2 }}
      height={1}
      m={{ xs: isContent ? 0 : 4, md: isContent ? 4 : 0 }}
      marginY={{ xs: 4, md: 0 }}
      p={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: { xs: 0, md: 13 },
      }}
    >
      {isContent && (
        <Box
          display={'flex'}
          height={{ xs: '100%', md: '90%' }}
          sx={{
            justifyContent: 'space-around',
            flexDirection: 'column',
            rowGap: { xs: 8, sm: 4, md: 2 },
          }}
        >
          <Typography
            color={isRecipe ? 'text.primary' : 'text.secondary'}
            variant="subtitle1"
            align={'center'}
            sx={{
              fontFamily: 'Inter',
              fontWeight: 400,
              textTransform: 'uppercase',
            }}
          >
            {isRecipe ? 'Recipes' : 'Food for Thought'}
          </Typography>
          {isRecipe && (
            <Typography
              color={isRecipe ? 'text.primary' : 'text.secondary'}
              variant="h2"
              align={'center'}
              sx={{
                fontWeight: 600,
              }}
            >
              {data.title}
            </Typography>
          )}

          {isMd && isContent && !isRecipe && (
            <Box
              left={'60%'}
              // top={imagePosition === 'left' ? '10%' : '17%'}
              position={'absolute'}
              sx={{
                zIndex: 1,
                transform: 'scale(0.8)',
              }}
            >
              <DetailWritingAsset />
            </Box>
          )}
          <Typography
            fontFamily={isRecipe ? 'Inter' : 'Recoleta Alt'}
            color={isRecipe ? 'text.primary' : 'text.secondary'}
            variant={isRecipe ? 'h6' : 'h4'}
            align={'center'}
            sx={{
              fontWeight: isRecipe ? 500 : 600,
              zIndex: 2,
            }}
          >
            {data.description}
          </Typography>
          {isRecipe && (
            <Typography
              color={isRecipe ? 'text.primary' : 'text.secondary'}
              variant="body1"
              align={'center'}
              sx={{
                fontFamily: 'Inter',
              }}
            >
              Time needed: {data.time}
            </Typography>
          )}
          {isRecipe && (
            <Typography
              fontFamily={'Inter'}
              variant="button"
              color={isRecipe ? 'text.primary' : 'text.secondary'}
              sx={{
                fontStyle: 'italic',
                fontWeight: 400,
              }}
              align="center"
            >
              {data.foodPhotographyBy === data.foodStylingBy
                ? `Food Photography and Food Styling by ${data.foodPhotographyBy}`
                : `Food Photography by ${data.foodPhotographyBy} and Food Styling by ${data.foodStylingBy}`}
            </Typography>
          )}
          <Box display={'flex'} flexDirection={'column'} rowGap={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: isXs ? 'column' : 'row',
                columnGap: 2,
                rowGap: 2,
              }}
            >
              <Typography
                color={isRecipe ? 'text.primary' : 'text.secondary'}
                variant="subtitle2"
                align={'center'}
                display={'flex'}
                justifyContent={'center'}
                sx={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                }}
              >
                By {isRecipe ? data.recipeBy : data.writingsBy}
              </Typography>
              {!isXs && data.inspiredBy && (
                <Divider
                  orientation="vertical"
                  sx={{
                    border: '1px solid',
                    height: '16px',
                  }}
                />
              )}
              {data.inspiredBy && (
                <Typography
                  color={isRecipe ? 'text.primary' : 'text.secondary'}
                  variant="subtitle2"
                  align={'center'}
                  display={'flex'}
                  justifyContent={'center'}
                  sx={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                  }}
                >
                  Inspired By {data.inspiredBy}
                </Typography>
              )}
            </Box>
            <Typography
              color={isRecipe ? 'text.primary' : 'text.secondary'}
              variant="subtitle2"
              align={'center'}
              sx={{
                fontFamily: 'Inter',
                textTransform: 'uppercase',
              }}
            >
              {data.date}
            </Typography>
          </Box>
        </Box>
      )}
      {!isContent && (
        <Box
          height={1 / 2}
          display={'flex'}
          justifyContent={'flex-end'}
          flexDirection={'column'}
        >
          {isMd && (
            <Box
              left={imagePosition === 'left' ? '70%' : '5%'}
              top={imagePosition === 'left' ? '10%' : '17%'}
              position={'absolute'}
              sx={{
                zIndex: 1,
              }}
            >
              {imagePosition === 'left' ? <HomeAsset /> : <AboutAsset />}
            </Box>
          )}

          <Typography
            variant="h2"
            color="text.secondary"
            // gutterBottom
            sx={{ zIndex: 2 }}
          >
            {imagePosition === 'left' ? 'Welcome to' : 'About'}
            <br /> {imagePosition === 'left' ? 'my food ' : ''}
            {imagePosition === 'left' && (
              <Typography
                color={'text.secondary'}
                component={'span'}
                variant={'inherit'}
                fontFamily={'Yournotes'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                <Typed
                  strings={['heaven.', 'repertoire.', 'wonderland.']}
                  typeSpeed={70}
                  loop={true}
                />
              </Typography>
            )}
          </Typography>
        </Box>
      )}
      {!isContent && (
        <Box
          height={1 / 2}
          width={{ xs: 2 / 3, md: imagePosition === 'left' ? 1 / 2 : 2 / 3 }}
          display={'flex'}
          justifyContent={imagePosition === 'left' ? 'flex-end' : 'flex-start'}
          flexDirection={'column'}
          rowGap={2}
        >
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            sx={{ fontFamily: 'Inter', fontWeight: 400, zIndex: 2 }}
          >
            {imagePosition === 'left'
              ? 'Food is my way to tell stories and connect with people who share the same passion as I do. Whether its because youre hungry at midnight or trying to learn how to cook, I hope you enjoy watching my content and recipes.'
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
          </Typography>
          {imagePosition === 'right' && (
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = 'mailto:akmalmuhammad51@gmail.com';
                e.preventDefault();
              }}
              style={{ textDecoration: 'none' }}
            >
              <Box>
                <ButtonComponent text={'Let’s collab'} />
              </Box>
            </Link>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Description;
