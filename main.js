function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [ 
        // 0.0, 0.0,
        -0.5, 0.9,
        // -0.5, 0.5,
        // -0.25, 0.5,
        // -0.75, 0.5,
        -0.1, 0.1,
        -0.25, 0.1,
        -0.5, 0.4,
        -0.75, 0.1,
        -0.9, 0.1,
        -0.5, 0.9,

        // -0.5, 0.1,
        

        0.1, 0.1,
        0.1, 0.9,
        0.9, 0.9,
        0.9, 0.1,


        -0.25, -0.1,
        -0.8, -0.1,
        -0.8, -0.9,
        -0.25, -0.9,
        //-0.525, -0.525, // center
        -0.25, -0.525,
        -0.8, -0.525,


        0.25, -0.1,
        0.8, -0.1,
        0.55, -0.9
        
    ];

    var letterA = [
        0.0, 0.0,
        -0.5, 0.9,
        // -0.5, 0.5,
        -0.25, 0.5,
        -0.75, 0.5,
        -0.1, 0.1,
        -0.9, 0.1 
    ]

    var letterN = [
        0.1, 0.1,
        0.1, 0.9,
        0.9, 0.9,
        0.9, 0.1
    ]

    var number8 = [
        -0.25, -0.1,
        -0.8, -0.1,
        -0.8, -0.9,
        -0.25, -0.9,
        //-0.525, -0.525, // center
        -0.25, -0.525,
        -0.8, -0.525
    ]

    var numer7 = [
        0.25, -0.1,
        0.8, -0.1,
        0.55, -0.9
    ]

        // Initial Value
        // 0.5, 0.5, 
        // 0.0, 0.0, 
        // -0.5, 0.5,
        // 0.0, 1.0

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Vertex Shader
    var vertexShaderCode = `
    attribute vec2 aPosition;
    void main() {
        float x = aPosition.x;
        float y = aPosition.y;
        gl_PointSize = 10.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
    }
    `;

    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject , vertexShaderCode);
    gl.compileShader(vertexShaderObject); // Turning into .o

    // Fragment Shader
    var fragmentShaderCode = `
    precision mediump float;
    void main() {
        float r = 0.0;
        float g = 0.0;
        float b = 1.0;
        gl_FragColor = vec4(r, g, b, 1.0);
    }
    `;

    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject , fragmentShaderCode);
    gl.compileShader(fragmentShaderObject); // Turning into .o

    var shaderProgram = gl.createProgram(); // Executables (.exe)
    gl.attachShader(shaderProgram , vertexShaderObject);
    gl.attachShader(shaderProgram , fragmentShaderObject);
    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram); // Running Program...

    // Mengajari GPU bagaimana carai mengoleksi
    // nilai posisi dari ARRAY_BUFFER
    // untuk setiap vertex yang sedang diproses

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
    gl.clearColor(1.0, 0.65, 0.0, 1.0); // Red , Green , Blue , Alpha
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.LINE_STRIP, 0, 20); // Berapa banyak iterasi yang diperlukan untuk menggambar
}