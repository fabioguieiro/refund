import instance from "../axios-order";

export async function useRequest(endpoint, setData) {
  const result = await instance(
    endpoint,
  );
    return result
}

export default useRequest;