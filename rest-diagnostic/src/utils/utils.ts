

export const shouldConstructFetchRequest = async (fetchInfo: any) => {
  // fileId:number, method: string, headers: any, query: any, url: string
  const { method, headers, url } = fetchInfo
  const query = method != 'GET' ? fetchInfo.query : null
  const body = method != 'GET' ? JSON.stringify({ query }) : null
  let fetchRequest;
  let fetchRequestJson;
  try {
    fetchRequest = await fetch(url, {
      method,
      mode: 'cors',
      headers,
      body
    })
    fetchRequestJson = await fetchRequest.json()
  } catch (err) {
    console.error(new Error(`Fetch Call failed ${err}`));
    fetchRequestJson = err
  }

  return {
    status: fetchRequest.status,
    responseBody: fetchRequestJson,
    fileId: fetchInfo.fileId
  }
}

