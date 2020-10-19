import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainLayout } from '../Layouts'
import { getPlanetsList } from '../../Store/Actions'

export const HomePage = () => {
  const dispatch = useDispatch()
  const PlanetsStore = useSelector(state => state.PlanetsStore)

  useEffect(() => {
    getPlanetsList()(dispatch)
  }, [])
  
  return (
    <MainLayout>
      <h1 className="section-title">Home page</h1>
      
      {!PlanetsStore.isLoaded && <p>Loading...</p>}
      
      <h2>Planets list:</h2>
      
      <ul className="list">
        {PlanetsStore.planets.length > 0 && PlanetsStore.planets.map(planet => (
          <li key={planet.url} className="list__item">Name: {planet.name}, Climate: {planet.climate}, Diameter: {planet.diameter}</li>
        ))}
      </ul>
  
      <style jsx>
        {`
          .section-title {
            color: blue;
            margin: 20px 0;
            position: relative;
            display: inline-block;
            
            &:after {
              left: 0;
              right: 0;
              content: '';
              height: 1px;
              bottom: -5px;
              position: absolute;
              background-color: black;
            }
          }
          
          .list {
            padding-left: 0;
            transition: all 0.5s ease-in-out;
            
            &__item {
              list-style: none;
            }
          }
        `}
      </style>
    </MainLayout>
  )
}
