function main() {
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    // Vertex Shader
    var vertexShaderCode = 
    "void main () {" +
    "}";

    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject , vertexShaderCode);
    gl.compileShader(vertexShaderObject); // Turning into .o

    // Fragment Shader
    var fragmentShaderCode = `
    void main() {

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

    gl.clearColor(0.0, 0.0, 0.0, 0.5); // Red , Green , Blue , Alpha
    gl.clear(gl.COLOR_BUFFER_BIT);

}