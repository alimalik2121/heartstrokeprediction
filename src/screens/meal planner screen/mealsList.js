import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header'
import SearchFilter from '../../components/searchFilter'
import CategoriesFilter from '../../components/categoriesFilter'
import MealsCard from '../../components/mealsCard'

const MealsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  return (
    <View style={{flex: 1, marginHorizontal: 16}}>
      {/* header */}
      <Header headerText={"Hi, Ali"} headerIcon={"bell-o"}/>

      {/* search filter*/}
      <SearchFilter icon="search" placeholder={"Search Your Favourite Food"}/>

      {/* categories filter*/}
      <View style={{marginTop: 22}}>
        <Text style={{fontSize: 22, fontWeight:"bold"}}>Categories</Text>
      {/* categories list */}
      <CategoriesFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </View>

      {/* Meals List Filter */}
      <View style={{marginTop: 22, flex: 1}}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>Meals</Text>

        {/* Meals List */}
        <MealsCard selectedCategory={selectedCategory}/>
      </View>
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({})
