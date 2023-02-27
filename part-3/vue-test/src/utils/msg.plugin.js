export default {
    // eslint-disable-next-line no-unused-vars
    install(app, options) {
        app.config.globalProperties.$message = function (htmlText) {
            // eslint-disable-next-line no-undef
            M.toast({html: htmlText})
        }
        app.config.globalProperties.$error = function (htmlText) {
            // eslint-disable-next-line no-undef
            M.toast({html: `Error: ${htmlText}`})
        }
    }
}