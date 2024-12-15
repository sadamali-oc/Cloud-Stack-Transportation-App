import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";
import { auth } from "../../firebase"; // Adjust the import path for Firebase

const Home = () => {
  const [flightsData, setFlightsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFlights, setSelectedFlights] = useState([]);
  const [tripCount, setTripCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // Holds the search query
  const [userEmail, setUserEmail] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("airport"); // Default search query

  const API_KEY = "FE_3EX6YSpCb6v09DdbeCUCpMzjhsOX7W1h37-10maU"; // Replace with your Unsplash API key
  const BASE_URL = "https://api.unsplash.com/search/photos";

  // Check for user authentication on component mount
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    } else {
      setUserEmail("No user signed in");
    }

    const fetchFlights = async () => {
      try {
        const response = await axios.get(
          "https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime",
          {
            headers: {
              Accept: "application/json",
              app_id: "d7ce6fec", // Replace with your app_id
              app_key: "23e9e0a2c0d0b146a182284e4c41cac1", // Replace with your app_key
              ResourceVersion: "v4",
            },
          }
        );
        setFlightsData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching flight data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  // Fetch images from Pexels API based on search query
  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(BASE_URL, {
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
        params: {
          query,
          per_page: 10,
        },
      });
      setPhotos(response.data.results); // Access photos from Unsplash response
    } catch (err) {
      setError("Failed to fetch photos. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [query]); // Fetch photos when the query changes
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUserEmail(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleFlightSelect = (flightId) => {
    setSelectedFlights((prevFlights) => {
      const isSelected = prevFlights.includes(flightId);
      if (isSelected) {
        setTripCount((prevCount) => prevCount - 1);
        return prevFlights.filter((id) => id !== flightId);
      } else {
        setTripCount((prevCount) => prevCount + 1);
        return [...prevFlights, flightId];
      }
    });
  };

  const filteredFlights = flightsData
    ? flightsData.flights.filter((flight) =>
        flight.flightName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading Flights...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animated.View
          entering={FadeInDown.duration(200).springify()}
          style={styles.logoContainer}
        >
          <MaterialCommunityIcons name="airplane" size={30} color="#00A3E0" />
          <Text style={styles.logoText}>CLOUD</Text>
          <Text style={styles.logoTextItalic}>STACKS</Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.duration(200).delay(200).springify()}
        >
          <Text style={styles.emailText}>{userEmail}</Text>
        </Animated.View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search images..."
        value={searchQuery}
        onChangeText={setSearchQuery} // Update search query
        onSubmitEditing={fetchPhotos} // Trigger image fetch on submit
      />

      {/* Flights List */}
      <ScrollView style={styles.flightListContainer}>
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.card,
                selectedFlights.includes(flight.id) && styles.cardSelected,
              ]}
              onPress={() => handleFlightSelect(flight.id)}
            >
              {/* Left side: Random image */}
              <View style={styles.imageContainer}>
                {!loading && !error && photos.length > 0 && (
                  <Image
                    source={{ uri: photos[index % photos.length].urls.small }}
                    style={styles.cardImage}
                  />
                )}
              </View>

              {/* Right side: Flight information */}
              <View style={styles.cardContent}>
                <Text style={styles.flightText}>
                  <Text style={styles.label}>Aircraft Registration: </Text>
                  {flight.aircraftRegistration || "N/A"}
                </Text>
                <Text style={styles.flightText}>
                  <Text style={styles.label}>Flight Name: </Text>
                  {flight.flightName || "N/A"}
                </Text>
                <Text style={styles.flightText}>
                  <Text style={styles.label}>Estimated Landing Time: </Text>
                  {flight.estimatedLandingTime || "N/A"}
                </Text>
                <Text style={styles.flightText}>
                  <Text style={styles.label}>Expected Time on Belt: </Text>
                  {flight.expectedTimeOnBelt || "N/A"}
                </Text>
                <Text style={styles.flightText}>
                  <Text style={styles.label}>Flight Number: </Text>
                  {flight.flightNumber || "N/A"}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noDataText}>No flight data available.</Text>
        )}
      </ScrollView>

      {tripCount > 0 && (
        <View style={styles.selectedFlightIndicator}>
          <Text style={styles.selectedFlightText}>
            Selected Flights: {tripCount}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192031",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 15,
  },
  logoTextItalic: {
    color: "#00A3E0",
    fontSize: 15,
    fontStyle: "italic",
    marginLeft: 5,
  },
  emailText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  logoutButton: {
    alignSelf: "flex-end",
    marginRight: 16,
    backgroundColor: "#FF5252",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  searchInput: {
    height: 40,
    borderColor: "#00A3E0",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginHorizontal: 16,
    marginBottom: 10,
    color: "#fff",
    backgroundColor: "#fff",
  },
  // imageContainer: {
  //   marginBottom: 16,
  //   alignItems: "center",
  // },
  // image: {
  //   width: 200,
  //   height: 200,
  //   borderRadius: 10,
  //   resizeMode: "cover",
  // },
  flightListContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: "#2C3E50",
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    flexDirection: "row",  // Ensures left (image) and right (content) layout
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#34495E",
  },
  cardSelected: {
    backgroundColor: "#2980B9",
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginRight: 16,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover", // Ensures the image covers the area without distortion
  },
  cardContent: {
    flex: 1,
  },
  flightText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
    color: "#fff",
  },
  noDataText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  selectedFlightIndicator: {
    backgroundColor: "#1ABC9C",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  selectedFlightText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
  photoContainer: {
    marginBottom: 15,
  },
  photo: {
    width: "10%",
    height: 200,
    borderRadius: 10,
  },
});

export default Home;
