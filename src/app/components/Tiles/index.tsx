import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import { Character } from '~Types/Character';
import mortyFace from '~Assets/img/morty-ul-v2.png';

import {
  ImageContainer,
  GridImage,
  IconsContainer,
  InformationList,
  InformationListElement,
  Characteristic,
  CustomPlaceOutlinedIcon,
  CustomMovieIcon,
  CustomStatus,
  CustomCard,
} from '~Styles/Tiles/Styles';

// TODO -> getting the characters list from props.
const Tiles = () => {
  const [apiResponse, setApiResponse] = useState([] as any);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?page=1')
      .then(res => setApiResponse(res.data.results));
  }, []);

  return (
    <Grid container spacing={4}>
      {apiResponse.map((element: Character, index: number) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={element.id}>
          <CustomCard>
            <CardContent>
              <Grid item xs={12} sm container direction={'row'}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <ImageContainer>
                    <GridImage src={element.image} />
                  </ImageContainer>
                </Grid>
                <Grid
                  item
                  xs={11}
                  sm={11}
                  md={7}
                  lg={7}
                  xl={7}
                  container
                  direction={'column'}
                  spacing={2}
                >
                  <Grid item xs>
                    <InformationList>
                      <InformationListElement property={mortyFace}>
                        <Characteristic>Name: </Characteristic>
                        {element.name}
                      </InformationListElement>
                      <InformationListElement property={mortyFace}>
                        <Characteristic>Status: </Characteristic>
                        <CustomStatus>{element.status}</CustomStatus>
                      </InformationListElement>
                      <InformationListElement property={mortyFace}>
                        <Characteristic>Gender: </Characteristic>
                        {element.gender}
                      </InformationListElement>
                      <InformationListElement property={mortyFace}>
                        <Characteristic>Specie: </Characteristic>
                        {element.species}
                      </InformationListElement>
                    </InformationList>
                  </Grid>
                </Grid>
                <Grid xs={1} sm={1} md={1} lg={1} xl={1} item>
                  <IconsContainer>
                    <CustomPlaceOutlinedIcon
                      fontSize={'large'}
                      onClick={() => {
                        console.log('Se ha clickado en el icono de place');
                      }}
                    />
                    <CustomMovieIcon
                      fontSize={'large'}
                      onClick={() => {
                        console.log('Se ha clickado en el icono de movie');
                      }}
                    />
                  </IconsContainer>
                </Grid>
              </Grid>
            </CardContent>
          </CustomCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tiles;