const baseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}`;

export const fetchIPAddress = async (): Promise<string | null> => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const { ip } = await response.json();
    return ip;
  } catch (error) {
    console.error("An error occurred while retrieving the IP address:", error);
    return null;
  }
};

export const fetchIpDetails = async (
  ipAddress = "",
  domain = "",
): Promise<IpDetailsType | null> => {
  const url = `${baseUrl}&ipAddress=${ipAddress}&domain=${domain}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error during data recovery :", error);
    return null;
  }
};
