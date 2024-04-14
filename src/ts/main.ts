import { isValidDomainName, isValidIPAddress } from "./validator";
import { displayMap } from "./leafletMap";
import { displayError, displayIpDetailsInUI, hideError } from "./ui";
import { fetchIPAddress, fetchIpDetails } from "./ipify";

const formElement = document.querySelector("form")!;

formElement.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searched = new FormData(this).get("search") as string | null;

  if (!searched) {
    displayError(this);
    return;
  }

  try {
    if (!isValidIPAddress(searched) && !isValidDomainName(searched)) {
      displayError(this);
      return;
    }

    await main(searched);
  } catch (error) {
    console.error("Error during data recovery");
    return;
  }
});

const main = async (searched = "") => {
  let ipAddress = searched;
  let domain = searched;
  let ipDetails: IpDetailsType | null;

  if (!searched) {
    const ip = await fetchIPAddress();
    if (!ip) {
      console.error("Unable to obtain current IP address.");
      return;
    }
    ipAddress = ip;
  }

  hideError(formElement);

  if (isValidIPAddress(ipAddress)) {
    ipDetails = await fetchIpDetails(ipAddress);
  } else {
    ipDetails = await fetchIpDetails("", domain);
  }

  if (!ipDetails) {
    displayError(formElement);
    return;
  }

  displayIpDetailsInUI(ipDetails);
  displayMap(ipDetails);
};

main();
