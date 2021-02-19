import ReturnMissing from "./ReturnMissing";
import TypeNotFound from "./TypeNotFound";
import VariableNotFound from "./VariableNotFound";
import TypeMismatch from "./TypeMismatch";
import VariableNotInit from "./VariableNotInit";
import ParameterMismatch from "./ParameterMismatch";
import MethodCallOnWrongType from "./MethodCallOnWrongType";
import MethodNotFound from "./MethodNotFound";
import IncorrectMethodDeclaration from "./IncorrectMethodDeclaration";
import IncorrectVariableDeclaration from "./IncorrectVariableDeclaration";
import IncorrectDimensionExpression1 from "./IncorrectDimensionExpression1";
import IncorrectDimensionExpression2 from "./IncorrectDimensionExpression2";
import IncorrectDimensionExpression3 from "./IncorrectDimensionExpression3";
import SyntaxErrorVariableDeclarators from "./SyntaxErrorVariableDeclarators";
import UnexpectedToken from "./UnexpectedToken";
import ExtraneousClosingCurlyBrace from "./ExtraneousClosingCurlyBrace";
import NonStaticFromStatic from "./NonStaticFromStatic";

const ProcessingErrors = {
    ReturnMissing,
    TypeNotFound,
    VariableNotFound,
    TypeMismatch,
    VariableNotInit,
    ParameterMismatch,
    MethodCallOnWrongType,
    MethodNotFound,
    IncorrectMethodDeclaration,
    IncorrectVariableDeclaration,
    IncorrectDimensionExpression1,
    IncorrectDimensionExpression2,
    IncorrectDimensionExpression3,
    SyntaxErrorVariableDeclarators,
    UnexpectedToken,
    ExtraneousClosingCurlyBrace,
    NonStaticFromStatic
}

export default ProcessingErrors;