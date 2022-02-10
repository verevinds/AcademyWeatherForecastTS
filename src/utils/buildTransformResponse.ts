import type {AxiosResponseTransformer} from 'axios';
import axios from 'axios';

export const buildTransformResponse = (
  arrayFn: any[],
): AxiosResponseTransformer | AxiosResponseTransformer[] => {
  if (Array.isArray(axios.defaults.transformResponse)) {
    return [...axios.defaults.transformResponse, ...arrayFn];
  }

  if (axios.defaults.transformResponse) {
    return [axios.defaults.transformResponse, ...arrayFn];
  }
  return [...arrayFn];
};
