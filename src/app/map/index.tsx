import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  LocationObject,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
export function Map() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        console.log("NOVA LOCALIZACAO", response);
        setLocation(response);
        mapRef.current?.animateCamera({
          pitch: 50,
          center: {
            latitude: response.coords.latitude,
            longitude: response.coords.longitude,
          },
          zoom: 15,
        });
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      {location && !errorMsg ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          customMapStyle={[
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#212121",
                },
              ],
            },
            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#212121",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "administrative.country",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e",
                },
              ],
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#bdbdbd",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#181818",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#1b1b1b",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#2c2c2c",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#8a8a8a",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#373737",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#3c3c3c",
                },
              ],
            },
            {
              featureType: "road.highway.controlled_access",
              elementType: "geometry",
              stylers: [
                {
                  color: "#4e4e4e",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161",
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#000000",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#3d3d3d",
                },
              ],
            },
          ]}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      ) : (
        <Text>{errorMsg}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
