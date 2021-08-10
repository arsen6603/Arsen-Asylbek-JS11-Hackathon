import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import {  useProducts } from '../../contexts/Context';
import BoxCard from '../ProductCards/BoxCard';


const useStyles = makeStyles((theme) => ({
    
    border: {
        height: '400px',
        border: '3px solid black',
        display: 'flex',
        padding: '15px'
        
    }
}))

const ItemList = () => {
    const classes = useStyles()
    const { itemsData,getItemsData } = useProducts()
    useEffect(() => {
        getItemsData()
    },[])
    return (
        <Grid container justify="space-evenly" className={classes.border}>
            
        {itemsData.map(box => 
            <BoxCard box={box}/>

        
        )}
    </Grid>
    );
};

export default ItemList;