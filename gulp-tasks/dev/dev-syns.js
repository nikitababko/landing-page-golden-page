module.exports = function(gulp, plugins) {
    return async function() {
        plugins.browserSync.init({
            server: {
                baseDir: "./src/"
            },
            port: 3000,
            watch: true,
            notify: false // Нужно, что бы в браузере не писалось, пдключено к серверу либо же нет
        });
    };
};
