/**
 * 
 * @param webUrl 
 * @returns fileName
 */
function getFileName(webUrl: string): string {
    webUrl = webUrl.split(/\?/)[0]
    const parts = webUrl.split(/\//)
    // console.log(parts);
    return parts[parts.length-1]
}

export default getFileName