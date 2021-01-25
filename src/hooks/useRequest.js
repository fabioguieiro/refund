import instance from "../lib/utils/axios-order";

export async function useRequest(endpoint) {
  const result = await instance(
    endpoint,
  );
    return result
}

export default useRequest;