import { RequestOptions } from './models/models';

const request = async(requestOptions: RequestOptions) => {
    const { endpoint, method, options, isFile } = requestOptions;
    options === undefined ? requestOptions.options = {} : requestOptions.options = options;
    isFile === undefined ? requestOptions.isFile = false : requestOptions.isFile = isFile;
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    
    let config: any = {
        method,
        headers,
        body: JSON.stringify(options),
    };
    if (isFile) {
        config.headers = {};
        config.body = options;
    }
    try {
        const response = await fetch(endpoint, config);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (err: any) {
        throw Error(err.message());
    }
}

export default request;