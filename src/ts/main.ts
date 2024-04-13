import { isValidDomainName, isValidIPAddress } from "./validator";
import { displayMap } from "./leafletMap";
import {
  displayErrorMessage,
  displayIpDetailsInUI,
  hideErrorMessage,
} from "./ui";
import { baseUrl, fetchIPAddress, fetchIpDetails } from "./ipify";

const searchForm = document.querySelector("form")!;

searchForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const search = formData.get("search") as string | null;

  if (!search) return;

  try {
    if (!isValidIPAddress(search) && !isValidDomainName(search)) {
      displayErrorMessage("Please enter a valid IP address or domain.");
      return;
    }

    await main(search);
  } catch (error) {
    console.error("Error during data recovery");
    return;
  }
});

const main = async (search = "") => {
  let ipAddress = search;
  let domain = search;
  let ipDetails: IpDetailsType | null;

  if (!search) {
    const ip = await fetchIPAddress();
    if (!ip) {
      console.error("Unable to obtain current IP address.");
      return;
    }
    ipAddress = ip;
  }

  hideErrorMessage();

  if (isValidIPAddress(ipAddress)) {
    ipDetails = await fetchIpDetails(baseUrl, ipAddress);
  } else {
    ipDetails = await fetchIpDetails(baseUrl, "", domain);
  }

  if (!ipDetails) return;

  displayIpDetailsInUI(ipDetails);
  displayMap(ipDetails);
};

main();
