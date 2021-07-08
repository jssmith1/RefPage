import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useLocation,
} from "react-router-dom";
import ProcessingErrors from './components/errors/-ProcessingErrors'
import "./App.css";
import HomeButton from './assets/home.svg';

export default function App() {
    return (
        <Router>
            <HomePageContent />
        </Router>
    );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function HomePageContent() {
    const query = useQuery();

    function getParam(param, defaultVal) {
        if (query.has("param")) {
            return decodeURI(query.get("param"));
        }
        return defaultVal;
    }

    const embed = getParam("embed", false);

    return (
        <div>
            {!embed && <div className="Home">
                <Link to="/">
                    <img src={HomeButton} alt="home-button" width="30" height="30"></img>
                </Link>
            </div>}
            <Route exact path="/">
                <div className="AppContent">
                    <div className="Indent-1">
                        <Link to={`/extraneousclosingcurlybrace`}>Extraneous Closing Curly Brace</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression1">Incorrect Dimension Expression 1</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression2">Incorrect Dimension Expression 2</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectdimensionexpression3">Incorrect Dimension Expression 3</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectvariabledeclaration">Incorrect Variable Declaration</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/incorrectmethoddeclaration">Incorrect Method Declaration</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/methodcallonwrongtype">Method Call On Wrong Type</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/methodnotfound">Method Not Found</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/parametermismatch">Parameter Mismatch</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/returnmissing">Return Statement Missing</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/syntaxerrorvariabledeclarators">Syntax Error on "VariableDeclarators"</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/typemismatch">Type Mismatch</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/typenotfound">Type Not Found</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/unexpectedtoken">Unexpected Token</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/nonstaticfromstatic">Use Of Non-Static From Static Context</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/variablenotfound">Variable Not Found </Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/variablenotinit">Variable Not Initialized</Link>
                    </div>
                </div>
            </Route>

            <Route exact path="/extraneousclosingcurlybrace">
                <ProcessingErrors.ExtraneousClosingCurlyBrace
                    original={getParam("original", "void doSomething() { /* your code */ }}")}
                    fixed={getParam("fixed", "void doSomething() { /* your code */ }")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression1">
                <ProcessingErrors.IncorrectDimensionExpression1
                    typeName={getParam("typename", "int")}
                    arrName={getParam("arrname", "arr")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression2">
                <ProcessingErrors.IncorrectDimensionExpression2
                    typeName={getParam("typename", "int")}
                    arrName={getParam("arrname", "arr")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectdimensionexpression3">
                <ProcessingErrors.IncorrectDimensionExpression3
                    typeName={getParam("typename", "int")}
                    arrName={getParam("arrname", "arr")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectvariabledeclaration">
                <ProcessingErrors.IncorrectVariableDeclaration
                    typeName={getParam("typename", "int")}
                    foundName={getParam("foundname", "thing")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/incorrectmethoddeclaration">
                <ProcessingErrors.IncorrectMethodDeclaration
                    methodName={getParam("methodname", "size")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/methodcallonwrongtype">
                <ProcessingErrors.MethodCallOnWrongType
                    methodName={getParam("methodname", "doSomething")}
                    varName={getParam("varname", "thing")}
                    typeName={getParam("typename", "int")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/methodnotfound">
                <ProcessingErrors.MethodNotFound
                    methodName={getParam("methodname", "doSomething")}
                    correctMethodName={getParam("correctmethodname", "correctName")}
                    typeName={getParam("typename", "int")}
                    providedParams={getParam("providedparams", "")}
                    providedTypes={getParam("providedtypes", "")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/nonstaticfromstatic">
                <ProcessingErrors.NonStaticFromStatic
                    methodName={getParam("methodname", "doSomething")}
                    staticMethodName={getParam("staticmethodname", "mainMethod")}
                    fileName={getParam("filename", "sketch_200201b")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/parametermismatch">
                <ProcessingErrors.ParameterMismatch
                    className={getParam("classname", "sketch_200721a")}
                    methodName={getParam("methodname", "doSomething")}
                    methodTypeName={getParam("methodtypename", "void")}
                    providedTypes={getParam("providedtypes", "double")}
                    requiredTypes={getParam("requiredtypes", "int")}
                    varName={getParam("varName", "returnedValue")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/returnmissing">
                <ProcessingErrors.ReturnMissing
                    methodName={getParam("methodname", "doSomething")}
                    typeName={getParam("typename", "int")}
                    requiredTypes={getParam("requiredtypes", "")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/syntaxerrorvariabledeclarators">
                <ProcessingErrors.SyntaxErrorVariableDeclarators
                    methodOneName={getParam("methodonename", "System.out.println")}
                    methodTwoName={getParam("methodtwoname", "doSomething")}
                    typeName={getParam("typename", "int")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/typenotfound">
                <ProcessingErrors.TypeNotFound
                    className={getParam("classname", "Thing")}
                    correctClassName={getParam("correctclassname", "CorrectName")}
                    varName={getParam("varname", "thing")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/typemismatch">
                <ProcessingErrors.TypeMismatch
                    varName={getParam("varname", "thing")}
                    typeOneName={getParam("typeonename", "float")}
                    typeTwoName={getParam("typetwoname", "int")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/unexpectedtoken">
                <ProcessingErrors.UnexpectedToken
                    typeName={getParam("typename", "int")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/variablenotfound">
                <ProcessingErrors.VariableNotFound
                    varName={getParam("varname", "thing")}
                    className={getParam("classname", "Thing")}
                    embed={embed}
                />
            </Route>

            <Route exact path="/variablenotinit">
                <ProcessingErrors.VariableNotInit
                    varName={getParam("varname", "thing")}
                    embed={embed}
                />
            </Route>
        </div>
    );
}
