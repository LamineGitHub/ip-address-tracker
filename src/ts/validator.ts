export const isValidIPAddress = (str: string): boolean => {
  const octet = "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  const ipAddressRegex = new RegExp(
    `^${octet}\\.${octet}\\.${octet}\\.${octet}$`,
  );
  return ipAddressRegex.test(str);
};

export const isValidDomainName = (str: string): boolean => {
  const domainRegex =
    /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/;
  return domainRegex.test(str);
};
