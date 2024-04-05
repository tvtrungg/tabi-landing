export const request = async (url: string, options: any) => {
  if (options.params) {
    const paramsString = new URLSearchParams(options.params).toString();
    url = `${url}?${paramsString}`;
    delete options.params;
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  const data = await response.json();
  return data;
};

export function interpolate(
  endpoint: string,
  params: Record<string, any>
): string {
  let interpolatedEndpoint = endpoint;
  for (const [key, value] of Object.entries(params)) {
    interpolatedEndpoint = interpolatedEndpoint.replace(`:${key}`, value);
  }
  return interpolatedEndpoint;
}
