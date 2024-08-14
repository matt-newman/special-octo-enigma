// TODO: in full applicaton, this would be moved to a util folder
export const fetcher = async (url: string) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.');
        throw error;
    }

    return {
        data: await res.json(),
        status: res.status,
    }
}