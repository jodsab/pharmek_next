function getCoordinatesFromGoogleMapsUrl(url) {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const match = url.match(regex);

  if (match) {
    const lat = parseFloat(match[1]);
    const lng = parseFloat(match[2]);
    return { lat: lat, lng: lng };
  } else {
    throw new Error("No se encontraron coordenadas en la URL proporcionada.");
  }
}

export { getCoordinatesFromGoogleMapsUrl };
