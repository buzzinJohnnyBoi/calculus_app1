export default class vector {
    static Add(vect1, vect2, CV = true) {
        if(CV) {
            const x = vect1[0] + vect2[0];
            const y = vect1[1] + vect2[1];
            const z = vect1[2] + vect2[2];
            return [x.toString(), y.toString(), z.toString()];
        }
        const x = vect1[0] * Math.cos(degToRad(vect1[1])) + vect2[0] * Math.cos(degToRad(vect2[1]));
        const y = vect1[0] * Math.sin(degToRad(vect1[1])) + vect2[0] * Math.sin(degToRad(vect2[1]));
        const dir = radToDeg(Math.atan2(y, x));
        return [(Math.sqrt(x**2 + y**2).toPrecision(4)).toString(), (dir.toPrecision(4)).toString()];
    }
    static Subtract(vect1, vect2, CV = true) {
        if(CV) {
            const x = vect1[0] - vect2[0];
            const y = vect1[1] - vect2[1];
            const z = vect1[2] - vect2[2];
            return [x.toString(), y.toString(), z.toString()];
        }
        const x = vect1[0] * Math.cos(degToRad(vect1[1])) - vect2[0] * Math.cos(degToRad(vect2[1]));
        const y = vect1[0] * Math.sin(degToRad(vect1[1])) - vect2[0] * Math.sin(degToRad(vect2[1]));
        const dir = radToDeg(Math.atan2(y, x));
        return [(Math.sqrt(x**2 + y**2).toPrecision(4)).toString(), (dir.toPrecision(4)).toString()];
    }
    static DotProduct(vect1, vect2, CV = true) {
        if(CV) {
            const x = vect1[0] * vect2[0];
            const y = vect1[1] * vect2[1];
            const z = vect1[2] * vect2[2];
            return ((x + y + z));
        }
        return ((vect1[0] * vect2[0] * Math.cos(degToRad(Math.abs(vect1[1] - vect2[1])))).toPrecision(4)).toString();
    }
    static CrossProduct(vect1, vect2, CV = true) {
        if(CV) {
            const x = vect1[1] * vect2[2] - vect1[2] * vect2[1];
            const y = vect1[2] * vect2[0] - vect1[0] * vect2[2];
            const z = vect1[0] * vect2[1] - vect1[1] * vect2[0];
            return [x.toString(), y.toString(), z.toString()];
        }
        return ((vect1[0] * vect2[0] * Math.sin(degToRad(Math.abs(vect1[1] - vect2[1])))).toPrecision(4)).toString();
    }
    static Magnitute(vect) {
        return (Math.sqrt((vect[0])**2 + (vect[1])**2 + (vect[2])**2)).toString();
    }
}

function degToRad(deg) {
    return deg * Math.PI/180;
}
function radToDeg(rad) {
    return rad / Math.PI * 180;
}