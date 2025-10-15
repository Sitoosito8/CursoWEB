export default class Module {
    constructor(code, cliteral,vliteral,courseId) {
        this.code = code;
        this.cliteral = cliteral;
        this.vliteral = vliteral;
        this.courseId = courseId;
    }

    toString() {
        return "ID Curso :" + this.courseId + "/Codigo Curso :" + this.code + "/n" +
            "Castellano modulo info : " + this.cliteral + "/nValenciano modulo info: " + this.vliteral;
    }
}