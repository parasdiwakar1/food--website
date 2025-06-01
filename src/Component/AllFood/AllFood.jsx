import React, { useState, useEffect } from "react";
import { ChefHat, Search, Clock, MapPin, Youtube, ExternalLink, Heart, Star, Users } from "lucide-react";
import "./AllFood.css";
const FoodSearch = () => {
  const [meal, setMeal] = useState("");
  const [mealsList, setMealsList] = useState([]);
  const [error, setError] = useState(null);
  const [orderedMeals, setOrderedMeals] = useState([]);
  const [expandedMeals, setExpandedMeals] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (searchTerm = "") => {
    setLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals) {
        setMealsList(data.meals);
        setError(null);
      } else {
        setMealsList([]);
        setError("No meals found");
      }
    } catch (err) {
      setError("Error fetching meals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const searchMeals = () => {
    fetchMeals(meal);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMeals();
    }
  };

  const orderFood = (mealId) => {
    setOrderedMeals((prev) => [...prev, mealId]);
    setTimeout(() => {
      setOrderedMeals((prev) => prev.filter(id => id !== mealId));
    }, 3000);
  };

  const toggleDetails = (mealId) => {
    setExpandedMeals((prev) =>
      prev.includes(mealId)
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };

  const toggleFavorite = (mealId) => {
    setFavorites((prev) =>
      prev.includes(mealId)
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    );
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure ? measure.trim() : ""
        });
      }
    }
    return ingredients;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="w-12 h-12 text-orange-500 mr-3" />
            <h2 >
              Delicious Meals
            </h2>
          </div>
          <p className="text-gray-600 text-lg">Discover amazing recipes from around the world</p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center bg-white rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all duration-300">
            <input
              type="text"
              placeholder="Search for delicious meals..."
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-6 py-4 text-lg rounded-l-2xl border-none outline-none focus:ring-0"
            />
            <button
              onClick={searchMeals}
              disabled={loading}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-r-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50"
            >
              <Search className="w-5 h-5" />
              <span>{loading ? "Searching..." : "Search"}</span>
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700 text-center">
            {error}
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center mb-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        )}

        {/* Meals Grid */}
        {mealsList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mealsList.map((mealItem) => {
              const ingredients = getIngredients(mealItem);
              const isExpanded = expandedMeals.includes(mealItem.idMeal);
              const isOrdered = orderedMeals.includes(mealItem.idMeal);
              const isFavorite = favorites.includes(mealItem.idMeal);

              return (
                <div
                  key={mealItem.idMeal}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={mealItem.strMealThumb}
                      alt={mealItem.strMeal}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                   <div
  style={{
    position: "absolute",
    top: "1rem",
    right: "1rem",
    display: "flex",
    gap: "0.5rem",
  }}
>
  <button
    onClick={() => toggleFavorite(mealItem.idMeal)}
    style={{
      padding: "0.5rem",
      borderRadius: "9999px",
      backdropFilter: "blur(4px)",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
  >
    <Heart
      style={{
        width: "1.25rem",
        height: "1.25rem",
        color: isFavorite ? "#ef4444" : "#ffffff", 
        fill: isFavorite ? "currentColor" : "none",
        transition: "color 0.3s ease, fill 0.3s ease",
        backgroundColor: "transparent",
      }}
    />
  </button>

  <div
    style={{
      padding: "0.25rem 0.75rem",
     
      color: "white",
      fontSize: "0.875rem",
      fontWeight: "500",
      borderRadius: "9999px",
      backdropFilter: "blur(4px)",
    }}
  >
    {mealItem.strArea || "International"}
  </div>
</div>

                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        {mealItem.strMeal}
                      </h3>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">4.5</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{mealItem.strArea || "International"}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{mealItem.strCategory}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>30-45 min</span>
                      </div>
                    </div>

                    {/* Instructions Preview */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {isExpanded
                        ? mealItem.strInstructions
                        : truncateText(mealItem.strInstructions)
                      }
                    </p>

                    {/* Ingredients (shown when expanded) */}
                    {isExpanded && (
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <ChefHat className="w-4 h-4 mr-2" />
                          Ingredients
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {ingredients.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-gray-700">{item.ingredient}</span>
                              <span className="text-gray-500 font-medium">{item.measure}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* YouTube Link */}
                        {mealItem.strYoutube && (
                          <div className="mt-4">
                            <a
                              href={mealItem.strYoutube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-300"
                            >
                              <Youtube className="w-4 h-4" />
                              <span className="text-sm font-medium">Watch Recipe Video</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button
                        onClick={() => toggleDetails(mealItem.idMeal)}
                        className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm font-medium"
                      >
                        {isExpanded ? "Show Less" : "More Details"}
                      </button>
                      
                      <button
                        onClick={() => orderFood(mealItem.idMeal)}
                        disabled={isOrdered}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isOrdered
                            ? "bg-green-500 text-white"
                            : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                        }`}
                      >
                        {isOrdered ? "✓ Ordered!" : "Order Food"}
                      </button>
                    </div>

                    {/* Success Message */}
                    {isOrdered && (
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 text-sm font-medium text-center">
                          🎉 Food successfully ordered! Enjoy your meal!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          !loading && (
            <div className="text-center py-16">
              <div className="mb-4">
                <ChefHat className="w-16 h-16 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No meals found</h3>
              <p className="text-gray-500">Try searching for a different dish!</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FoodSearch;