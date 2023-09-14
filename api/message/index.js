module.exports = async function (context, req) {
    context.res.json = {
        // status: 200, /* Defaults to 200 */
        text: "Hello from the API"
    };
}