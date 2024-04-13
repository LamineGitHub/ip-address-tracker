const errorMessage = document.getElementById("error-message")!;
const ip_address = document.querySelector(".ip_address span:last-child")!;
const location = document.querySelector(".location span:last-child")!;
const timezone = document.querySelector(".timezone span:last-child")!;
const isp = document.querySelector(".isp span:last-child")!;
const searchInput = document.querySelector("input")!;

searchInput.addEventListener("focus", function () {
  this.select();
});

export const displayIpDetailsInUI = (ipDetails: IpDetailsType) => {
  ip_address.textContent = ipDetails.ip;
  location.textContent = `${ipDetails.location.city}, ${ipDetails.location.country}`;
  timezone.textContent = `UTC ${ipDetails.location.timezone}`;
  isp.textContent = ipDetails.isp;
};

export const displayErrorMessage = (message: string) => {
  errorMessage.textContent = message;
  errorMessage.classList.add("error");
};

export const hideErrorMessage = () => {
  errorMessage.textContent = "";
  errorMessage.classList.remove("error");
};
