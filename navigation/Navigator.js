import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/Categories";
import CategoryMealsScreen from "../screens/CategoryMeals";
import MealDetailsScreen from "../screens/MealDetails";

const Navigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen,
});

export default createAppContainer(Navigator);
