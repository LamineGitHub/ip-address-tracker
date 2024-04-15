const ip_address = document.querySelector(".ip_address span:last-child")!;
const location = document.querySelector(".location span:last-child")!;
const timezone = document.querySelector(".timezone span:last-child")!;
const isp = document.querySelector(".isp span:last-child")!;
const searchInput = document.querySelector("input")!;

searchInput.addEventListener("focus", function () {
  this.select();
  const parentClassList = this.parentElement?.classList;

  if (parentClassList?.contains("is-invalid")) {
    parentClassList.remove("is-invalid");
  }
});

export const displayIpDetailsInUI = (ipDetails: IpDetailsType) => {
  ip_address.textContent = ipDetails.ip;
  location.textContent = `${ipDetails.location.city}, ${ipDetails.location.country}`;
  timezone.textContent = `UTC ${ipDetails.location.timezone}`;
  isp.textContent = ipDetails.isp;
};

export const displayError = (form: HTMLFormElement) => {
  form.classList.add("is-invalid");
};

export const hideError = (form: HTMLFormElement) => {
  form.classList.remove("is-invalid");
};
