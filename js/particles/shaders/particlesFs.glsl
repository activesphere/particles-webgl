uniform vec3 uColor;
uniform float uAlpha;

void main()
{
    // gradient from the center of shader pixel
    vec2 center = (gl_PointCoord.xy - 0.5) * 2.0;
    float len = length(center);
    float alpha = clamp(1.0 - len, 0.0, 1.0) * uAlpha;

    gl_FragColor = vec4(uColor, alpha);
}
