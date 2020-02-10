

export const shouldConstructFetchRequest = (fetchInfo: any) => {
  // fileId:number, method: string, headers: any, query: any, url: string
  const { method, headers, url } = fetchInfo
  const query = method != 'GET' ? fetchInfo.query : null
  const body = method != 'GET' ? JSON.stringify({ query }) : null
  let restStatus;
  return fetch(url, {
    method,
    mode: 'cors',
    headers,
    body
  }).then(res => {
    restStatus = res.status
    return res.json()
  })
    .then(call => ({
      status: restStatus,
      responseBody: call,
      fileId: fetchInfo.fileId
    })).catch(err => ({
      status: 500,
      responseBody: `There was an error: ${err}`,
      fileId: fetchInfo.fileId
    }))
}