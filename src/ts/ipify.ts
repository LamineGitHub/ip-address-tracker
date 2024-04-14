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
  console.log(url);

  try {
    // const response = await fetch(url)
    // if (!response.ok) {
    //   console.error(`Erreur HTTP! Statut: ${ response.status }`)
    //   return
    // }
    let ipDetails: IpDetailsType;

    if (ipAddress) {
      ipDetails = {
        ip: "185.177.125.65",
        location: {
          country: "NL",
          region: "Provincie Noord-Holland",
          city: "Amsterdam-Duivendrecht",
          lat: 52.31926,
          lng: 4.92569,
          postalCode: "1114",
          timezone: "+02:00",
          geonameId: 11746796,
        },
        as: {
          asn: 49981,
          name: "WorldStream",
          route: "185.177.125.0/24",
          domain: "https://www.worldstream.com",
          type: "Network Services",
        },
        isp: "WorldStream B.V.",
      };
    } else {
      ipDetails = {
        ip: "102.164.183.160",
        location: {
          country: "SN",
          region: "Dakar",
          city: "Niaye Tioker",
          lat: 14.6725,
          lng: -17.44361,
          postalCode: "",
          timezone: "+00:00",
          geonameId: 2595755,
        },
        as: {
          asn: 37649,
          name: "Tigo",
          route: "102.164.183.0/24",
          domain: "free.sn",
          type: "",
        },
        isp: "Tigo Public IP",
      };
    }
    // }
    return ipDetails;
    // return await response.json()
  } catch (error) {
    console.error("Error during data recovery :", error);
    return null;
  }
};
